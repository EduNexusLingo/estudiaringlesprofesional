/* ============================================
   GITHUB STORAGE - Persistencia de datos en GitHub
   Edu Lingo | Almacenamiento en repositorio
   ============================================ */

(function () {
  'use strict';

  // ⚠️ IMPORTANTE: Reemplaza estos valores con los tuyos
  // Obtén el token en: https://github.com/settings/tokens (scope: repo, contents)
  const GITHUB_CONFIG = {
    owner: 'tu-usuario-github',           // Reemplazar
    repo: 'tu-repo-github',               // Reemplazar
    token: 'ghp_tu_token_aqui',           // Reemplazar
    branch: 'main',
    filePath: 'data/usuarios.json',
  };

  const GITHUB_API = 'https://api.github.com';

  // Mapa de países con saludos personalizados
  const COUNTRY_GREETINGS = {
    'AR': { demonym: 'Argentino', slang: '¡Hola, che, amigazo!', flag: '🇦🇷' },
    'CO': { demonym: 'Colombiano', slang: '¡Parce, qué más!', flag: '🇨🇴' },
    'MX': { demonym: 'Mexicano', slang: '¡Qué onda, compa!', flag: '🇲🇽' },
    'BR': { demonym: 'Brasileño', slang: 'E aí, meu irmão!', flag: '🇧🇷' },
    'CL': { demonym: 'Chileno', slang: '¡Buena, po!', flag: '🇨🇱' },
    'PE': { demonym: 'Peruano', slang: '¡Habla, causa!', flag: '🇵🇪' },
    'VE': { demonym: 'Venezolano', slang: '¡Épale, compadre!', flag: '🇻🇪' },
    'EC': { demonym: 'Ecuatoriano', slang: '¡Pana, qué tal!', flag: '🇪🇨' },
    'UY': { demonym: 'Uruguayo', slang: '¡Bo, qué tal!', flag: '🇺🇾' },
    'ES': { demonym: 'Español', slang: '¡Hola, tío, qué tal!', flag: '🇪🇸' },
    'IE': { demonym: 'Irish', slang: "What's the craic, friend!", flag: '🇮🇪' },
    'GB': { demonym: 'British', slang: 'Alright mate, how are ya?', flag: '🇬🇧' },
    'US': { demonym: 'American', slang: 'Hey there, buddy!', flag: '🇺🇸' },
    'CA': { demonym: 'Canadian', slang: 'Hey there, eh!', flag: '🇨🇦' },
    'MT': { demonym: 'Maltese', slang: 'Ħello, ħabib!', flag: '🇲🇹' },
    'CY': { demonym: 'Cypriot', slang: 'Kalispéra, fíle!', flag: '🇨🇾' },
    'PT': { demonym: 'Portugués', slang: 'Olá, amigo!', flag: '🇵🇹' },
    'FR': { demonym: 'Francés', slang: 'Salut, mon ami!', flag: '🇫🇷' },
    'DE': { demonym: 'Alemán', slang: 'Hallo, Freund!', flag: '🇩🇪' },
    'IT': { demonym: 'Italiano', slang: 'Ciao, amico!', flag: '🇮🇹' },
  };

  /* ── Detectar país del usuario ────────────────────────────────── */
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

  /* ── Obtener contenido del archivo JSON desde GitHub ────────────── */
  async function getFileFromGitHub() {
    try {
      const url = `${GITHUB_API}/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.filePath}`;
      const response = await fetch(url, {
        headers: {
          'Authorization': `token ${GITHUB_CONFIG.token}`,
          'Accept': 'application/vnd.github.v3.raw',
        },
      });

      if (response.ok) {
        const content = await response.text();
        return JSON.parse(content);
      } else if (response.status === 404) {
        console.warn('Archivo no encontrado en GitHub');
        return null;
      } else {
        console.warn('Error obteniendo archivo:', response.status);
        return null;
      }
    } catch (e) {
      console.warn('No se pudo conectar a GitHub:', e);
      return null;
    }
  }

  /* ── Obtener SHA del archivo (necesario para actualizar) ────────── */
  async function getFileSHA() {
    try {
      const url = `${GITHUB_API}/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.filePath}`;
      const response = await fetch(url, {
        headers: {
          'Authorization': `token ${GITHUB_CONFIG.token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data.sha;
      }
      return null;
    } catch (e) {
      console.warn('Error obteniendo SHA:', e);
      return null;
    }
  }

  /* ── Guardar datos en GitHub ──────────────────────────────────── */
  async function saveToGitHub(data) {
    try {
      const sha = await getFileSHA();
      if (!sha) {
        console.warn('No se pudo obtener SHA del archivo');
        return false;
      }

      const url = `${GITHUB_API}/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.filePath}`;
      const content = btoa(JSON.stringify(data, null, 2)); // Base64 encode

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${GITHUB_CONFIG.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `[AUTO] Actualización de estadísticas - ${new Date().toISOString()}`,
          content: content,
          sha: sha,
          branch: GITHUB_CONFIG.branch,
        }),
      });

      if (response.ok) {
        console.log('Datos guardados en GitHub exitosamente');
        return true;
      } else {
        console.warn('Error guardando en GitHub:', response.status);
        return false;
      }
    } catch (e) {
      console.warn('Error en saveToGitHub:', e);
      return false;
    }
  }

  /* ── Registrar usuario en GitHub ──────────────────────────────── */
  async function registerUserInGitHub(userData, countryInfo) {
    try {
      // Obtener datos actuales
      let data = await getFileFromGitHub();
      if (!data) {
        data = {
          usuarios: [],
          estadisticas: { total_visitas: 0, paises: {}, intereses: {} },
          config: { last_updated: new Date().toISOString(), version: '1.0.0' },
        };
      }

      // Buscar si el usuario ya existe (por IP)
      const existingIndex = data.usuarios.findIndex(u => u.ip === countryInfo.ip);
      const timestamp = new Date().toISOString();

      const userRecord = {
        ip: countryInfo.ip,
        nombre: userData.nombre || 'Visitante',
        edad: userData.edad || null,
        ciudad: userData.ciudad || countryInfo.city,
        pais_code: countryInfo.country_code,
        pais_nombre: countryInfo.country_name,
        tipo_estudio: userData.estudio || null,
        pais_interes: userData.pais || null,
        ultima_pagina: window.location.pathname,
        primera_visita: existingIndex >= 0 ? data.usuarios[existingIndex].primera_visita : timestamp,
        ultima_visita: timestamp,
        visitas: (existingIndex >= 0 ? data.usuarios[existingIndex].visitas : 0) + 1,
      };

      if (existingIndex >= 0) {
        data.usuarios[existingIndex] = userRecord;
      } else {
        data.usuarios.push(userRecord);
      }

      // Actualizar estadísticas
      data.estadisticas.total_visitas = (data.estadisticas.total_visitas || 0) + 1;
      data.estadisticas.paises[countryInfo.country_code] = 
        (data.estadisticas.paises[countryInfo.country_code] || 0) + 1;
      if (userData.estudio) {
        data.estadisticas.intereses[userData.estudio] = 
          (data.estadisticas.intereses[userData.estudio] || 0) + 1;
      }

      data.config.last_updated = timestamp;

      // Guardar en GitHub
      return await saveToGitHub(data);
    } catch (e) {
      console.warn('Error registrando usuario:', e);
      return false;
    }
  }

  /* ── Obtener perfil del usuario desde GitHub ──────────────────── */
  async function getUserProfile(countryInfo) {
    try {
      const data = await getFileFromGitHub();
      if (!data || !data.usuarios) return null;

      const user = data.usuarios.find(u => u.ip === countryInfo.ip);
      if (!user) return null;

      const greetingInfo = COUNTRY_GREETINGS[user.pais_code] || {
        demonym: 'Amigo',
        slang: '¡Hola, bienvenido de vuelta!',
        flag: '🌍',
      };

      return {
        existe: true,
        nombre: user.nombre,
        edad: user.edad,
        ciudad: user.ciudad,
        pais_code: user.pais_code,
        pais_nombre: user.pais_nombre,
        tipo_estudio: user.tipo_estudio,
        pais_interes: user.pais_interes,
        ultima_pagina: user.ultima_pagina,
        visitas: user.visitas,
        saludo: greetingInfo.slang,
        flag: greetingInfo.flag,
        demonym: greetingInfo.demonym,
      };
    } catch (e) {
      console.warn('Error obteniendo perfil:', e);
      return null;
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
      cursor: pointer;
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

    // Hacer clic para cerrar
    greeting.addEventListener('click', () => {
      greeting.classList.add('fade-out');
      setTimeout(() => greeting.remove(), 500);
    });

    // Auto-cerrar después de 5 segundos
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
        setTimeout(() => {
          window.location.href = file;
        }, 1500);
        return;
      }
    }
  }

  /* ── API Pública ──────────────────────────────────────────────── */
  window.githubStorage = {
    async init() {
      console.log('Inicializando GitHub Storage...');

      // Detectar país
      const countryInfo = await detectCountry();
      console.log('País detectado:', countryInfo);

      // Guardar en localStorage
      localStorage.setItem('rc_country_code', countryInfo.country_code);
      localStorage.setItem('rc_country_name', countryInfo.country_name);
      localStorage.setItem('rc_city', countryInfo.city);
      localStorage.setItem('rc_ip', countryInfo.ip);

      // Obtener perfil existente
      const profile = await getUserProfile(countryInfo);

      if (profile && profile.existe) {
        console.log('Usuario recurrente detectado');
        showWelcomeGreeting(profile);
        redirectToLastPage(profile);
      }
    },

    async registerUser(userData) {
      const countryInfo = {
        country_code: localStorage.getItem('rc_country_code') || 'US',
        country_name: localStorage.getItem('rc_country_name') || 'Unknown',
        city: localStorage.getItem('rc_city') || 'Unknown',
        ip: localStorage.getItem('rc_ip') || '0.0.0.0',
      };

      return await registerUserInGitHub(userData, countryInfo);
    },

    getCountryGreeting(countryCode) {
      return COUNTRY_GREETINGS[countryCode] || {
        demonym: 'Amigo',
        slang: '¡Hola, bienvenido!',
        flag: '🌍',
      };
    },
  };

  /* ── Ejecutar al cargar ──────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.githubStorage.init();
    });
  } else {
    window.githubStorage.init();
  }
})();
