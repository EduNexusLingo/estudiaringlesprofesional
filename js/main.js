
/* ============================================
   TEMU STYLE GIFT & ROBUST GEO-DETECTION LOGIC
   ============================================ */

const countryData = {
    // --- NORTEAMÉRICA ---
    'US': { name: 'Estados Unidos', demonym: 'Americans', flag: '🇺🇸', slang: 'Hey!', message: 'we have an incredible offer for you in the US, we guarantee to match any price or we refund the difference.' },
    'CA': { name: 'Canadá', demonym: 'Canadians', flag: '🇨🇦', slang: 'Eh!', message: 'we have an incredible offer for you in Canada, we guarantee to match any price or we refund the difference.' },
    'MX': { name: 'México', demonym: 'Mexicanos', flag: '🇲🇽', slang: '¡Qué onda!', message: 'tenemos una oferta increíble para ti que estás en México, te garantizamos igualarte el precio o te devolvemos la diferencia.' },

    // --- CENTROAMÉRICA ---
    'BZ': { name: 'Belice', demonym: 'Beliceños', flag: '🇧🇿', slang: 'Hey buddy', message: 'we have an incredible offer for you in Belize, we guarantee to match any price or we refund the difference.' },
    'GT': { name: 'Guatemala', demonym: 'Guatemaltecos', flag: '🇬🇹', slang: '¡Patojo!', message: 'tenemos una oferta increíble para vos que estás en Guatemala, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'HN': { name: 'Honduras', demonym: 'Hondureños', flag: '🇭🇳', slang: '¡Maje!', message: 'tenemos una oferta increíble para vos que estás en Honduras, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'SV': { name: 'El Salvador', demonym: 'Salvadoreños', flag: '🇸🇻', slang: '¡Vos!', message: 'tenemos una oferta increíble para vos que estás en El Salvador, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'NI': { name: 'Nicaragua', demonym: 'Nicaragüenses', flag: '🇳🇮', slang: '¡Ya vos!', message: 'tenemos una oferta increíble para vos que estás en Nicaragua, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'CR': { name: 'Costa Rica', demonym: 'Ticos', flag: '🇨🇷', slang: '¡Mae!', message: 'tenemos una oferta increíble para vos que estás en Costa Rica, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'PA': { name: 'Panamá', demonym: 'Panameños', flag: '🇵🇦', slang: '¡Fren!', message: 'tenemos una oferta increíble para ti que estás en Panamá, te garantizamos igualarte el precio o te devolvemos la diferencia.' },

    // --- CARIBE ---
    'CU': { name: 'Cuba', demonym: 'Cubanos', flag: '🇨🇺', slang: '¡Acere!', message: 'tenemos una oferta increíble para ti que estás en Cuba, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'DO': { name: 'República Dominicana', demonym: 'Dominicanos', flag: '🇩🇴', slang: '¡Dique!', message: 'tenemos una oferta increíble para ti que estás en República Dominicana, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'PR': { name: 'Puerto Rico', demonym: 'Puertorriqueños', flag: '🇵🇷', slang: '¡Wepa!', message: 'tenemos una oferta increíble para ti que estás en Puerto Rico, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'JM': { name: 'Jamaica', demonym: 'Jamaicans', flag: '🇯🇲', slang: 'Ya mon!', message: 'we have an incredible offer for you in Jamaica, we guarantee to match any price or we refund the difference.' },
    'HT': { name: 'Haití', demonym: 'Haitianos', flag: '🇭🇹', slang: 'Sak pase!', message: 'nou gen yon òf enkwayab pou ou ann Ayiti, nou garanti matche nenpòt pri oswa nou ranbouse diferans lan.' },
    'BS': { name: 'Bahamas', demonym: 'Bahamians', flag: '🇧🇸', slang: 'Hey!', message: 'we have an incredible offer for you in The Bahamas, we guarantee to match any price or we refund the difference.' },
    'TT': { name: 'Trinidad y Tobago', demonym: 'Trinidadians', flag: '🇹🇹', slang: 'Wha\' going on!', message: 'we have an incredible offer for you in Trinidad and Tobago, we guarantee to match any price or we refund the difference.' },

    // --- SUDAMÉRICA ---
    'AR': { name: 'Argentina', demonym: 'Argentinos', flag: '🇦🇷', slang: '¡Amigazo!', message: 'tenemos una oferta increíble para vos que estás en Argentina. Te garantizamos igualarte el precio o te devolvemos la diferencia. ¡No te pierdas esta oportunidad única de estudiar inglés en Europa!' },
    'BO': { name: 'Bolivia', demonym: 'Bolivianos', flag: '🇧🇴', slang: '¡Jallalla!', message: 'tenemos una oferta increíble para ti que estás en Bolivia. Te garantizamos igualarte el precio o te devolvemos la diferencia. ¡No te pierdas esta oportunidad única de estudiar inglés en Europa!' },
    'BR': { name: 'Brasil', demonym: 'Brasileños', flag: '🇧🇷', slang: 'E aí!', message: 'temos uma oferta incrível para você que está no Brasil. Garantimos igualar o preço ou devolvemos a diferença. Não perca esta oportunidade única de estudar inglés na Europa!' },
    'CL': { name: 'Chile', demonym: 'Chilenos', flag: '🇨🇱', slang: '¡Buena po!', message: 'tenemos una oferta increíble para ti que estás en Chile. Te garantizamos igualarte el precio o te devolvemos la diferencia. ¡No te pierdas esta oportunidad única de estudiar inglés en Europa!' },
    'CO': { name: 'Colombia', demonym: 'Colombianos', flag: '🇨🇴', slang: '¡Parce!', message: 'tenemos una oferta increíble para ti que estás en Colombia. Te garantizamos igualarte el precio o te devolvemos la diferencia. ¡No te pierdas esta oportunidad única de estudiar inglés en Europa!' },
    'EC': { name: 'Ecuador', demonym: 'Ecuatorianos', flag: '🇪🇨', slang: '¡Pana!', message: 'tenemos una oferta increíble para ti que estás en Ecuador. Te garantizamos igualarte el precio o te devolvemos la diferencia. ¡No te pierdas esta oportunidad única de estudiar inglés en Europa!' },
    'GY': { name: 'Guyana', demonym: 'Guyanese', flag: '🇬🇾', slang: 'Greetings!', message: 'we have an incredible offer for you in Guyana, we guarantee to match any price or we refund the difference.' },
    'GF': { name: 'Guayana Francesa', demonym: 'Guyanais', flag: '🇬🇫', slang: 'Salut!', message: 'nous avons une offre incroyable pour vous en Guyane, nous garantissons l\'alignement des prix ou le remboursement de la différence.' },
    'PE': { name: 'Perú', demonym: 'Peruanos', flag: '🇵🇪', slang: '¡Habla causa!', message: 'tenemos una oferta increíble para ti que estás en Perú. Te garantizamos igualarte el precio o te devolvemos la diferencia. ¡No te pierdas esta oportunidad única de estudiar inglés en Europa!' },
    'PY': { name: 'Paraguay', demonym: 'Paraguayos', flag: '🇵🇾', slang: '¡Ha\'upei!', message: 'tenemos una oferta increíble para ti que estás en Paraguay. Te garantizamos igualarte el precio o te devolvemos la diferencia. ¡No te pierdas esta oportunidad única de estudiar inglés en Europa!' },
    'SR': { name: 'Surinam', demonym: 'Surinamese', flag: '🇸🇷', slang: 'Fa waka!', message: 'wi abi wan ongelooflike aanbod foar jo yn Suriname, wy garandearje elke priis te passen of wy ferfange it ferskil.' },
    'UY': { name: 'Uruguay', demonym: 'Uruguayos', flag: '🇺🇾', slang: '¡Bo!', message: 'tenemos una oferta increíble para vos que estás en Uruguay. Te garantizamos igualarte el precio o te devolvemos la diferencia. ¡No te pierdas esta oportunidad única de estudiar inglés en Europa!' },
    'VE': { name: 'Venezuela', demonym: 'Venezolanos', flag: '🇻🇪', slang: '¡Épale!', message: 'tenemos una oferta increíble para ti que estás en Venezuela. Te garantizamos igualarte el precio o te devolvemos la diferencia. ¡No te pierdas esta oportunidad única de estudiar inglés en Europa!' },

    // --- EUROPA ---
    'ES': { name: 'España', demonym: 'Españoles', flag: '🇪🇸', slang: '¡Hola tío!', message: 'tenemos una oferta increíble para ti que estás en España, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'PT': { name: 'Portugal', demonym: 'Portugueses', flag: '🇵🇹', slang: 'Olá amigo!', message: 'temos uma oferta incrível para si que está em Portugal, garantimos igualar o preço ou devolvemos a diferença.' },
    'FR': { name: 'Francia', demonym: 'Franceses', flag: '🇫🇷', slang: 'Salut mon pote!', message: 'nous avons une offre incroyable pour vous en France, nous garantissons l\'alignement des prix ou le remboursement de la différence.' },
    'DE': { name: 'Alemania', demonym: 'Alemanes', flag: '🇩🇪', slang: 'Hallo Freund!', message: 'wir haben ein unglaubliches Angebot für dich in Deutschland, wir garantieren Preisanpassung o wir erstatten die Differenz.' },
    'NL': { name: 'Países Bajos', demonym: 'Holandeses', flag: '🇳🇱', slang: 'Hallo maat!', message: 'we hebben een ongelooflijk aanbod voor jou in Nederland, we garanderen elke prijs te matchen of we geven het verschil terug.' },
    'BE': { name: 'Bélgica', demonym: 'Belgas', flag: '🇧🇪', slang: 'Salut copain!', message: 'nous avons une offre incroyable pour vous en Belgique / we hebben een ongelooflijk aanbod voor jou in België.' },
    'LU': { name: 'Luxemburgo', demonym: 'Luxemburgueses', flag: '🇱🇺', slang: 'Salut!', message: 'mir hunn en onheemlecht Offert fir Iech zu Lëtzebuerg, mir garantéieren all Präis ze passen o mir rembourséieren d\'Differenz.' },
    'CH': { name: 'Suiza', demonym: 'Suizos', flag: '🇨🇭', slang: 'Hallo! / Salut!', message: 'tenemos una oferta increíble para ti en Suiza / wir haben ein unglaubliches Angebot für dich in der Schweiz.' },
    'AT': { name: 'Austria', demonym: 'Austríacos', flag: '🇦🇹', slang: 'Servus!', message: 'wir haben ein unglaubliches Angebot für dich in Österreich, wir garantieren Preisanpassung o wir erstatten die Differenz.' },
    'IE': { name: 'Irlanda', demonym: 'Irish', flag: '🇮🇪', slang: 'What\'s the craic!', message: 'we have an incredible offer for you in Ireland, we guarantee to match any price or we refund the difference.' },
    'GB': { name: 'Reino Unido', demonym: 'British', flag: '🇬🇧', slang: 'Alright mate!', message: 'we have an incredible offer for you in the UK, we guarantee to match any price or we refund the difference.' },
    'LI': { name: 'Liechtenstein', demonym: 'Liechtensteiners', flag: '🇱🇮', slang: 'Hallo!', message: 'mir händ es unglaubliches Aagebot für dich i Liechtenstein, mir garantierä jede Priis aapasse o mir erstatte d\'Differänz.' },
    'MC': { name: 'Mónaco', demonym: 'Monegasques', flag: '🇲🇨', slang: 'Salut!', message: 'nous avons une offre incroyable pour vous à Monaco, nous garantissons l\'alignement des prix o le remboursement de la différence.' },

    // --- EUROPA NÓRDICA ---
    'DK': { name: 'Dinamarca', demonym: 'Danes', flag: '🇩🇰', slang: 'Hej ven!', message: 'vi har et utroligt tilbud til dig i Danmark, vi garanterer at matche enhver pris o vi refunderer forskellen.' },
    'SE': { name: 'Suecia', demonym: 'Swedes', flag: '🇸🇪', slang: 'Hej kompis!', message: 'vi har ett otroligt erbjudande för dig i Sverige, vi garanterar att matcha hvilket pris som helst o vi återbetalar skillnaden.' },
    'NO': { name: 'Noruega', demonym: 'Norwegians', flag: '🇳🇴', slang: 'Hei kompis!', message: 'vi har et utrolig tilbud til deg i Norge, vi garanterer å matche enhver pris o vi refunderer differansen.' },
    'FI': { name: 'Finlandia', demonym: 'Finns', flag: '🇫🇮', slang: 'Moi kaveri!', message: 'meillä on uskomaton tarjous sinulle Suomessa, takaamme hinnanmatchingin tai hyvitämme erotuksen.' },
    'IS': { name: 'Islandia', demonym: 'Icelanders', flag: '🇮🇸', slang: 'Sæll vinur!', message: 'við erum með ótrúlegt tilboð fyrir þig á Íslandi, við ábyrgjumst að jafna hvaða verð sem er o við endurgreiðum mismuninn.' },

    // --- EUROPA DEL SUR ---
    'IT': { name: 'Italia', demonym: 'Italians', flag: '🇮🇹', slang: 'Ciao amico!', message: 'abbiamo un\'offerta incredibile per te in Italia, garantiamo di eguagliare qualsiasi prezzo o rimborsiamo la differenza.' },
    'GR': { name: 'Grecia', demonym: 'Greeks', flag: '🇬🇷', slang: 'Γεια σου φίλε!', message: 'έχουμε μια απίστευτη προσφορά για εσάς στην Ελλάδα, εγγυόμαστε ότι θα ταιριάξουμε οποιαδήποτε τιμή ή θα επιστρέψουμε τη διαφορά.' },
    'MT': { name: 'Malta', demonym: 'Maltese', flag: '🇲🇹', slang: 'Ħello ħabib!', message: 'għandna offerta inkredibbli għalik f\'Malta, niggarantixxu li naqblu ma\' kwalunkwe prezz o nirrifondaw id-differenza.' },
    'CY': { name: 'Chipre', demonym: 'Cypriots', flag: '🇨🇾', slang: 'Γεια σου φíλε!', message: 'έχουμε μια απίστευτη προσφορά για εσάς στην Κύπρο, εγγυόμαστε ότι θα ταιριάξουμε οποιαδήποτε τιμή ή θα επιστρέψουμε τη διαφορά.' },
    'AL': { name: 'Albania', demonym: 'Albanians', flag: '🇦🇱', slang: 'Tungjatjeta shok!', message: 'ne kemi një ofertë të pabesueshme për ju në Shqipëri, ne garantojmë të përputhim çdo çmim o të rimbursojmë diferencën.' },
    'ME': { name: 'Montenegro', demonym: 'Montenegrins', flag: '🇲🇪', slang: 'Zdravo prijatelju!', message: 'imamo nevjerovatnu ponudu za vas u Crnoj Gori, garantiramo da ćemo uporediti bilo koju cijenu o vratiti razliku.' },
    'BA': { name: 'Bosnia y Herzegovina', demonym: 'Bosnians', flag: '🇧🇦', slang: 'Zdravo prijatelju!', message: 'imamo nevjerovatnu ponudu za vas u Bosni i Hercegovini, garantiramo da ćemo uporediti bilo koju cijenu o vratiti razliku.' },
    'HR': { name: 'Croacia', demonym: 'Croatians', flag: '🇭🇷', slang: 'Bok prijatelju!', message: 'imamo nevjerojatnu ponudu za vas u Hrvatskoj, garantiramo da ćemo uskladiti bilo koju cijenu o vratiti razliku.' },
    'SI': { name: 'Eslovenia', demonym: 'Slovenians', flag: '🇸🇮', slang: 'Živjo prijatelj!', message: 'imamo neverjetno ponudbo za vas v Sloveniji, garantiramo, da se bomo prilagodili kateri koli ceni o povrnili razliko.' },
    'SK': { name: 'Eslovaquia', demonym: 'Slovaks', flag: '🇸🇰', slang: 'Ahoj priateľ!', message: 'máme pre vás neuveriteľnú ponuku na Slovensku, garantujeme, že vám vyrovnáme akúkoľvek cenu o vám vrátime rozdiel.' },
    'CZ': { name: 'República Checa', demonym: 'Czechs', flag: '🇨🇿', slang: 'Ahoj příteli!', message: 'máme pro vás neuvěřitelnou nabídku v České republice, garantujeme, že vám vyrovnáme jakoukoli cenu o vám vrátíme rozdíl.' },
    'HU': { name: 'Hungría', demonym: 'Hungarians', flag: '🇭🇺', slang: 'Szia haver!', message: 'hihetetlen ajánlatunk van számodra Magyarországon, garantáljuk, hogy bármilyen árat illesztünk, o visszatérítjük a különbözetet.' },
    'RO': { name: 'Rumania', demonym: 'Romanians', flag: '🇷🇴', slang: 'Salut prietene!', message: 'avem o ofertă incredibilă pentru tine în România, garantăm că vom egala orice preț o vom rambursa diferența.' },
    'BG': { name: 'Bulgaria', demonym: 'Bulgarians', flag: '🇧🇬', slang: 'Здравей приятелю!', message: 'имаме невероятна оферта за вас в България, гарантираме, че ще съпоставим всяка цена o ще възстановим разликата.' },
    'RS': { name: 'Serbia', demonym: 'Serbians', flag: '🇷🇸', slang: 'Zdravo prijatelju!', message: 'imamo neverovatnu ponudu za vas u Srbiji, garantiramo da ćemo uporediti bilo cenu o vratiti razliku.' },
    'MK': { name: 'Macedonia del Norte', demonym: 'Macedonians', flag: '🇲🇰', slang: 'Здраво пријателе!', message: 'имаме неверојатна понуда за вас во Северна Македонија, гарантираме дека ќе го споредиме секој ценовник o ќе ја вратиме разликата.' },
    'XK': { name: 'Kosovo', demonym: 'Kosovars', flag: '🇽🇰', slang: 'Tungjatjeta shok!', message: 'ne kemi një ofertë të pabesueshme për ju në Kosovë, ne garantojmë të përputhim çdo çmim o të rimbursojmë diferencën.' },

    // --- EUROPA DEL ESTE ---
    'PL': { name: 'Polonia', demonym: 'Poles', flag: '🇵🇱', slang: 'Cześć przyjacielu!', message: 'mamy niesamowitą ofertę dla Ciebie w Polsce, gwarantujemy dopasowanie każdej ceny o zwrócimy różnicę.' },
    'LT': { name: 'Lituania', demonym: 'Lithuanians', flag: '🇱🇹', slang: 'Sveikas drauge!', message: 'turime jums neįtikėtiną pasiūlymą Lietuvoje, garantuojame, kad suderinsime bet kokią kainą arba grąžinsime skirtumą.' },
    'LV': { name: 'Letonia', demonym: 'Latvians', flag: '🇱🇻', slang: 'Sveiks draugs!', message: 'mums jums ir neticams piedāvājums Latvijā, mēs garantējam, ka saskaņosim jebkuru cenu vai atmaksāsim starpību.' },
    'EE': { name: 'Estonia', demonym: 'Estonians', flag: '🇪🇪', slang: 'Tere sõber!', message: 'meil on teile uskumatu pakkumine Eestis, garanteerime iga hinna sobitamise või tagastame vahe.' },
    'UA': { name: 'Ucrania', demonym: 'Ukrainians', flag: '🇺🇦', slang: 'Привіт друже!', message: 'у нас неймовірна пропозиція для вас в Україні, ми гарантуємо, що вирівняємо будь-яку ціну або повернемо різницю.' },
    'MD': { name: 'Moldavia', demonym: 'Moldovans', flag: '🇲🇩', slang: 'Salut prietene!', message: 'avem o ofertă incredibilă pentru tine în Moldova, garantăm că vom egala orice preț sau vom rambursa diferența.' },
    'BY': { name: 'Bielorrusia', demonym: 'Belarusians', flag: '🇧🇾', slang: 'Прывітан сябар!', message: 'у нас неверагодная прапанова для вас у Беларусі, мы гарантуем, што выраўнуем любую цану або вернем розніцу.' },
    'RU': { name: 'Rusia', demonym: 'Russians', flag: '🇷🇺', slang: 'Привет друг!', message: 'у нас невероятное предложение для вас в России, мы гарантуем, что сравняем любую цену или вернем разницу.' },

    // --- PAÍSES PEQUEÑOS / MICROESTADOS ---
    'AD': { name: 'Andorra', demonym: 'Andorrans', flag: '🇦🇩', slang: 'Hola amic!', message: 'tenemos una oferta increíble para ti que estás en Andorra, te garantizamos igualarte el precio o te devolvemos la diferencia.' },
    'SM': { name: 'San Marino', demonym: 'Sammarinese', flag: '🇸🇲', slang: 'Ciao amico!', message: 'abbiamo un\'offerta incredibile per te a San Marino, garantiamo di eguagliare qualsiasi prezzo o rimborsiamo la diferencia.' },
    'VA': { name: 'Ciudad del Vaticano', demonym: 'Vatican Citizens', flag: '🇻🇦', slang: 'Salve amice!', message: 'habemus mirabilem oblationem tibi in Civitate Vaticana, praestamus aequare pretium vel differentiam refundere.' },
    'FO': { name: 'Islas Feroe', demonym: 'Faroese', flag: '🇫🇴', slang: 'Hey vinur!', message: 'vit hava eitt ótrúligt tilboð fyri teg í Føroyum, vit ábyrgjast at møta hvørjum prísi o vit endurgjalda munin.' },
    'GL': { name: 'Groenlandia', demonym: 'Greenlanders', flag: '🇬🇱', slang: 'Aluu!', message: 'pineq arlalerinnut tunniussisarpavut Kalaallit Nunaanni, akeqarnissut assigiinngitsut akilerivavat.' },

    'DEFAULT': { name: 'tu país', demonym: 'Visitantes', flag: '🌎', slang: '¡Hola!', message: 'tenemos una oferta increíble para ti. Te garantizamos igualarte el precio o te devolvemos la diferencia. ¡No te pierdas esta oportunidad única de estudiar inglés en Europa!' },
};

async function getGeoData() {
    // MÉTODO 1: Cloudflare (El más rápido y robusto para producción)
    try {
        const cfResponse = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
        const cfData = await cfResponse.text();
        const locMatch = cfData.match(/loc=([A-Z]{2})/);
        if (locMatch && locMatch[1]) {
            console.log("Detección Cloudflare:", locMatch[1]);
            return locMatch[1];
        }
    } catch (e) { console.warn("Cloudflare no disponible"); }

    // MÉTODO 2: IP-API (Respaldo confiable)
    try {
        const response = await fetch('http://ip-api.com/json/');
        const data = await response.json();
        if (data && data.countryCode) {
            console.log("Detección IP-API:", data.countryCode);
            return data.countryCode;
        }
    } catch (e) { console.warn("IP-API no disponible"); }

    // MÉTODO 3: Idioma del Navegador (Último recurso para decidir idioma)
    const lang = navigator.language || navigator.userLanguage;
    console.log("Idioma Navegador:", lang);
    if (lang.startsWith('es')) return 'ES';
    if (lang.startsWith('pt')) return 'BR';
    if (lang.startsWith('fr')) return 'FR';
    
    return 'DEFAULT';
}

async function initTemuGift() {
    let countryCode = 'DEFAULT';
    
    // Intentar detectar país con los 3 métodos
    countryCode = await getGeoData();

    const info = countryData[countryCode] || countryData['DEFAULT'];
    const flag = info.flag;
    const slang = info.slang;
    const demonym = info.demonym;
    const offerMessage = info.message;
    
    let offerTitle = `¡Oferta Exclusiva para ${demonym}!`;
    let labelPrefix = 'OFERTA PARA';
    let btnText = '¡QUIERO MI OFERTA!';

    // Lógica de Idioma Automática (Inglés para países no hispanohablantes)
    const spanishCountries = ['AR', 'MX', 'CO', 'CL', 'PE', 'VE', 'UY', 'PY', 'EC', 'BO', 'CR', 'PA', 'NI', 'SV', 'HN', 'GT', 'DO', 'CU', 'PR', 'ES', 'AD'];
    const portugueseCountries = ['BR', 'PT'];
    
    if (!spanishCountries.includes(countryCode) && !portugueseCountries.includes(countryCode)) {
        offerTitle = `Exclusive Offer for ${demonym}!`;
        labelPrefix = 'OFFER FOR';
        btnText = 'I WANT MY OFFER!';
    } else if (portugueseCountries.includes(countryCode)) {
        offerTitle = `Oferta Exclusiva para ${demonym}!`;
        labelPrefix = 'OFERTA PARA';
        btnText = 'QUERO MINHA OFERTA!';
    }

    // Eliminar elementos anteriores si existen
    const oldGift = document.getElementById('temuGiftContainer');
    const oldPopup = document.getElementById('temuOfferPopup');
    if (oldGift) oldGift.remove();
    if (oldPopup) oldPopup.remove();

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
