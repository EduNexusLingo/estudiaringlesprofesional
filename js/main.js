/* ============================================
TEMU STYLE GIFT & GEO-DETECTION LOGIC (DEBUG MODE)
============================================ */
const countryData = {
    'IE': { name: 'Irlanda', demonym: 'Irlandeses', flag: '🇮', slang: "What's the craic!", message: 'we have an incredible offer for you in Ireland, we guarantee to match any price or we refund the difference.' },
    'NL': { name: 'Países Bajos', demonym: 'Holandeses', flag: '🇳🇱', slang: 'Hallo maat!', message: 'we hebben een ongelooflijk aanbod voor jou in Nederland, we garanderen elke prijs te matchen of we geven het verschil terug.' },
    'DEFAULT': { name: 'tu país', demonym: 'Visitantes', flag: '🌎', slang: '¡Hola!', message: 'tenemos una oferta increíble para ti. Te garantizamos igualarte el precio o te devolvemos la diferencia. ¡No te pierdas esta oportunidad única de estudiar inglés en Europa!' },
    // ... (resto de tus países aquí si quieres, o usa el objeto completo anterior) ...
    'US': { name: 'Estados Unidos', demonym: 'Americanos', flag: '🇺🇸', slang: 'Hey!', message: 'we have an incredible offer for you in the US...' },
    'MX': { name: 'México', demonym: 'Mexicanos', flag: '🇲', slang: '¡Qué onda!', message: 'tenemos una oferta increíble para ti que estás en México...' },
    'ES': { name: 'España', demonym: 'Españoles', flag: '🇪', slang: '¡Hola tío!', message: 'tenemos una oferta increíble para ti que estás en España...' },
    // Asegúrate de mantener todos los países que tenías en tu versión original aquí
};

async function initTemuGift() {
    // ==========================================
    // ⚙️ CONFIGURACIÓN DE PRUEBA (CAMBIA ESTO)
    // ==========================================
    let debugMode = true; // true = Fuerza un país / false = Detecta IP real
    let testCountryCode = 'NL'; // Cambia a 'IE' para probar Irlanda, o 'NL' para Países Bajos
    
    // ==========================================
    
    let countryCode = 'DEFAULT';
    let flag = '🌎';
    let slang = '¡Hola!';
    let demonym = 'Visitantes';
    let offerMessage = countryData['DEFAULT'].message;

    if (debugMode) {
        // Si está en modo depuración, usamos el país de prueba directamente
        console.log(`🛠 MODO PRUEBA: Simulando país ${testCountryCode}`);
        countryCode = testCountryCode;
        const info = countryData[countryCode] || countryData['DEFAULT'];
        flag = info.flag;
        slang = info.slang;
        demonym = info.demony m;
        offerMessage = info.message;
    } else {
        // Modo normal: intenta detectar la IP
        try {
            const response = await fetch('https://ipwho.is/');
            const data = await response.json();
            if (data.success) {
                countryCode = data.country_code;
                const info = countryData[countryCode] || countryData['DEFAULT'];
                flag = info.flag;
                slang = info.slang;
                demonym = info.demonym;
                offerMessage = info.message;
            }
        } catch (error) {
            console.error("Error detectando IP: ", error);
        }
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
         <div class="temu-label-tag">¡OFERTA PARA ${demonym.toUpperCase()}!</div>
    `;

    // Crear el popup de la oferta
    const offerPopup = document.createElement('div');
    offerPopup.className = 'temu-popup-overlay';
    offerPopup.id = 'temuOfferPopup';
    offerPopup.innerHTML = `
         <button class="temu-popup-close" onclick="toggleTemuPopup(event)">×</button>
         <div class="temu-popup-header">
             <span class="temu-popup-flag">${flag}</span>
             <h3 class="temu-popup-title">¡Oferta Exclusiva para ${demonym}!</h3>
         </div>
         <div class="temu-popup-text">
             <strong>${slang}</strong> ${offerMessage}
         </div>
         <a href="#contact" class="temu-popup-btn" onclick="toggleTemuPopup(event)">¡QUIERO MI OFERTA!</a>
    `;

    document.body.appendChild(giftContainer);
    document.body.appendChild(offerPopup);

    // Evento para abrir/cerrar
    giftContainer.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleTemuPopup();
    });

    document.addEventListener('click', (e) => {
        if (!offerPopup.contains(e.target) && !giftContainer.contains(e.target)) {
            offerPopup.classList.remove('show');
        }
    });
}

function toggleTemuPopup(e) {
    if (e) e.stopPropagation();
    const popup = document.getElementById('temuOfferPopup');
    if (popup) {
        popup.classList.toggle('show');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initTemuGift();
});

window.toggleTemuPopup = toggleTemuPopup;