const fs = require('fs');
const path = require('path');

const {
    URLS,
    SITE_URL,
    DEFAULT_LANGUAGE,
    LANGUAGES,
    APP_STORE_ID,
    APP_STORE_URL,
    SITE_LAST_UPDATED_AT,
    getStatisticsLastUpdated,
    GOOGLE_TAG_SCRIPT,
    YANDEX_METRIKA_SCRIPT
} = require('./constants');
const { readImageDimensions } = require('./lib/imageDimensions');
const { renderTemplate } = require('./lib/template');
const { mergeGuides, hasGuides } = require('./merge-guides');

function getRequiredString(obj, keyPath) {
    const keys = keyPath.split('.');
    let value = obj;
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            throw new Error(`Missing required localized field: ${keyPath}`);
        }
    }
    if (typeof value !== 'string' || value.trim() === '') {
        throw new Error(`Localized field must be non-empty string: ${keyPath}`);
    }
    return value;
}

(async function() {
    const urlsPath = path.join(__dirname, '..', 'urls.txt');
    const allUrls = new Set(URLS.map(({ url }) => url));


    for (const lang of LANGUAGES) {
        try {
            const htmlDir = path.join(__dirname, lang === DEFAULT_LANGUAGE ? '..' : `../${lang}/`);

            // Read the template and JSON files
            const templatePath = path.join(__dirname, 'template.html');
            const editorTemplatePath = path.join(__dirname, 'editor-template.html');
            const jsonPath = path.join(__dirname, `${lang}.json`);
            const outputPath = path.join(htmlDir, 'index.html');
            const editorTemplate = fs.readFileSync(editorTemplatePath, 'utf8');

            if (!fs.existsSync(htmlDir)) {
                fs.mkdirSync(htmlDir, { recursive: true });
            }
            
            const template = fs.readFileSync(templatePath, 'utf8');
            const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
            
            // Add build timestamp for cache busting
            const buildTimestamp = Date.now();
            if (!data.meta) {
                data.meta = {};
            }
            data.meta.version = buildTimestamp;
            data.meta.alternate_default = SITE_URL;
            const LANGUAGE_LABELS = {
                en: ['EN', 'English'], ru: ['RU', 'Русский'], es: ['ES', 'Español'], fr: ['FR', 'Français'],
                de: ['DE', 'Deutsch'], it: ['IT', 'Italiano'], pt: ['PT', 'Português'], jp: ['JA', '日本語'],
                ko: ['KO', '한국어'], nl: ['NL', 'Nederlands'], pl: ['PL', 'Polski'], ro: ['RO', 'Română'],
                th: ['TH', 'ไทย'], tr: ['TR', 'Türkçe'], uk: ['UK', 'Українська'], vi: ['VI', 'Tiếng Việt'],
                cn: ['ZH', '简体中文']
            };
            data.meta.alternate_languages = URLS.map((u) => {
                const [label, name] = LANGUAGE_LABELS[u.code] || [u.code.toUpperCase(), u.code];
                const isCurrent = u.code === lang;
                return { ...u, label, name, current: isCurrent ? 'true' : '', other: isCurrent ? '' : 'true' };
            });
            data.meta.google_tag_script = GOOGLE_TAG_SCRIPT;
            data.meta.yandex_metrika_script = YANDEX_METRIKA_SCRIPT;

            /** BCP 47 <html lang> (path codes jp/cn are not valid language tags). */
            const HTML_LANG_BY_CODE = {
                cn: 'zh-CN',
                jp: 'ja'
            };
            data.meta.html_lang = data.meta.html_lang || HTML_LANG_BY_CODE[lang] || data.meta.lang;

            // Ensure Open Graph logo is always present (absolute URL)
            if (!data.meta.og_logo) {
                data.meta.og_logo = `${SITE_URL}img/logo.webp`;
            }
            
            // Ensure Open Graph site_name is always present
            if (!data.meta.og_site_name) {
                data.meta.og_site_name = 'Make Blur';
            }
            
            // Ensure Open Graph locale is always present (format: xx_XX)
            if (!data.meta.og_locale) {
                const localeMap = {
                    'en': 'en_US',
                    'ru': 'ru_RU',
                    'es': 'es_ES',
                    'fr': 'fr_FR',
                    'de': 'de_DE',
                    'it': 'it_IT',
                    'pt': 'pt_BR',
                    'jp': 'ja_JP',
                    'ko': 'ko_KR',
                    'nl': 'nl_NL',
                    'pl': 'pl_PL',
                    'ro': 'ro_RO',
                    'th': 'th_TH',
                    'tr': 'tr_TR',
                    'uk': 'uk_UA',
                    'vi': 'vi_VN',
                    'cn': 'zh_CN'
                };
                data.meta.og_locale = localeMap[lang] || 'en_US';
            }

            // og/twitter image width & height from the actual preview file (must match meta)
            const projectRoot = path.join(__dirname, '..');
            const previewRelative =
                lang === DEFAULT_LANGUAGE ? 'site_preview.png' : path.join(lang, 'site_preview.png');
            const previewPath = path.join(projectRoot, previewRelative);
            if (!fs.existsSync(previewPath)) {
                throw new Error(`Missing preview image for build: ${previewRelative}`);
            }
            const { width: previewW, height: previewH } = await readImageDimensions(previewPath);
            data.meta.og_image_width = String(previewW);
            data.meta.og_image_height = String(previewH);
            data.meta.twitter_image_width = String(previewW);
            data.meta.twitter_image_height = String(previewH);
            
            // Replace {year} placeholder in footer.copyright with current year
            const currentYear = new Date().getFullYear();
            if (data.footer && data.footer.copyright) {
                data.footer.copyright = data.footer.copyright.replace(/\{year\}/g, currentYear.toString());
            }

            // App Store + “last updated” (single source: build/constants.js)
            data.meta = data.meta || {};
            data.header = data.header || {};
            data.hero = data.hero || {};
            data.statistics = data.statistics || {};
            data.final_cta = data.final_cta || {};
            data.footer = data.footer || {};
            data.meta.app_store_id = APP_STORE_ID;
            data.header.download_url = APP_STORE_URL;
            data.hero.cta_url = APP_STORE_URL;
            data.final_cta.cta_url = APP_STORE_URL;
            if (!Array.isArray(data.final_cta.images)) data.final_cta.images = [];
            data.final_cta.eyebrow = data.final_cta.eyebrow || '';
            data.final_cta.paragraph2 = data.final_cta.paragraph2 || '';
            data.final_cta.paragraph3 = data.final_cta.paragraph3 || '';
            data.footer.download_url = APP_STORE_URL;
            data.statistics.last_updated = getStatisticsLastUpdated(lang);
            getRequiredString(data, 'footer.privacy_text');
            getRequiredString(data, 'footer.terms_text');
            data.editor = data.editor || {};
            getRequiredString(data, 'editor.page_slug');
            getRequiredString(data, 'editor.meta_title');
            getRequiredString(data, 'editor.meta_description');
            getRequiredString(data, 'editor.h1');
            getRequiredString(data, 'editor.intro');
            getRequiredString(data, 'editor.upload_button');
            getRequiredString(data, 'editor.download_button');
            getRequiredString(data, 'editor.slider_label');
            getRequiredString(data, 'editor.placeholder_line1');
            getRequiredString(data, 'editor.placeholder_line2');
            getRequiredString(data, 'editor.hero_link_text');
            getRequiredString(data, 'editor.seo_heading');
            getRequiredString(data, 'editor.seo_paragraph');
            getRequiredString(data, 'editor.back_to_home_text');
            getRequiredString(data, 'editor.app_cta_heading');
            getRequiredString(data, 'editor.app_cta_subtext');
            getRequiredString(data, 'editor.app_cta_button');
            const localePrefix = lang === DEFAULT_LANGUAGE ? '' : `${lang}/`;
            data.editor.page_url = `${SITE_URL}${localePrefix}${data.editor.page_slug}`;
            allUrls.add(data.editor.page_url);

            data.hero = data.hero || {};
            if (!data.hero.image) {
                const firstScreen = Array.isArray(data.hero.screens) ? data.hero.screens[0] : null;
                data.hero.image = firstScreen
                    ? { src: firstScreen.src, alt: firstScreen.alt }
                    : { src: '/img/appstore/01-cover.webp', alt: data.header?.logo_alt || 'How to Blur Photo' };
            }

            // Optional fields introduced by the 2026 template (locales may not have them yet)
            if (data.hero.lead === undefined) data.hero.lead = data.hero.intro?.paragraph1 || '';
            data.hero.title_accent = data.hero.title_accent || '';
            data.hero.image.width = data.hero.image.width || 720;
            data.hero.image.height = data.hero.image.height || 1558;
            data.hero.eyebrow = data.hero.eyebrow || '';
            data.hero.secondary_cta_text = data.hero.secondary_cta_text || '';
            if (!Array.isArray(data.hero.chips)) data.hero.chips = [];
            if (!Array.isArray(data.hero.float_cards)) data.hero.float_cards = [];
            data.how_it_works = data.how_it_works || {};
            data.how_it_works.nav_text = data.how_it_works.nav_text || '';
            data.seo = data.seo || {};
            data.seo.faq_nav_text = data.seo.faq_nav_text || '';
            data.seo.faq_intro = data.seo.faq_intro || '';
            data.modes = data.modes || {};
            if (!Array.isArray(data.modes.items)) data.modes.items = [];
            if (!Array.isArray(data.modes.styles)) data.modes.styles = [];
            data.modes.styles_label = data.modes.styles_label || '';
            data.modes.styles_note = data.modes.styles_note || '';
            data.modes.styles_line = data.modes.styles.length ? '' : (data.modes.styles_line || '');
            data.footer.more_title = data.footer.more_title || '';
            data.footer.fineprint = data.footer.fineprint || '';
            data.footer.tagline = data.footer.tagline || '';

            data.download = data.download || {};
            data.download.cta_url = APP_STORE_URL;
            if (!Array.isArray(data.download.points)) data.download.points = [];
            if (!Array.isArray(data.download.specs)) data.download.specs = [];
            data.download.note = data.download.specs.length ? '' : (data.download.note || '');
            if (!data.download.cta_text) {
                data.download.cta_text = data.hero?.cta_text || data.header?.download_text || 'Download';
            }
            if (!data.download.title) data.download.title = data.hero?.title || '';
            if (!data.download.subtitle) data.download.subtitle = data.hero?.subtitle || '';
            if (!data.download.body) data.download.body = data.hero?.intro?.paragraph1 || '';
            if (!data.download.kicker) data.download.kicker = '';
            if (!data.download.note) data.download.note = '';
            if (!data.download.icon) {
                data.download.icon = {
                    src: '/img/appstore/icon.webp',
                    alt: data.header?.logo_alt || 'How to Blur Photo'
                };
            }

            if (!data.screenshots || !Array.isArray(data.screenshots.items) || data.screenshots.items.length === 0) {
                data.screenshots = {
                    title: data.screenshots?.title || data.hero?.title || '',
                    intro: data.screenshots?.intro || '',
                    items: Array.isArray(data.hero?.screens) ? data.hero.screens : []
                };
            }
            data.screenshots.items = (data.screenshots.items || []).map((shot) => ({
                ...shot,
                caption: shot.caption || shot.alt || ''
            }));

            // UI strings used by templates (English defaults; locales override via `ui` in <lang>.json)
            data.ui = {
                skip_link: 'Skip to content',
                nav_label: 'Primary',
                key_facts_label: 'Key facts',
                language_label: 'Language',
                breadcrumb_label: 'Breadcrumb',
                on_this_page: 'On this page',
                built_into_iphone: 'Built into iPhone',
                guide_meta_device: 'iPhone · iOS 18.6+',
                answer_note: 'Free · No uploads · Works on photos you already took',
                inline_cta_note: 'Free · iPhone with iOS 18.6+ · No uploads',
                aside_app_name: 'How to Blur Photo',
                aside_app_note: 'Free · iOS 18.6+',
                read_time: '{n} min read',
                howto_tool: 'How to Blur Photo (iPhone app)',
                ...(data.ui || {})
            };

            if (hasGuides(lang)) {
                // build/guides[/<lang>]/*.json → build/guides-<lang>.json (merged every build)
                const guidesFile = mergeGuides(lang);
                data.guides = { ...(data.guides || {}), ...(guidesFile.hub || {}), items: guidesFile.items || [] };
            }
            if (!data.guides) data.guides = {};
            if (!Array.isArray(data.guides.items)) data.guides.items = [];
            data.guides.items = data.guides.items.map((item) => ({
                ...item,
                page_url: `${SITE_URL}${localePrefix}${item.slug}`,
                path: `/${localePrefix}${item.slug}`,
                learn_more_text: item.learn_more_text || data.guides.learn_more_text || 'Learn more',
                og_title: item.og_title || item.meta_title,
                og_description: item.og_description || item.meta_description,
                faq_title: item.faq_title || 'Frequently asked questions',
                steps_title: item.steps_title || 'How to do it in the app',
                tips_title: item.tips_title || 'Tips',
                cta_text: item.cta_text || data.header?.download_text || 'Download',
                answer_label: item.answer_label || data.guides.answer_label || 'Short answer',
                read_time_text: item.read_time_text || (() => {
                    const text = JSON.stringify(item).replace(/<[^>]*>|"[a-z_]+":|[{}\[\],"]/g, ' ');
                    // CJK scripts have no spaces: count characters (~500/min) instead of words (~220/min).
                    const cjk = (text.match(/[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/g) || []).length;
                    const words = text.replace(/[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af\u0e00-\u0e7f]/g, ' ').split(/\s+/).filter(Boolean).length;
                    const thai = (text.match(/[\u0e00-\u0e7f]/g) || []).length;
                    const minutes = words / 220 + cjk / 500 + thai / 900;
                    return (data.ui?.read_time || '{n} min read').replace('{n}', String(Math.max(2, Math.round(minutes))));
                })()
            }));
            for (const item of data.guides.items) {
                allUrls.add(item.page_url);
            }
            // Group guides by cluster for the homepage hub (falls back to one flat group)
            const clusterDefs = Array.isArray(data.guides.clusters) ? data.guides.clusters : [];
            data.guides.groups = clusterDefs
                .map((c) => ({
                    ...c,
                    items: data.guides.items.filter((g) => g.cluster === c.id)
                }))
                .filter((c) => c.items.length > 0);
            const clustered = new Set(data.guides.groups.flatMap((c) => c.items.map((g) => g.slug)));
            const leftovers = data.guides.items.filter((g) => !clustered.has(g.slug));
            if (leftovers.length) {
                data.guides.groups.push({ id: 'more', title: data.guides.title || 'Guides', blurb: '', items: leftovers });
            }
            data.guides.count = data.guides.items.length;

            // Build JSON-LD objects from translation data to avoid hardcoded strings in template
            const stripHtml = (value) => {
                if (typeof value !== 'string') return value;
                return value
                    .replace(/<[^>]*>/g, ' ')
                    .replace(/\s+/g, ' ')
                    .trim();
            };

            if (!data.seo) data.seo = {};
            if (!data.seo.structured_data) data.seo.structured_data = {};

            // SoftwareApplication: inject canonical/download URL (language-specific)
            if (data.seo.structured_data.software_application && typeof data.seo.structured_data.software_application === 'object') {
                data.seo.structured_data.software_application.url = data.meta?.canonical;
                data.seo.structured_data.software_application.downloadUrl = data.header?.download_url;
            }

            // WebSite: keep translation content, but ensure url matches canonical
            if (data.seo.structured_data.website && typeof data.seo.structured_data.website === 'object') {
                data.seo.structured_data.website.url = data.meta?.canonical;
            }

            // HowTo: build steps from how_it_works.steps (strip HTML)
            if (data.seo.structured_data.howto && typeof data.seo.structured_data.howto === 'object' && Array.isArray(data.how_it_works?.steps)) {
                data.seo.structured_data.howto.step = data.how_it_works.steps.map((s, i) => {
                    const step = {
                        "@type": "HowToStep",
                        "name": stripHtml(s?.title),
                        "text": stripHtml(s?.description)
                    };
                    if (i === 0) {
                        step.url = APP_STORE_URL;
                    }
                    return step;
                });
            }

            // FAQPage: build from seo.faq (strip HTML)
            if (Array.isArray(data.seo.faq)) {
                const guideByKeyword = new Map(
                    data.guides.items.map((g) => [String(g.keyword || '').toLowerCase(), g])
                );
                data.seo.faq = data.seo.faq.map((f) => {
                    const faq = { ...f };
                    if (!faq.learn_more_text) {
                        faq.learn_more_text = data.guides.learn_more_text || 'Learn more';
                    }
                    if (!faq.learn_more_url && faq.guide_keyword) {
                        const match = guideByKeyword.get(String(faq.guide_keyword).toLowerCase());
                        if (match) faq.learn_more_url = match.path;
                    }
                    return faq;
                });
                data.seo.structured_data.faqpage = {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": data.seo.faq.map((f) => ({
                        "@type": "Question",
                        "name": stripHtml(f?.question),
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": stripHtml(f?.answer)
                        }
                    }))
                };
            }

            // BreadcrumbList: use translated label + canonical
            data.seo.structured_data.breadcrumb_list = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": data.seo.breadcrumb_home,
                        "item": data.meta?.canonical
                    }
                ]
            };
            
            // Render landing page
            let result = renderTemplate(template, data);
            
            // Write the result to index.html
            fs.writeFileSync(outputPath, result, 'utf8');
            const editorOutputPath = path.join(htmlDir, data.editor.page_slug);
            let editorResult = renderTemplate(editorTemplate, data);
            fs.writeFileSync(editorOutputPath, editorResult, 'utf8');

            if (data.guides.items.length && fs.existsSync(path.join(__dirname, 'guide-template.html'))) {
                const guideTemplate = fs.readFileSync(path.join(__dirname, 'guide-template.html'), 'utf8');
                const guideBySlug = new Map(data.guides.items.map((g) => [g.slug, g]));
                for (const guide of data.guides.items) {
                    const relatedSlugs = Array.isArray(guide.related) && guide.related.length
                        ? guide.related
                        : data.guides.items.filter((g) => g.slug !== guide.slug).slice(0, 3).map((g) => g.slug);
                    const related = relatedSlugs
                        .map((slug) => guideBySlug.get(slug))
                        .filter(Boolean)
                        .map((g) => ({
                            slug: g.slug,
                            path: g.path,
                            page_url: g.page_url,
                            card_title: g.card_title,
                            card_excerpt: g.card_excerpt,
                            card_image: g.card_image,
                            card_image_alt: g.card_image_alt
                        }));
                    const slugify = (t) => String(t || '').toLowerCase().replace(/<[^>]*>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
                    const native = guide.native ? { ...guide.native, id: slugify(guide.native.heading) || 'native' } : null;
                    const sections = (guide.sections || []).map((s, i) => ({ ...s, id: slugify(s.heading) || `section-${i + 1}` }));
                    const toc = [];
                    if (native) toc.push({ id: native.id, title: native.heading });
                    for (const s of sections) toc.push({ id: s.id, title: s.heading });
                    toc.push({ id: 'steps', title: guide.steps_title });
                    if (Array.isArray(guide.tips) && guide.tips.length) toc.push({ id: 'tips', title: guide.tips_title });
                    if (Array.isArray(guide.faq) && guide.faq.length) toc.push({ id: 'faq', title: guide.faq_title });
                    const tips = (guide.tips || []).map((text, i) => ({ text, number: String(i + 1).padStart(2, '0') }));
                    const guideData = {
                        ...data,
                        guide: {
                            ...guide,
                            native,
                            sections,
                            toc,
                            tips,
                            related,
                            breadcrumb_current: guide.card_title || guide.h1
                        }
                    };
                    guideData.seo = { ...data.seo, structured_data: { ...data.seo.structured_data } };
                    guideData.seo.structured_data.howto = {
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": stripHtml(guide.h1),
                        "description": stripHtml(guide.meta_description),
                        "image": `${SITE_URL}${String(guide.image || '').replace(/^\//, '')}`,
                        "totalTime": "PT2M",
                        "tool": [{ "@type": "HowToTool", "name": data.ui.howto_tool }],
                        "step": (guide.steps || []).map((s, i) => ({
                            "@type": "HowToStep",
                            "position": i + 1,
                            "name": stripHtml(s?.title),
                            "text": stripHtml(s?.description)
                        }))
                    };
                    if (Array.isArray(guide.faq) && guide.faq.length) {
                        guideData.seo.structured_data.faqpage = {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": guide.faq.map((f) => ({
                                "@type": "Question",
                                "name": stripHtml(f?.question),
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": stripHtml(f?.answer)
                                }
                            }))
                        };
                    }
                    guideData.seo.structured_data.breadcrumb_list = {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": data.seo.breadcrumb_home,
                                "item": data.meta?.canonical
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": stripHtml(guide.card_title || guide.h1),
                                "item": guide.page_url
                            }
                        ]
                    };
                    guideData.seo.structured_data.article = {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": stripHtml(guide.h1),
                        "description": stripHtml(guide.meta_description),
                        "url": guide.page_url,
                        "mainEntityOfPage": guide.page_url,
                        "image": `${SITE_URL}${String(guide.image || '').replace(/^\//, '')}`,
                        "inLanguage": data.meta.html_lang || 'en',
                        "dateModified": SITE_LAST_UPDATED_AT,
                        "author": {
                            "@type": "Organization",
                            "name": "Make Blur"
                        }
                    };
                    const guideHtml = renderTemplate(guideTemplate, guideData);
                    const guideOut = path.join(htmlDir, guide.slug);
                    fs.writeFileSync(guideOut, guideHtml, 'utf8');
                    console.log(`✅ Successfully built guide ${guide.slug}`);
                }
            }
            
            console.log(`✅ Successfully built ${lang}.html from template and ${lang}.json`);
            console.log(`📁 Output saved to: ${outputPath}`);
            console.log(`✅ Successfully built ${lang} editor page`);
            console.log(`📁 Output saved to: ${editorOutputPath}`);
            
        } catch (error) {
            console.error('❌ Error building HTML:', error.message);
            process.exit(1);
        }
    }

    fs.writeFileSync(urlsPath, Array.from(allUrls).join('\n'), 'utf8');
    console.log(`✅ Successfully built urls.txt file`);
    console.log(`📁 Output saved to: ${urlsPath}`);
    console.log()
})().catch((err) => {
    console.error('❌ Build failed:', err);
    process.exit(1);
});
