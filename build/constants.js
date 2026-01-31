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
    'jp'
];

const URLS = LANGUAGES.map((lang) => ({
    lang,
    url: lang === DEFAULT_LANGUAGE ? SITE_URL : `${SITE_URL}${lang}/`
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
    EXPECTED_JSON_LD_TYPES,
    INDEX_NOW_KEY,
    INDEX_NOW_ENGINES,
    ADDITIONAL_URLS
};