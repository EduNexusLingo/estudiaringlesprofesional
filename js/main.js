
/* ============================================
   TEMU STYLE GIFT & GEO-DETECTION LOGIC (REFINED)
   ============================================ */

const countryData = {
     // --- NORTEAMÉRICA ---
    'US': { name: 'Estados Unidos', flag: '🇺🇸', slang: 'Hey!', message: 'we have an incredible offer for you in the US, we guarantee to match any price or we refund the difference.' },
    'CA': { name: 'Canadá', flag: '🇨🇦', slang: 'Eh!', message: 'we have an incredible offer for you in Canada, we guarantee to match any price or we refund the difference.' },
    'MX': { name: 'México', flag: '🇲🇽', slang: '¡Qué onda!', message: 'tenemos una oferta increíble para ti que estás en México, te garantizamos igualarte el precio o te devolvemos la diferencia.' },

    // --- CENTROAMÉRICA ---
    'BZ': { name: 'Belice', flag: '🇧🇿', slang: 'Hey buddy', message: 'we have an incredible offer for you in Belize, we guarantee to match any price or we refund the difference.' },
    'GT': { name: 'Guatemala', flag: '🇬🇹', slang: '¡Patojo!', message: 'tenemos una oferta increíble para vos que estás en Guatemala, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'HN': { name: 'Honduras', flag: '🇭🇳', slang: '¡Maje!', message: 'tenemos una oferta increíble para vos que estás en Honduras, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'SV': { name: 'El Salvador', flag: '🇸🇻', slang: '¡Vos!', message: 'tenemos una oferta increíble para vos que estás en El Salvador, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'NI': { name: 'Nicaragua', flag: '🇳🇮', slang: '¡Ya vos!', message: 'tenemos una oferta increíble para vos que estás en Nicaragua, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'CR': { name: 'Costa Rica', flag: '🇨🇷', slang: '¡Mae!', message: 'tenemos una oferta increíble para vos que estás en Costa Rica, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'PA': { name: 'Panamá', flag: '🇵🇦', slang: '¡Fren!', message: 'tenemos una oferta increíble para ti que estás en Panamá, te garantizamos igualarte el precio o te devolvemos la diferencia.' },

    // --- CARIBE ---
    'CU': { name: 'Cuba', flag: '🇨🇺', slang: '¡Acere!', message: 'tenemos una oferta increíble para ti que estás en Cuba, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'DO': { name: 'República Dominicana', flag: '🇩🇴', slang: '¡Dique!', message: 'tenemos una oferta increíble para ti que estás en República Dominicana, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'PR': { name: 'Puerto Rico', flag: '🇵🇷', slang: '¡Wepa!', message: 'tenemos una oferta increíble para ti que estás en Puerto Rico, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'JM': { name: 'Jamaica', flag: '🇯🇲', slang: 'Ya mon!', message: 'we have an incredible offer for you in Jamaica, we guarantee to match any price or we refund the difference.' },
    'HT': { name: 'Haití', flag: '🇭🇹', slang: 'Sak pase!', message: 'nou gen yon òf enkwayab pou ou ann Ayiti, nou garanti matche nenpòt pri oswa nou ranbouse diferans lan.' }, // Criollo haitiano
    'BS': { name: 'Bahamas', flag: '🇧🇸', slang: 'Hey!', message: 'we have an incredible offer for you in The Bahamas, we guarantee to match any price or we refund the difference.' },
    'TT': { name: 'Trinidad y Tobago', flag: '🇹🇹', slang: 'Wha\' going on!', message: 'we have an incredible offer for you in Trinidad and Tobago, we guarantee to match any price or we refund the difference.' },

    // --- SUDAMÉRICA ---
    'AR': { name: 'Argentina', flag: '🇦🇷', slang: 'Amigazo', message: 'tenemos una oferta increíble para vos que estás en Argentina, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'BO': { name: 'Bolivia', flag: '🇧🇴', slang: '¡Jallalla!', message: 'tenemos una oferta increíble para ti que estás en Bolivia, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'BR': { name: 'Brasil', flag: '🇧🇷', slang: 'E aí!', message: 'temos uma oferta incrível para você que está no Brasil, garantimos igualar o preço ou devolvemos a diferença.' },
    'CL': { name: 'Chile', flag: '🇨🇱', slang: '¡Buena po!', message: 'tenemos una oferta increíble para ti que estás en Chile, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'CO': { name: 'Colombia', flag: '🇨🇴', slang: '¡Parce!', message: 'tenemos una oferta increíble para ti que estás en Colombia, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'EC': { name: 'Ecuador', flag: '🇪🇨', slang: '¡Pana!', message: 'tenemos una oferta increíble para ti que estás en Ecuador, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'GY': { name: 'Guyana', flag: '🇬🇾', slang: 'Greetings!', message: 'we have an incredible offer for you in Guyana, we guarantee to match any price or we refund the difference.' },
    'GF': { name: 'Guayana Francesa', flag: '🇬🇫', slang: 'Salut!', message: 'nous avons une offre incroyable pour vous en Guyane, nous garantissons l\'alignement des prix ou le remboursement de la différence.' },
    'PE': { name: 'Perú', flag: '🇵🇪', slang: '¡Habla causa!', message: 'tenemos una oferta increíble para ti que estás en Perú, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'PY': { name: 'Paraguay', flag: '🇵🇾', slang: '¡Ha\'upei!', message: 'tenemos una oferta increíble para ti que estás en Paraguay, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'SR': { name: 'Surinam', flag: '🇸🇷', slang: 'Fa waka!', message: 'wi abi wan ongelooflike aanbod foar jo yn Suriname, wy garandearje elke priis te passen of wy ferfange it ferskil.' }, // Sranan Tongo
    'UY': { name: 'Uruguay', flag: '🇺🇾', slang: '¡Bo!', message: 'tenemos una oferta increíble para vos que estás en Uruguay, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'VE': { name: 'Venezuela', flag: '🇻🇪', slang: '¡Épale!', message: 'tenemos una oferta increíble para ti que estás en Venezuela, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'DEFAULT': { name: 'tu país', flag: '🌎', slang: '¡Hola!', message: 'tenemos una oferta increíble para ti, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
};

async function initTemuGift() {
    let countryCode = 'DEFAULT';
    let flag = '🌎';
    let slang = '¡Hola!';
    let offerMessage = countryData['DEFAULT'].message;

    try {
        // Intentamos detectar la IP
        const response = await fetch('https://ipwho.is/');
        const data = await response.json();
        
        if (data.success) {
            countryCode = data.country_code;
            const info = countryData[countryCode] || countryData['DEFAULT'];
            flag = info.flag;
            slang = info.slang;
            offerMessage = info.message;
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
        <div class="temu-label-tag">¡OFERTA PARA ${countryCode}!</div>
    `;

    // Crear el popup de la oferta
    const offerPopup = document.createElement('div');
    offerPopup.className = 'temu-popup-overlay';
    offerPopup.id = 'temuOfferPopup';
    offerPopup.innerHTML = `
        <button class="temu-popup-close" onclick="toggleTemuPopup(event)">×</button>
        <div class="temu-popup-header">
            <span class="temu-popup-flag">${flag}</span>
            <h3 class="temu-popup-title">¡Oferta Exclusiva!</h3>
        </div>
        <div class="temu-popup-text">
            <strong>${slang}</strong>, ${offerMessage}
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

    // Cerrar al hacer clic fuera
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

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initTemuGift();
});

// Exportar funciones globales
window.toggleTemuPopup = toggleTemuPopup;
