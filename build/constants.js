const SITE_URL = "https://makeblur.com/";
// const SITE_URL = "http://127.0.0.1:8080/";
const DEFAULT_LANGUAGE = 'en';

const LANGUAGES = [
    DEFAULT_LANGUAGE,
    'ru',
    'es',
    'fr',
    'de',
    'it',
    'pt',
    'jp',
    'ko',
    'nl',
    'pl',
    'ro',
    'th',
    'tr',
    'uk',
    'vi',
    'cn'
];

/** BCP 47 hreflang values (URL path stays short: jp, cn, …). */
const HREFLANG_BY_CODE = {
    jp: 'ja',
    cn: 'zh-CN'
};

const URLS = LANGUAGES.map((code) => ({
    code,
    hreflang: HREFLANG_BY_CODE[code] || code,
    url: code === DEFAULT_LANGUAGE ? SITE_URL : `${SITE_URL}${code}/`
}));

const ADDITIONAL_URLS = [
    `${SITE_URL}llms.txt`
];

// Expected JSON-LD types that should be present on each generated page.
// Keep this list in sync with `build/template.html` structured data scripts.
const EXPECTED_JSON_LD_TYPES = [
    'SoftwareApplication',
    'Organization',
    'WebSite',
    'HowTo',
    'FAQPage',
    'BreadcrumbList'
];

const INDEX_NOW_KEY = 'Q8IPzEDH72muy5mKoXE2j5il';
const YANDEX_METRIKA_SCRIPT = `<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105338905', 'ym');

    ym(105338905, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/105338905" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->`;

/** @see https://apps.apple.com/app/id6749166426 */
const APP_STORE_ID = '6749166426';
const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;

/**
 * ISO date (UTC) for “content / numbers last updated” in {{statistics.last_updated}}.
 * Edit this when you refresh stats copy; month+year is rendered per locale in `getStatisticsLastUpdated`.
 */
const SITE_LAST_UPDATED_AT = new Date().toISOString().slice(0, 10);

/** BCP-47 for Intl where site path `lang` is not a valid tag (jp, cn, …). */
const INTL_LOCALE_BY_CODE = {
    ...HREFLANG_BY_CODE,
    en: 'en',
};

const LAST_UPDATED_PREFIX = {
    en: 'Last updated: ',
    ru: 'Обновлено: ',
    de: 'Aktualisiert: ',
    fr: 'Mis à jour : ',
    es: 'Actualizado: ',
    it: 'Aggiornato: ',
    pt: 'Atualizado: ',
    pl: 'Ostatnia aktualizacja: ',
    ro: 'Ultima actualizare: ',
    nl: 'Laatst bijgewerkt: ',
    tr: 'Son güncelleme: ',
    uk: 'Останнє оновлення: ',
    vi: 'Cập nhật lần cuối: ',
    th: 'อัปเดตล่าสุด: ',
    ko: '최종 업데이트: ',
    jp: '最終更新：',
    cn: '最近更新：'
};

/**
 * @param {string} lang LANGUAGES code (e.g. en, ru, jp, cn)
 * @returns {string} Local “last updated” line for the statistics block
 */
function getStatisticsLastUpdated(lang) {
    const d = new Date(SITE_LAST_UPDATED_AT + 'T12:00:00.000Z');
    const bcp = INTL_LOCALE_BY_CODE[lang] || lang;
    const prefix = LAST_UPDATED_PREFIX[lang] || LAST_UPDATED_PREFIX.en;
    if (lang === 'es' || lang === 'pt') {
        const month = new Intl.DateTimeFormat(lang, { month: 'long' }).format(d);
        return `${prefix}${month} ${d.getUTCFullYear()}`;
    }
    if (lang === 'th') {
        const my = new Intl.DateTimeFormat('th-TH', { year: 'numeric', month: 'long', calendar: 'gregory' }).format(d);
        return `${prefix}${my}`;
    }
    if (lang === 'ko') {
        const my = new Intl.DateTimeFormat('ko', { year: 'numeric', month: 'long' }).format(d);
        return `${prefix}${my}`;
    }
    if (lang === 'cn' || lang === 'jp') {
        const my = new Intl.DateTimeFormat(bcp, { year: 'numeric', month: 'long' }).format(d);
        return `${prefix}${my}`;
    }
    const my = new Intl.DateTimeFormat(bcp, { year: 'numeric', month: 'long' })
        .format(d)
        .replace(/\s*г\.$/u, '')
        .replace(/\s*р\.$/u, '');
    return `${prefix}${my}`;
}

// https://www.indexnow.org/searchengines.json
const INDEX_NOW_ENGINES = [
    'indexnow.yep.com',
    'search.seznam.cz',
    'searchadvisor.naver.com',
    'indexnow.amazonbot.amazon',
    'api.indexnow.org',
    'yandex.com',
    'bing.com'
];

module.exports = {
    SITE_URL,
    URLS,
    DEFAULT_LANGUAGE,
    LANGUAGES,
    INTL_LOCALE_BY_CODE,
    EXPECTED_JSON_LD_TYPES,
    INDEX_NOW_KEY,
    INDEX_NOW_ENGINES,
    YANDEX_METRIKA_SCRIPT,
    ADDITIONAL_URLS,
    APP_STORE_ID,
    APP_STORE_URL,
    SITE_LAST_UPDATED_AT,
    getStatisticsLastUpdated
};