
/* ============================================
   TEMU STYLE GIFT & GEO-DETECTION LOGIC (REFINED)
   ============================================ */

const countryData = {
     // --- NORTEAMÉRICA ---
    'US': { 
        name: 'Estados Unidos', 
        demonym: 'Americans', 
        flag: '🇺🇸', 
        slang: 'Hey!', 
        offerTitle: 'Exclusive Offer for Americans!',
        labelPrefix: 'OFFER FOR',
        message: 'we have an incredible offer for you in the US. We guarantee to match any price or we refund the difference. Don\'t miss this unique opportunity to study English in Europe!' 
    },
    'CA': { 
        name: 'Canadá', 
        demonym: 'Canadians', 
        flag: '🇨🇦', 
        slang: 'Eh!', 
        offerTitle: 'Exclusive Offer for Canadians!',
        labelPrefix: 'OFFER FOR',
        message: 'we have an incredible offer for you in Canada. We guarantee to match any price or we refund the difference. Don\'t miss this unique opportunity to study English in Europe!' 
    },
    'MX': { 
        name: 'México', 
        demonym: 'Mexicanos', 
        flag: '🇲🇽', 
        slang: '¡Qué onda!', 
        offerTitle: '¡Oferta Exclusiva para Mexicanos!',
        labelPrefix: 'OFERTA PARA',
        message: 'tenemos una oferta increíble para ti que estás en México. Te garantizamos igualarte el precio o te devolvemos la diferencia. ¡No te pierdas esta oportunidad única de estudiar inglés en Europa!' 
    },

    // --- SUDAMÉRICA ---
    'AR': { 
        name: 'Argentina', 
        demonym: 'Argentinos', 
        flag: '🇦🇷', 
        slang: '¡Amigazo!', 
        offerTitle: '¡Oferta Exclusiva para Argentinos!',
        labelPrefix: 'OFERTA PARA',
        message: 'tenemos una oferta increíble para vos que estás en Argentina. Te garantizamos igualarte el precio o te devolvemos la diferencia. ¡No te pierdas esta oportunidad única de estudiar inglés en Europa!' 
    },
    'CO': { 
        name: 'Colombia', 
        demonym: 'Colombianos', 
        flag: '🇨🇴', 
        slang: '¡Parce!', 
        offerTitle: '¡Oferta Exclusiva para Colombianos!',
        labelPrefix: 'OFERTA PARA',
        message: 'tenemos una oferta increíble para ti que estás en Colombia. Te garantizamos igualarte el precio o te devolvemos la diferencia. ¡No te pierdas esta oportunidad única de estudiar inglés en Europa!' 
    },

    // --- EUROPA ---
    'IE': { 
        name: 'Irlanda', 
        demonym: 'Irish', 
        flag: '🇮🇪', 
        slang: 'What\'s the craic!', 
        offerTitle: 'Exclusive Offer for Irish!',
        labelPrefix: 'OFFER FOR',
        message: 'we have an incredible offer for you in Ireland. We guarantee to match any price or we refund the difference. Don\'t miss this unique opportunity to study English in Europe!' 
    },
    'GB': { 
        name: 'Reino Unido', 
        demonym: 'British', 
        flag: '🇬🇧', 
        slang: 'Alright mate!', 
        offerTitle: 'Exclusive Offer for British!',
        labelPrefix: 'OFFER FOR',
        message: 'we have an incredible offer for you in the UK. We guarantee to match any price or we refund the difference. Don\'t miss this unique opportunity to study English in Europe!' 
    },
    'ES': { 
        name: 'España', 
        demonym: 'Españoles', 
        flag: '🇪🇸', 
        slang: '¡Hola tío!', 
        offerTitle: '¡Oferta Exclusiva para Españoles!',
        labelPrefix: 'OFERTA PARA',
        message: 'tenemos una oferta increíble para ti que estás en España. Te garantizamos igualarte el precio o te devolvemos la diferencia. ¡No te pierdas esta oportunidad única de estudiar inglés en Europa!' 
    },

    'DEFAULT': { 
        name: 'tu país', 
        demonym: 'Visitantes', 
        flag: '🌎', 
        slang: '¡Hola!', 
        offerTitle: '¡Oferta Exclusiva para Visitantes!',
        labelPrefix: 'OFERTA PARA',
        message: 'tenemos una oferta increíble para ti. Te garantizamos igualarte el precio o te devolvemos la diferencia. ¡No te pierdas esta oportunidad única de estudiar inglés en Europa!' 
    },
};

let currentSimulatedCountry = null;

