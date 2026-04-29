const fs = require('fs');
const path = require('path');

const {
    URLS,
    SITE_URL,
    DEFAULT_LANGUAGE,
    LANGUAGES,
    APP_STORE_ID,
    APP_STORE_URL,
    getStatisticsLastUpdated
} = require('./constants');

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

(function() {
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
            data.meta.alternate_languages = URLS;

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
                    'pt': 'pt_PT',
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
            
            // Function to get value from nested object path
            function getValue(obj, path) {
                const keys = path.split('.');
                let value = obj;
                
                for (const k of keys) {
                    if (value && typeof value === 'object' && k in value) {
                        value = value[k];
                    } else {
                        return undefined;
                    }
                }
                
                return value;
            }
            
            /** Escape string for HTML attribute values (content="", href="", etc.). */
            function escapeHtmlAttr(str) {
                if (typeof str !== 'string') return str;
                return str
                    .replace(/&/g, '&amp;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#39;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;');
            }

            // Function to replace variables in template
            function replaceVariables(template, context) {
                return template.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
                    const rawKey = key.trim();
                    const [pathExpression, ...filters] = rawKey
                        .split('|')
                        .map(s => s.trim())
                        .filter(Boolean);

                    let value = getValue(context, pathExpression);
                    
                    if (value !== undefined) {
                        for (const filter of filters) {
                            if (filter === 'json') {
                                value = JSON.stringify(value);
                            } else if (filter === 'html_attr') {
                                value = escapeHtmlAttr(String(value));
                            } else {
                                console.warn(`Warning: Unknown filter "${filter}" in ${rawKey}`);
                            }
                        }
                        return value;
                    } else {
                        console.warn(`Warning: Variable ${pathExpression} not found in data`);
                        return match; // Keep original placeholder if not found
                    }
                });
            }
            
            // Function to process #each blocks (handles nested blocks recursively)
            function processEachBlocks(template, data) {
                // Pattern to match {{#each path as |varName|}}...{{/each}}
                const eachPattern = /\{\{#each\s+([^\s]+)\s+as\s+\|([^|]+)\|\}\}([\s\S]*?)\{\{\/each\}\}/;
                let result = template;
                let match;
                
                // Keep processing until no more #each blocks are found
                while ((match = result.match(eachPattern)) !== null) {
                    const fullMatch = match[0];
                    const arrayPath = match[1].trim();
                    const varName = match[2].trim();
                    let blockContent = match[3];
                    
                    // Get the array from data
                    const array = getValue(data, arrayPath);
                    
                    if (!Array.isArray(array)) {
                        console.warn(`Warning: ${arrayPath} is not an array or not found`);
                        result = result.replace(fullMatch, '');
                        continue;
                    }
                    
                    // Process each item in the array
                    let processedBlocks = array.map((item, index) => {
                        // Create context with the item accessible by varName
                        const itemContext = { [varName]: item };
                        const mergedContext = { ...data, ...itemContext };
                        
                        // Recursively process nested #each blocks first
                        let processedContent = processEachBlocks(blockContent, mergedContext);
                        
                        // Then process variables in the block content
                        processedContent = replaceVariables(processedContent, mergedContext);
                        
                        return processedContent;
                    }).join('');
                    
                    // Remove trailing comma after the last item in JSON-LD arrays
                    // Pattern: }, followed by newline, optional whitespace/newlines, then closing bracket
                    processedBlocks = processedBlocks.replace(/,\s*\n[\s\n]*\]/g, '\n            ]');
                    // Also handle comma on same line as closing bracket (fallback)
                    processedBlocks = processedBlocks.replace(/,\s*\]/g, ']');
                    
                    // Replace the entire #each block with processed content
                    result = result.replace(fullMatch, processedBlocks);
                }
                
                return result;
            }
            
            // First process #each blocks, then replace remaining variables
            let result = processEachBlocks(template, data);
            result = replaceVariables(result, data);
            
            // Final cleanup: remove any trailing commas before closing brackets in JSON-LD
            // This catches any trailing commas that might have been missed
            result = result.replace(/,\s*\n[\s\n]*\]/g, '\n            ]');
            result = result.replace(/,\s*\]/g, ']');
            
            // Write the result to en.html
            fs.writeFileSync(outputPath, result, 'utf8');
            const editorOutputPath = path.join(htmlDir, data.editor.page_slug);
            let editorResult = processEachBlocks(editorTemplate, data);
            editorResult = replaceVariables(editorResult, data);
            fs.writeFileSync(editorOutputPath, editorResult, 'utf8');
            
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
})();
