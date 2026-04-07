/* ============================================
   BACKEND INTEGRATION - ESTADÍSTICAS Y GEOLOCALIZACIÓN
   Edu Lingo | Integración con API backend
   ============================================ */

(function () {
  'use strict';

  // Configuración del backend
  const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000';
  const API_ENDPOINTS = {
    registrar: `${BACKEND_URL}/api/usuarios/registrar`,
    perfil: `${BACKEND_URL}/api/usuarios/perfil`,
    evento: `${BACKEND_URL}/api/eventos/registrar`,
  };

  // Mapa de códigos de país (para cuando se detecte por IP)
  const COUNTRY_MAP = {
    'AR': 'Argentina', 'CO': 'Colombia', 'MX': 'México', 'BR': 'Brasil',
    'CL': 'Chile', 'PE': 'Perú', 'VE': 'Venezuela', 'EC': 'Ecuador',
    'UY': 'Uruguay', 'ES': 'España', 'IE': 'Irlanda', 'GB': 'Reino Unido',
    'US': 'Estados Unidos', 'CA': 'Canadá', 'MT': 'Malta', 'CY': 'Chipre',
    'PT': 'Portugal', 'FR': 'Francia', 'DE': 'Alemania', 'IT': 'Italia',
  };

  /* ── Detectar país del usuario (usando ip-api.com) ────────────────── */
  async function detectCountry() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return {
        country_code: data.country_code || 'US',
        country_name: data.country_name || 'Unknown',
        city: data.city || 'Unknown',
        ip: data.ip || '0.0.0.0',
      };
    } catch (e) {
      console.warn('No se pudo detectar país:', e);
      return {
        country_code: 'US',
        country_name: 'Unknown',
        city: 'Unknown',
        ip: '0.0.0.0',
      };
    }
  }

  /* ── Enviar datos del usuario al backend ────────────────────────── */
  async function sendUserDataToBackend(userData, countryInfo) {
    try {
      const payload = {
        nombre: userData.nombre || 'Visitante',
        edad: userData.edad || null,
        ciudad: userData.ciudad || countryInfo.city,
        pais_code: countryInfo.country_code,
        tipo_estudio: userData.estudio || null,
        pais_interes: userData.pais || null,
        ultima_pagina: window.location.pathname,
      };

      const response = await fetch(API_ENDPOINTS.registrar, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Datos enviados al backend:', result);
        return result;
      } else {
        console.warn('Error enviando datos:', response.status);
      }
    } catch (e) {
      console.warn('No se pudo conectar al backend:', e);
      // Continuar sin backend si no está disponible
    }
  }

  /* ── Obtener perfil del usuario desde el backend ────────────────── */
  async function fetchUserProfile() {
    try {
      const response = await fetch(API_ENDPOINTS.perfil);
      if (response.ok) {
        const profile = await response.json();
        if (profile.existe) {
          console.log('Perfil encontrado:', profile);
          return profile;
        }
      }
    } catch (e) {
      console.warn('No se pudo obtener perfil:', e);
    }
    return null;
  }

  /* ── Registrar evento en el backend ────────────────────────────── */
  async function logEvent(eventType, pageName, data = {}) {
    try {
      const payload = {
        evento: eventType,
        pagina: pageName,
        datos: data,
      };

      await fetch(API_ENDPOINTS.evento, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      console.warn('No se pudo registrar evento:', e);
    }
  }

  /* ── Mostrar saludo flotante personalizado ──────────────────────── */
  function showWelcomeGreeting(profile) {
    if (!profile || !profile.saludo) return;

    const greeting = document.createElement('div');
    greeting.id = 'rc-welcome-greeting';
    greeting.style.cssText = `
      position: fixed;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #0066CC 0%, #004fa3 100%);
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 102, 204, 0.4);
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      font-weight: 600;
      text-align: center;
      z-index: 10000;
      animation: slideDown 0.5s ease-out;
      max-width: 90%;
    `;

    const message = `${profile.flag} ${profile.saludo}`;
    greeting.innerHTML = message;

    // Agregar animación CSS
    if (!document.getElementById('rc-greeting-style')) {
      const style = document.createElement('style');
      style.id = 'rc-greeting-style';
      style.textContent = `
        @keyframes slideDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0);     }
        }
        @keyframes slideUp {
          from { opacity: 1; transform: translateX(-50%) translateY(0);     }
          to   { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        }
        #rc-welcome-greeting.fade-out {
          animation: slideUp 0.5s ease-in forwards;
        }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(greeting);

    // Hacer clic para cerrar o auto-cerrar después de 5 segundos
    greeting.addEventListener('click', () => {
      greeting.classList.add('fade-out');
      setTimeout(() => greeting.remove(), 500);
    });

    setTimeout(() => {
      if (greeting.parentNode) {
        greeting.classList.add('fade-out');
        setTimeout(() => greeting.remove(), 500);
      }
    }, 5000);
  }

  /* ── Redirigir a la última página visitada ──────────────────────── */
  function redirectToLastPage(profile) {
    if (!profile || !profile.ultima_pagina) return;

    const lastPage = profile.ultima_pagina;
    const currentPage = window.location.pathname;

    // No redirigir si ya estamos en esa página
    if (currentPage.includes(lastPage)) return;

    // Mapeo de rutas
    const pageMap = {
      '/irlanda.html': 'irlanda.html',
      '/inglaterra.html': 'inglaterra.html',
      '/malta.html': 'malta.html',
      '/espana.html': 'espana.html',
      '/chipre.html': 'chipre.html',
      '/cursos-ingles.html': 'cursos-ingles.html',
      '/programas-universitarios.html': 'programas-universitarios.html',
      '/formaciones-profesionales.html': 'formaciones-profesionales.html',
    };

    for (const [path, file] of Object.entries(pageMap)) {
      if (lastPage.includes(file) || lastPage.includes(path)) {
        console.log(`Redirigiendo a última página: ${file}`);
        // Redirigir después de mostrar el saludo
        setTimeout(() => {
          window.location.href = file;
        }, 1500);
        return;
      }
    }
  }

  /* ── Integración con el Control Remoto ──────────────────────────── */
  window.remoteControlBackendIntegration = {
    async init() {
      console.log('Inicializando integración con backend...');

      // Detectar país
      const countryInfo = await detectCountry();
      console.log('Información de país detectada:', countryInfo);

      // Guardar en localStorage para uso del control remoto
      localStorage.setItem('rc_country_code', countryInfo.country_code);
      localStorage.setItem('rc_country_name', countryInfo.country_name);
      localStorage.setItem('rc_city', countryInfo.city);
      localStorage.setItem('rc_ip', countryInfo.ip);

      // Obtener perfil existente del usuario
      const profile = await fetchUserProfile();

      if (profile && profile.existe) {
        // Usuario recurrente: mostrar saludo y redirigir
        console.log('Usuario recurrente detectado');
        showWelcomeGreeting(profile);
        redirectToLastPage(profile);
      }

      // Registrar evento de página visitada
      logEvent('page_visit', window.location.pathname, {
        country: countryInfo.country_code,
        city: countryInfo.city,
      });
    },

    async sendUserData(userData) {
      const countryInfo = {
        country_code: localStorage.getItem('rc_country_code') || 'US',
        city: localStorage.getItem('rc_city') || 'Unknown',
      };
      await sendUserDataToBackend(userData, countryInfo);
    },

    async logEvent(eventType, pageName, data) {
      await logEvent(eventType, pageName, data);
    },
  };

  /* ── Ejecutar al cargar la página ──────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.remoteControlBackendIntegration.init();
    });
  } else {
    window.remoteControlBackendIntegration.init();
  }
})();
