
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
	
	    // ==================== EUROPA ====================
    // --- EUROPA OCCIDENTAL ---
    'ES': { name: 'España', flag: '🇪🇸', slang: '¡Hola tío!', message: 'tenemos una oferta increíble para ti que estás en España, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'PT': { name: 'Portugal', flag: '🇵🇹', slang: 'Olá amigo!', message: 'temos uma oferta incrível para si que está em Portugal, garantimos igualar o preço ou devolvemos a diferença.' },
    'FR': { name: 'Francia', flag: '🇫🇷', slang: 'Salut mon pote!', message: 'nous avons une offre incroyable pour vous en France, nous garantissons l\'alignement des prix ou le remboursement de la différence.' },
    'DE': { name: 'Alemania', flag: '🇩🇪', slang: 'Hallo Freund!', message: 'wir haben ein unglaubliches Angebot für dich in Deutschland, wir garantieren Preisanpassung oder wir erstatten die Differenz.' },
    'NL': { name: 'Países Bajos', flag: '🇳🇱', slang: 'Hallo maat!', message: 'we hebben een ongelooflijk aanbod voor jou in Nederland, we garanderen elke prijs te matchen of we geven het verschil terug.' },
    'BE': { name: 'Bélgica', flag: '🇧🇪', slang: 'Salut copain! / Hallo maat!', message: 'nous avons une offre incroyable pour vous en Belgique / we hebben een ongelooflijk aanbod voor jou in België.' },
    'LU': { name: 'Luxemburgo', flag: '🇱🇺', slang: 'Salut!', message: 'mir hunn en onheemlecht Offert fir Iech zu Lëtzebuerg, mir garantéieren all Präis ze passen oder mir rembourséieren d\'Differenz.' },
    'CH': { name: 'Suiza', flag: '🇨🇭', slang: 'Hallo! / Salut! / Ciao!', message: 'tenemos una oferta increíble para ti en Suiza / wir haben ein unglaubliches Angebot für dich in der Schweiz.' },
    'AT': { name: 'Austria', flag: '🇦🇹', slang: 'Servus!', message: 'wir haben ein unglaubliches Angebot für dich in Österreich, wir garantieren Preisanpassung oder wir erstatten die Differenz.' },
    'IE': { name: 'Irlanda', flag: '🇮🇪', slang: 'What\'s the craic!', message: 'we have an incredible offer for you in Ireland, we guarantee to match any price or we refund the difference.' },
    'GB': { name: 'Reino Unido', flag: '🇬🇧', slang: 'Alright mate!', message: 'we have an incredible offer for you in the UK, we guarantee to match any price or we refund the difference.' },
    'LI': { name: 'Liechtenstein', flag: '🇱🇮', slang: 'Hallo!', message: 'mir händ es unglaubliches Aagebot für dich i Liechtenstein, mir garantierä jede Priis aapasse oder mir erstatte d\'Differänz.' },
    'MC': { name: 'Mónaco', flag: '🇲🇨', slang: 'Salut!', message: 'nous avons une offre incroyable pour vous à Monaco, nous garantissons l\'alignement des prix ou le remboursement de la différence.' },

    // --- EUROPA NÓRDICA (Escandinavia) ---
    'DK': { name: 'Dinamarca', flag: '🇩🇰', slang: 'Hej ven!', message: 'vi har et utroligt tilbud til dig i Danmark, vi garanterer at matche enhver pris eller vi refunderer forskellen.' },
    'SE': { name: 'Suecia', flag: '🇸🇪', slang: 'Hej kompis!', message: 'vi har ett otroligt erbjudande för dig i Sverige, vi garanterar att matcha vilket pris som helst eller vi återbetalar skillnaden.' },
    'NO': { name: 'Noruega', flag: '🇳🇴', slang: 'Hei kompis!', message: 'vi har et utrolig tilbud til deg i Norge, vi garanterer å matche enhver pris eller vi refunderer differansen.' },
    'FI': { name: 'Finlandia', flag: '🇫🇮', slang: 'Moi kaveri!', message: 'meillä on uskomaton tarjous sinulle Suomessa, takaamme hinnanmatchingin tai hyvitämme erotuksen.' },
    'IS': { name: 'Islandia', flag: '🇮🇸', slang: 'Sæll vinur!', message: 'við erum með ótrúlegt tilboð fyrir þig á Íslandi, við ábyrgjumst að jafna hvaða verð sem er eða við endurgreiðum mismuninn.' },

    // --- EUROPA DEL SUR (Mediterráneo) ---
    'IT': { name: 'Italia', flag: '🇮🇹', slang: 'Ciao amico!', message: 'abbiamo un\'offerta incredibile per te in Italia, garantiamo di eguagliare qualsiasi prezzo o rimborsiamo la differenza.' },
    'GR': { name: 'Grecia', flag: '🇬🇷', slang: 'Γεια σου φίλε!', message: 'έχουμε μια απίστευτη προσφορά για εσάς στην Ελλάδα, εγγυόμαστε ότι θα ταιριάξουμε οποιαδήποτε τιμή ή θα επιστρέψουμε τη διαφορά.' },
    'MT': { name: 'Malta', flag: '🇲🇹', slang: 'Ħello ħabib!', message: 'għandna offerta inkredibbli għalik f\'Malta, niggarantixxu li naqblu ma\' kwalunkwe prezz jew nirrifondaw id-differenza.' },
    'CY': { name: 'Chipre', flag: '🇨🇾', slang: 'Γεια σου φίλε!', message: 'έχουμε μια απίστευτη προσφορά για εσάς στην Κύπρο, εγγυόμαστε ότι θα ταιριάξουμε οποιαδήποτε τιμή ή θα επιστρέψουμε τη διαφορά.' },
    'AL': { name: 'Albania', flag: '🇦🇱', slang: 'Tungjatjeta shok!', message: 'ne kemi një ofertë të pabesueshme për ju në Shqipëri, ne garantojmë të përputhim çdo çmim ose të rimbursojmë diferencën.' },
    'ME': { name: 'Montenegro', flag: '🇲🇪', slang: 'Zdravo prijatelju!', message: 'imamo nevjerovatnu ponudu za vas u Crnoj Gori, garantiramo da ćemo uporediti bilo koju cijenu ili vratiti razliku.' },
    'BA': { name: 'Bosnia y Herzegovina', flag: '🇧🇦', slang: 'Zdravo prijatelju!', message: 'imamo nevjerovatnu ponudu za vas u Bosni i Hercegovini, garantiramo da ćemo uporediti bilo koju cijenu ili vratiti razliku.' },
    'HR': { name: 'Croacia', flag: '🇭🇷', slang: 'Bok prijatelju!', message: 'imamo nevjerojatnu ponudu za vas u Hrvatskoj, garantiramo da ćemo uskladiti bilo koju cijenu ili vratiti razliku.' },
    'SI': { name: 'Eslovenia', flag: '🇸🇮', slang: 'Živjo prijatelj!', message: 'imamo neverjetno ponudbo za vas v Sloveniji, garantiramo, da se bomo prilagodili kateri koli ceni ali povrnili razliko.' },
    'SK': { name: 'Eslovaquia', flag: '🇸🇰', slang: 'Ahoj priateľ!', message: 'máme pre vás neuveriteľnú ponuku na Slovensku, garantujeme, že vám vyrovnáme akúkoľvek cenu alebo vám vrátime rozdiel.' },
    'CZ': { name: 'República Checa', flag: '🇨🇿', slang: 'Ahoj příteli!', message: 'máme pro vás neuvěřitelnou nabídku v České republice, garantujeme, že vám vyrovnáme jakoukoli cenu nebo vám vrátíme rozdíl.' },
    'HU': { name: 'Hungría', flag: '🇭🇺', slang: 'Szia haver!', message: 'hihetetlen ajánlatunk van számodra Magyarországon, garantáljuk, hogy bármilyen árat illesztünk, vagy visszatérítjük a különbözetet.' },
    'RO': { name: 'Rumania', flag: '🇷🇴', slang: 'Salut prietene!', message: 'avem o ofertă incredibilă pentru tine în România, garantăm că vom egala orice preț sau vom rambursa diferența.' },
    'BG': { name: 'Bulgaria', flag: '🇧🇬', slang: 'Здравей приятелю!', message: 'имаме невероятна оферта за вас в България, гарантираме, че ще съпоставим всяка цена или ще възстановим разликата.' },
    'RS': { name: 'Serbia', flag: '🇷🇸', slang: 'Zdravo prijatelju!', message: 'imamo neverovatnu ponudu za vas u Srbiji, garantiramo da ćemo uporediti bilo koju cenu ili vratiti razliku.' },
    'MK': { name: 'Macedonia del Norte', flag: '🇲🇰', slang: 'Здраво пријателе!', message: 'имаме неверојатна понуда за вас во Северна Македонија, гарантираме дека ќе го споредиме секој ценовник или ќе ја вратиме разликата.' },
    'XK': { name: 'Kosovo', flag: '🇽🇰', slang: 'Tungjatjeta shok!', message: 'ne kemi një ofertë të pabesueshme për ju në Kosovë, ne garantojmë të përputhim çdo çmim ose të rimbursojmë diferencën.' },

    // --- EUROPA DEL ESTE (Balcanes y ex-URSS) ---
    'PL': { name: 'Polonia', flag: '🇵🇱', slang: 'Cześć przyjacielu!', message: 'mamy niesamowitą ofertę dla Ciebie w Polsce, gwarantujemy dopasowanie każdej ceny lub zwrócimy różnicę.' },
    'LT': { name: 'Lituania', flag: '🇱🇹', slang: 'Sveikas drauge!', message: 'turime jums neįtikėtiną pasiūlymą Lietuvoje, garantuojame, kad suderinsime bet kokią kainą arba grąžinsime skirtumą.' },
    'LV': { name: 'Letonia', flag: '🇱🇻', slang: 'Sveiks draugs!', message: 'mums jums ir neticams piedāvājums Latvijā, mēs garantējam, ka saskaņosim jebkuru cenu vai atmaksāsim starpību.' },
    'EE': { name: 'Estonia', flag: '🇪🇪', slang: 'Tere sõber!', message: 'meil on teile uskumatu pakkumine Eestis, garanteerime, et sobitame iga hinna või hüvitame erinevuse.' },
    'UA': { name: 'Ucrania', flag: '🇺🇦', slang: 'Привіт друже!', message: 'у нас неймовірна пропозиція для вас в Україні, ми гарантуємо, що вирівняємо будь-яку ціну або повернемо різницю.' },
    'MD': { name: 'Moldavia', flag: '🇲🇩', slang: 'Salut prietene!', message: 'avem o ofertă incredibilă pentru tine în Moldova, garantăm că vom egala orice preț sau vom rambursa diferența.' },
    'BY': { name: 'Bielorrusia', flag: '🇧🇾', slang: 'Прывітан сябар!', message: 'у нас неверагодная прапанова для вас у Беларусі, мы гарантуем, што выраўнуем любую цану або вернем розніцу.' },
    'RU': { name: 'Rusia', flag: '🇷🇺', slang: 'Привет друг!', message: 'у нас невероятное предложение для вас в России, мы гарантируем, что сравняем любую цену или вернем разницу.' },

    // --- PAÍSES PEQUEÑOS / MICROESTADOS ---
    'AD': { name: 'Andorra', flag: '🇦🇩', slang: 'Hola amic!', message: 'tenemos una oferta increíble para ti que estás en Andorra, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'SM': { name: 'San Marino', flag: '🇸🇲', slang: 'Ciao amico!', message: 'abbiamo un\'offerta incredibile per te a San Marino, garantiamo di eguagliare qualsiasi prezzo o rimborsiamo la differenza.' },
    'VA': { name: 'Ciudad del Vaticano', flag: '🇻🇦', slang: 'Salve amice!', message: 'habemus mirabilem oblationem tibi in Civitate Vaticana, praestamus aequare pretium vel differentiam refundere.' }, // Latín
    'FO': { name: 'Islas Feroe', flag: '🇫🇴', slang: 'Hey vinur!', message: 'vit hava eitt ótrúligt tilboð fyri teg í Føroyum, vit ábyrgjast at møta hvørjum prísi ella vit endurgjalda munin.' },
    'GL': { name: 'Groenlandia', flag: '🇬🇱', slang: 'Aluu!', message: 'pineq arlalerinnut tunniussisarpavut Kalaallit Nunaanni, akeqarnissut assigiinngitsut akilerivavat.' } // Groenlandés
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