async function initTemuGift(simulatedCode = null) {
    // Eliminar elementos anteriores si existen (para el selector de prueba)
    const oldGift = document.getElementById('temuGiftContainer');
    const oldPopup = document.getElementById('temuOfferPopup');
    if (oldGift) oldGift.remove();
    if (oldPopup) oldPopup.remove();

    let countryCode = simulatedCode || 'DEFAULT';
    let flag = '🌎';
    let slang = '¡Hola!';
    let demonym = 'Visitantes';
    let offerTitle = '¡Oferta Exclusiva para Visitantes!';
    let labelPrefix = 'OFERTA PARA';
    let offerMessage = countryData['DEFAULT'].message;
    let btnText = '¡QUIERO MI OFERTA!';

    try {
        if (!simulatedCode) {
            const response = await fetch('https://ipwho.is/');
            const data = await response.json();
            
            if (data.success) {
                console.log("IP Detectada:", data.ip);
                console.log("País Detectado:", data.country);
                countryCode = data.country_code;
                
                // Actualizar el panel de debug con la IP real
                const ipDisplay = document.getElementById('debug-ip-val');
                if (ipDisplay) ipDisplay.innerText = data.ip;
            }
        }

        const info = countryData[countryCode] || countryData['DEFAULT'];
        flag = info.flag;
        slang = info.slang;
        demonym = info.demonym;
        offerMessage = info.message;
        offerTitle = info.offerTitle || `¡Oferta Exclusiva para ${demonym}!`;
        labelPrefix = info.labelPrefix || 'OFERTA PARA';
        
        // Si el país es de habla inglesa, cambiar el botón
        if (['US', 'CA', 'GB', 'IE', 'AU', 'NZ'].includes(countryCode)) {
            btnText = 'I WANT MY OFFER!';
        }

    } catch (error) {
        console.error("Error detectando IP:", error);
    }

    // Crear el contenedor del regalo
    const giftContainer = document.createElement('div');
    giftContainer.className = 'temu-gift-container';
    giftContainer.id = 'temuGiftContainer';
    giftContainer.innerHTML = `
        <div class="temu-gift-box">
            <div class="temu-sparkles">
                <span>✨</span><span>✨</span><span>✨</span><span>✨</span>
            </div>
            <span style="font-size: 45px;">🎁</span>
        </div>
        <div class="temu-label-tag">${labelPrefix} ${demonym.toUpperCase()}!</div>
    `;

    // Crear el popup de la oferta
    const offerPopup = document.createElement('div');
    offerPopup.className = 'temu-popup-overlay';
    offerPopup.id = 'temuOfferPopup';
    offerPopup.innerHTML = `
        <button class="temu-popup-close" onclick="toggleTemuPopup(event)">×</button>
        <div class="temu-popup-header">
            <span class="temu-popup-flag">${flag}</span>
            <h3 class="temu-popup-title">${offerTitle}</h3>
        </div>
        <div class="temu-popup-text">
            <strong>${slang}</strong> ${offerMessage}
        </div>
        <a href="#contact" class="temu-popup-btn" onclick="toggleTemuPopup(event)">${btnText}</a>
    `;

    document.body.appendChild(giftContainer);
    document.body.appendChild(offerPopup);

    giftContainer.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleTemuPopup();
    });

    // Solo agregar este listener una vez si no existe
    if (!window.temuClickRegistered) {
        document.addEventListener('click', (e) => {
            const popup = document.getElementById('temuOfferPopup');
            const gift = document.getElementById('temuGiftContainer');
            if (popup && gift && !popup.contains(e.target) && !gift.contains(e.target)) {
                popup.classList.remove('show');
            }
        });
        window.temuClickRegistered = true;
    }
}

function toggleTemuPopup(e) {
    if (e) e.stopPropagation();
    const popup = document.getElementById('temuOfferPopup');
    if (popup) {
        popup.classList.toggle('show');
    }
}

/* ============================================
   DEBUG SELECTOR FOR TESTING
   ============================================ */
function createDebugPanel() {
    if (document.getElementById('debug-country-panel')) return;

    const panel = document.createElement('div');
    panel.id = 'debug-country-panel';
    panel.innerHTML = `
        <div class="debug-header">
            <span>🛠️ Panel de Prueba</span>
            <button onclick="this.parentElement.parentElement.classList.toggle('minimized')">_</button>
        </div>
        <div class="debug-body">
            <p>Simular País:</p>
            <div class="debug-buttons">
                <button onclick="simulateCountry('AR')">🇦🇷 Argentina</button>
                <button onclick="simulateCountry('IE')">🇮🇪 Irlanda</button>
                <button onclick="simulateCountry('US')">🇺🇸 USA</button>
                <button onclick="simulateCountry('MX')">🇲🇽 México</button>
                <button onclick="simulateCountry(null)">🌍 IP Real</button>
            </div>
            <div class="debug-info">
                <small>IP Detectada: <span id="debug-ip-val">Cargando...</span></small>
            </div>
        </div>
    `;
    document.body.appendChild(panel);
}

window.simulateCountry = function(code) {
    initTemuGift(code);
    console.log("Simulando país:", code || "IP Real");
    // Opcional: abrir el popup automáticamente para ver el cambio
    setTimeout(() => {
        const popup = document.getElementById('temuOfferPopup');
        if (popup) popup.classList.add('show');
    }, 300);
};

document.addEventListener('DOMContentLoaded', () => {
    initTemuGift();
    createDebugPanel();
});

window.toggleTemuPopup = toggleTemuPopup;
