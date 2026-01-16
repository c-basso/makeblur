const SITE_URL = "https://makeblur.com/";
const DEFAULT_LANGUAGE = 'en';

const LANGUAGES = [
    DEFAULT_LANGUAGE,
    'ru',
    'es',
    'fr',
    'de',
    'it',
    'pt'
];

const URLS = LANGUAGES.map((lang) => ({
    lang,
    url: lang === DEFAULT_LANGUAGE ? SITE_URL : `${SITE_URL}${lang}/`
}));

module.exports = {
    SITE_URL,
    URLS,
    DEFAULT_LANGUAGE,
    LANGUAGES
};