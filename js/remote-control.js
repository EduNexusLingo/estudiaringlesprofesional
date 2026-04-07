/* ============================================
   REMOTE CONTROL - ENCUESTA PERSONALIZADA
   Edu Lingo | Menú flotante tipo control remoto
   ============================================ */

(function () {
  'use strict';

  /* ── Mapa de redirecciones ──────────────────────────────────────────
     Clave: "tipoEstudio|pais"
     Valor: URL de destino (relativa o absoluta)
  ──────────────────────────────────────────────────────────────────── */
  const REDIRECT_MAP = {
    // Curso de Inglés
    'ingles|irlanda':    'irlanda.html',
    'ingles|uk':         'inglaterra.html',
    'ingles|malta':      'malta.html',
    'ingles|espana':     'espana.html',
    'ingles|chipre':     'chipre.html',

    // Universidad Grado
    'grado|irlanda':     'programas-universitarios.html',
    'grado|uk':          'programas-universitarios.html',
    'grado|malta':       'programas-universitarios.html',
    'grado|espana':      'programas-universitarios.html',
    'grado|chipre':      'programas-universitarios.html',

    // Universidad Posgrado
    'posgrado|irlanda':  'programas-universitarios.html',
    'posgrado|uk':       'programas-universitarios.html',
    'posgrado|malta':    'programas-universitarios.html',
    'posgrado|espana':   'programas-universitarios.html',
    'posgrado|chipre':   'programas-universitarios.html',

    // Curso o Especialización
    'especializacion|irlanda':  'formaciones-profesionales.html',
    'especializacion|uk':       'formaciones-profesionales.html',
    'especializacion|malta':    'formaciones-profesionales.html',
    'especializacion|espana':   'formaciones-profesionales.html',
    'especializacion|chipre':   'formaciones-profesionales.html',
  };

  /* ── Opciones de los botones ──────────────────────────────────────── */
  const STUDY_OPTIONS = [
    { value: 'ingles',          icon: '🗣️', label: 'Curso de Inglés' },
    { value: 'grado',           icon: '🎓', label: 'Universidad Grado' },
    { value: 'posgrado',        icon: '🏛️', label: 'Posgrado' },
    { value: 'especializacion', icon: '📚', label: 'Especialización' },
  ];

  const COUNTRY_OPTIONS = [
    { value: 'irlanda', icon: '🇮🇪', label: 'Irlanda' },
    { value: 'uk',      icon: '🇬🇧', label: 'UK' },
    { value: 'malta',   icon: '🇲🇹', label: 'Malta' },
    { value: 'espana',  icon: '🇪🇸', label: 'España' },
    { value: 'chipre',  icon: '🇨🇾', label: 'Chipre' },
  ];

  /* ── Datos de la sesión ───────────────────────────────────────────── */
  let userData = {
    nombre:  '',
    edad:    '',
    ciudad:  '',
    estudio: '',
    pais:    '',
  };

  /* ── Helpers de Cookie ────────────────────────────────────────────── */
  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  }

  function saveUserData() {
    setCookie('rc_user', JSON.stringify(userData), 30);
    
    // Guardar en GitHub si está disponible
    if (window.githubStorage) {
      window.githubStorage.registerUser(userData).catch(e => {
        console.warn('Error guardando en GitHub:', e);
      });
    }
  }

  function loadUserData() {
    const raw = getCookie('rc_user');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        userData = { ...userData, ...parsed };
        return true;
      } catch (e) { /* ignorar */ }
    }
    return false;
  }

  /* ── Determinar URL de redirección ───────────────────────────────── */
  function getRedirectUrl() {
    const key = `${userData.estudio}|${userData.pais}`;
    return REDIRECT_MAP[key] || 'index.html#programs';
  }

  /* ── Detectar si estamos en la raíz o en una subpágina ───────────── */
  function getBasePath() {
    const path = window.location.pathname;
    // Si el archivo es index.html o la raíz, base = ''
    if (path.endsWith('index.html') || path.endsWith('/') || path === '') {
      return '';
    }
    // Estamos en una subpágina al mismo nivel
    return '';
  }

  /* ── Construir el HTML del control remoto ────────────────────────── */
  function buildHTML() {
    const studyBtns = STUDY_OPTIONS.map(opt => `
      <button class="rc-option-btn" data-group="estudio" data-value="${opt.value}" title="${opt.label}">
        <span class="rc-btn-icon">${opt.icon}</span>
        ${opt.label}
      </button>
    `).join('');

    const countryBtns = COUNTRY_OPTIONS.map(opt => `
      <button class="rc-option-btn" data-group="pais" data-value="${opt.value}" title="${opt.label}">
        <span class="rc-btn-icon">${opt.icon}</span>
        ${opt.label}
      </button>
    `).join('');

    return `
    <!-- REMOTE CONTROL WIDGET -->
    <div id="remote-control">

      <!-- Botón toggle (visible cuando está minimizado) -->
      <button id="rc-toggle-btn" title="Personaliza tu búsqueda" aria-label="Abrir asistente de búsqueda">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </button>

      <!-- Panel principal -->
      <div id="rc-panel" role="dialog" aria-label="Asistente de búsqueda personalizada">

        <!-- Cabecera -->
        <div id="rc-header">
          <div id="rc-header-title">
            🎓 Encuentra tu programa
            <span id="rc-header-subtitle">Cuéntanos qué buscas</span>
          </div>
          <button id="rc-minimize-btn" title="Minimizar" aria-label="Minimizar asistente">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 13H5v-2h14v2z"/>
            </svg>
          </button>
        </div>

        <!-- Cuerpo: formulario de encuesta -->
        <div id="rc-body">

          <!-- Vista de encuesta -->
          <div id="rc-survey-view">

            <!-- Nombre -->
            <div class="rc-field-group">
              <label class="rc-label" for="rc-nombre">👤 Tu nombre</label>
              <input class="rc-input" id="rc-nombre" type="text" placeholder="¿Cómo te llamas?" maxlength="40" autocomplete="given-name">
            </div>

            <!-- Edad y Ciudad en fila -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
              <div class="rc-field-group">
                <label class="rc-label" for="rc-edad">🎂 Edad</label>
                <input class="rc-input" id="rc-edad" type="number" placeholder="Ej: 25" min="15" max="70" style="padding:9px 10px;">
              </div>
              <div class="rc-field-group">
                <label class="rc-label" for="rc-ciudad">📍 Ciudad</label>
                <input class="rc-input" id="rc-ciudad" type="text" placeholder="Tu ciudad" maxlength="40" autocomplete="address-level2">
              </div>
            </div>

            <div class="rc-divider"></div>

            <!-- Tipo de estudio -->
            <div class="rc-field-group">
              <label class="rc-label">📖 ¿Qué te interesa estudiar?</label>
              <div class="rc-btn-grid cols-2">
                ${studyBtns}
              </div>
            </div>

            <div class="rc-divider"></div>

            <!-- País de interés -->
            <div class="rc-field-group">
              <label class="rc-label">🌍 ¿Dónde quieres estudiar?</label>
              <div class="rc-btn-grid cols-3">
                ${countryBtns}
              </div>
            </div>

            <div class="rc-divider"></div>

            <!-- Botón de ir -->
            <button id="rc-go-btn" disabled>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              Ver programas para mí
            </button>

            <!-- Nota de privacidad -->
            <p id="rc-privacy-note">🔒 Tus datos se guardan solo en tu navegador y no se comparten.</p>

          </div><!-- /rc-survey-view -->

          <!-- Vista de usuario ya registrado -->
          <div id="rc-completed-view">

            <div class="rc-user-badge">
              <div class="rc-user-avatar" id="rc-avatar-initial">?</div>
              <div class="rc-user-info">
                <div class="rc-user-name" id="rc-display-name">—</div>
                <div class="rc-user-detail" id="rc-display-detail">—</div>
              </div>
            </div>

            <div class="rc-quick-links-title">Accesos rápidos para ti</div>
            <div class="rc-quick-links" id="rc-quick-links-container">
              <!-- Se genera dinámicamente -->
            </div>

            <button class="rc-reset-btn" id="rc-reset-btn">
              ↺ Cambiar mis preferencias
            </button>

          </div><!-- /rc-completed-view -->

        </div><!-- /rc-body -->
      </div><!-- /rc-panel -->
    </div>
    <!-- /REMOTE CONTROL WIDGET -->
    `;
  }

  /* ── Generar accesos rápidos según perfil ────────────────────────── */
  function buildQuickLinks() {
    const container = document.getElementById('rc-quick-links-container');
    if (!container) return;

    const links = [];

    // Enlace principal según su selección
    const mainUrl = getRedirectUrl();
    const studyOpt = STUDY_OPTIONS.find(o => o.value === userData.estudio);
    const countryOpt = COUNTRY_OPTIONS.find(o => o.value === userData.pais);

    if (studyOpt && countryOpt) {
      links.push({
        url: mainUrl,
        icon: studyOpt.icon,
        label: `${studyOpt.label} en ${countryOpt.label}`,
        highlight: true,
      });
    }

    // Enlace al país seleccionado
    if (countryOpt) {
      const countryUrls = {
        irlanda: 'irlanda.html',
        uk:      'inglaterra.html',
        malta:   'malta.html',
        espana:  'espana.html',
        chipre:  'chipre.html',
      };
      links.push({
        url: countryUrls[userData.pais] || 'index.html#destinations',
        icon: countryOpt.icon,
        label: `Destino: ${countryOpt.label}`,
      });
    }

    // Enlace a contacto
    links.push({
      url: 'index.html#contact',
      icon: '💬',
      label: 'Asesoría gratis',
    });

    // Enlace a WhatsApp
    links.push({
      url: 'https://wa.me/353876152691?text=' + encodeURIComponent(
        `Hola! Soy ${userData.nombre || 'un estudiante'} de ${userData.ciudad || 'Latinoamérica'} y me interesa ${studyOpt ? studyOpt.label : 'estudiar'} en ${countryOpt ? countryOpt.label : 'Europa'}.`
      ),
      icon: '📱',
      label: 'WhatsApp',
      external: true,
    });

    container.innerHTML = links.map(link => `
      <a class="rc-quick-link ${link.highlight ? 'selected' : ''}"
         href="${link.url}"
         ${link.external ? 'target="_blank" rel="noopener"' : ''}>
        <span class="rc-ql-icon">${link.icon}</span>
        ${link.label}
      </a>
    `).join('');
  }

  /* ── Actualizar la vista de "completado" ─────────────────────────── */
  function showCompletedView() {
    const surveyView    = document.getElementById('rc-survey-view');
    const completedView = document.getElementById('rc-completed-view');
    const avatarEl      = document.getElementById('rc-avatar-initial');
    const nameEl        = document.getElementById('rc-display-name');
    const detailEl      = document.getElementById('rc-display-detail');
    const subtitleEl    = document.getElementById('rc-header-subtitle');

    if (!surveyView || !completedView) return;

    const nombre  = userData.nombre  || 'Estudiante';
    const ciudad  = userData.ciudad  || '';
    const edad    = userData.edad    || '';
    const studyOpt   = STUDY_OPTIONS.find(o => o.value === userData.estudio);
    const countryOpt = COUNTRY_OPTIONS.find(o => o.value === userData.pais);

    // Avatar con inicial
    avatarEl.textContent = nombre.charAt(0).toUpperCase();

    // Info del usuario
    nameEl.textContent   = nombre + (edad ? `, ${edad} años` : '');
    detailEl.textContent = [ciudad, studyOpt?.label, countryOpt?.label].filter(Boolean).join(' · ');

    // Subtítulo del header
    if (subtitleEl) subtitleEl.textContent = `Hola ${nombre.split(' ')[0]} 👋`;

    // Construir accesos rápidos
    buildQuickLinks();

    // Mostrar vista completada
    surveyView.style.display    = 'none';
    completedView.style.display = 'flex';
  }

  /* ── Mostrar vista de encuesta ───────────────────────────────────── */
  function showSurveyView() {
    const surveyView    = document.getElementById('rc-survey-view');
    const completedView = document.getElementById('rc-completed-view');
    const subtitleEl    = document.getElementById('rc-header-subtitle');

    if (!surveyView || !completedView) return;

    surveyView.style.display    = 'block';
    completedView.style.display = 'none';

    if (subtitleEl) subtitleEl.textContent = 'Cuéntanos qué buscas';

    // Pre-rellenar campos si hay datos previos
    const nombreInput = document.getElementById('rc-nombre');
    const edadInput   = document.getElementById('rc-edad');
    const ciudadInput = document.getElementById('rc-ciudad');

    if (nombreInput && userData.nombre) nombreInput.value = userData.nombre;
    if (edadInput   && userData.edad)   edadInput.value   = userData.edad;
    if (ciudadInput && userData.ciudad) ciudadInput.value = userData.ciudad;

    // Re-seleccionar botones
    if (userData.estudio) {
      const btn = document.querySelector(`.rc-option-btn[data-group="estudio"][data-value="${userData.estudio}"]`);
      if (btn) btn.classList.add('selected');
    }
    if (userData.pais) {
      const btn = document.querySelector(`.rc-option-btn[data-group="pais"][data-value="${userData.pais}"]`);
      if (btn) btn.classList.add('selected');
    }

    checkGoButton();
  }

  /* ── Verificar si el botón "ir" debe estar activo ────────────────── */
  function checkGoButton() {
    const goBtn = document.getElementById('rc-go-btn');
    if (!goBtn) return;
    const ready = userData.estudio && userData.pais;
    goBtn.disabled = !ready;
    goBtn.style.opacity = ready ? '1' : '0.5';
    goBtn.style.cursor  = ready ? 'pointer' : 'not-allowed';
  }

  /* ── Abrir / cerrar el panel ─────────────────────────────────────── */
  function openPanel() {
    const panel     = document.getElementById('rc-panel');
    const toggleBtn = document.getElementById('rc-toggle-btn');
    if (!panel || !toggleBtn) return;

    panel.classList.add('rc-open');
    toggleBtn.style.display = 'none';

    // Decidir qué vista mostrar
    if (userData.nombre && userData.estudio && userData.pais) {
      showCompletedView();
    } else {
      showSurveyView();
    }
  }

  function closePanel() {
    const panel     = document.getElementById('rc-panel');
    const toggleBtn = document.getElementById('rc-toggle-btn');
    if (!panel || !toggleBtn) return;

    panel.classList.remove('rc-open');
    toggleBtn.style.display = 'flex';
  }

  /* ── Inicializar eventos ─────────────────────────────────────────── */
  function bindEvents() {
    // Toggle abrir
    document.getElementById('rc-toggle-btn')?.addEventListener('click', openPanel);

    // Minimizar
    document.getElementById('rc-minimize-btn')?.addEventListener('click', closePanel);

    // Botones de opción (estudio y país)
    document.querySelectorAll('.rc-option-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const group = this.dataset.group;
        const value = this.dataset.value;

        // Deseleccionar otros del mismo grupo
        document.querySelectorAll(`.rc-option-btn[data-group="${group}"]`).forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');

        userData[group] = value;
        checkGoButton();
      });
    });

    // Inputs de texto
    document.getElementById('rc-nombre')?.addEventListener('input', function () {
      userData.nombre = this.value.trim();
    });
    document.getElementById('rc-edad')?.addEventListener('input', function () {
      userData.edad = this.value.trim();
    });
    document.getElementById('rc-ciudad')?.addEventListener('input', function () {
      userData.ciudad = this.value.trim();
    });

    // Botón "Ver programas"
    document.getElementById('rc-go-btn')?.addEventListener('click', function () {
      if (!userData.estudio || !userData.pais) return;

      // Guardar en cookie
      saveUserData();

      // Registrar en GitHub
      if (window.githubStorage) {
        window.githubStorage.registerUser(userData).catch(e => {
          console.warn('Error registrando en GitHub:', e);
        });
      }

    // Redirigir
    const url = getRedirectUrl();
    window.location.href = url;
    });

    // Botón reset
    document.getElementById('rc-reset-btn')?.addEventListener('click', function () {
      // Limpiar datos
      userData = { nombre: '', edad: '', ciudad: '', estudio: '', pais: '' };
      deleteCookie('rc_user');
      showSurveyView();
    });

    // Cerrar al hacer clic fuera del panel
    document.addEventListener('click', function (e) {
      const rc = document.getElementById('remote-control');
      if (rc && !rc.contains(e.target)) {
        closePanel();
      }
    });
  }

  /* ── Auto-abrir si es primera visita (sin cookie) ────────────────── */
  function maybeAutoOpen() {
    const hasData = loadUserData();
    if (!hasData) {
      // Primera visita: abrir automáticamente después de 2 segundos
      setTimeout(openPanel, 2000);
    }
    // Si ya tiene datos, solo mostrar el botón toggle (no abrir)
  }

  /* ── Funcionalidad de Arrastre (Drag & Drop) ─────────────────────── */
  let isDragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;
  let lastX = 0;
  let lastY = 0;

  function startDrag(e) {
    // Solo arrastrar desde el botón toggle, no desde el panel
    if (e.target.closest('#rc-panel') && !e.target.closest('#rc-header')) return;
    
    isDragging = true;
    const rc = document.getElementById('remote-control');
    if (!rc) return;

    // Obtener posición actual
    const rect = rc.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    dragOffsetX = clientX - rect.left;
    dragOffsetY = clientY - rect.top;
    lastX = clientX;
    lastY = clientY;

    rc.classList.add('rc-dragging');
    e.preventDefault();
  }

  function drag(e) {
    if (!isDragging) return;

    const rc = document.getElementById('remote-control');
    if (!rc) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    // Calcular nueva posición
    let newX = clientX - dragOffsetX;
    let newY = clientY - dragOffsetY;

    // Limitar dentro del viewport
    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 80;
    const minX = 0;
    const minY = 0;

    newX = Math.max(minX, Math.min(newX, maxX));
    newY = Math.max(minY, Math.min(newY, maxY));

    // Aplicar transformación para mejor rendimiento
    rc.style.left = 'auto';
    rc.style.right = 'auto';
    rc.style.bottom = 'auto';
    rc.style.top = newY + 'px';
    rc.style.left = newX + 'px';

    lastX = clientX;
    lastY = clientY;
    e.preventDefault();
  }

  function stopDrag(e) {
    if (!isDragging) return;

    isDragging = false;
    const rc = document.getElementById('remote-control');
    if (!rc) return;

    rc.classList.remove('rc-dragging');
    e.preventDefault();
  }

  /* ── Punto de entrada ────────────────────────────────────────────── */
  function init() {
    // Insertar HTML en el body
    const wrapper = document.createElement('div');
    wrapper.innerHTML = buildHTML();
    document.body.appendChild(wrapper.firstElementChild);

    // Cargar datos de cookie (si existen)
    loadUserData();

    // Enlazar eventos
    bindEvents();

    // Agregar listeners para arrastre (mouse y touch)
    const rc = document.getElementById('remote-control');
    if (rc) {
      // Mouse events
      rc.addEventListener('mousedown', startDrag);
      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', stopDrag);

      // Touch events
      rc.addEventListener('touchstart', startDrag);
      document.addEventListener('touchmove', drag, { passive: false });
      document.addEventListener('touchend', stopDrag);
    }

    // Pre-rellenar si hay datos guardados
    if (userData.nombre || userData.estudio || userData.pais) {
      // Hay datos: pre-rellenar silenciosamente
      const nombreInput = document.getElementById('rc-nombre');
      const edadInput   = document.getElementById('rc-edad');
      const ciudadInput = document.getElementById('rc-ciudad');

      if (nombreInput && userData.nombre) nombreInput.value = userData.nombre;
      if (edadInput   && userData.edad)   edadInput.value   = userData.edad;
      if (ciudadInput && userData.ciudad) ciudadInput.value = userData.ciudad;

      if (userData.estudio) {
        const btn = document.querySelector(`.rc-option-btn[data-group="estudio"][data-value="${userData.estudio}"]`);
        if (btn) btn.classList.add('selected');
      }
      if (userData.pais) {
        const btn = document.querySelector(`.rc-option-btn[data-group="pais"][data-value="${userData.pais}"]`);
        if (btn) btn.classList.add('selected');
      }
      checkGoButton();
    }

    // Auto-abrir en primera visita
    maybeAutoOpen();
  }

  /* ── Ejecutar cuando el DOM esté listo ──────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
