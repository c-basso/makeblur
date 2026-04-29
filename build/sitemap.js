const fs = require('fs');
const path = require('path');

const {
  SITE_URL,
  URLS,
  LANGUAGES,
  DEFAULT_LANGUAGE,
  SITE_LAST_UPDATED_AT
} = require('./constants');

function xmlEscape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

(function main() {
  const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
  const robotsPath = path.join(__dirname, '..', 'robots.txt');

  const defaultEntry = URLS.find(({ code }) => code === DEFAULT_LANGUAGE);
  const xDefaultUrl = defaultEntry ? defaultEntry.url : SITE_URL;
  const langUrlByCode = new Map(URLS.map((entry) => [entry.code, entry]));
  const editorAlternates = LANGUAGES.map((lang) => {
    const jsonPath = path.join(__dirname, `${lang}.json`);
    const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    const pageSlug = json?.editor?.page_slug;
    if (!pageSlug || typeof pageSlug !== 'string') {
      throw new Error(`Missing required editor.page_slug in ${jsonPath}`);
    }
    const base = langUrlByCode.get(lang)?.url;
    if (!base) {
      throw new Error(`Missing URL mapping for locale: ${lang}`);
    }
    return {
      code: lang,
      hreflang: langUrlByCode.get(lang).hreflang,
      url: `${base}${pageSlug}`
    };
  });
  const xDefaultEditorUrl =
    editorAlternates.find(({ code }) => code === DEFAULT_LANGUAGE)?.url || `${SITE_URL}photo-blur-editor-online.html`;

  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>');
  lines.push('<urlset ');
  lines.push('  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
  lines.push('  xmlns:xhtml="http://www.w3.org/1999/xhtml">');
  lines.push('');

  function appendUrlEntry(loc, alternates, xDefault) {
    lines.push('  <url>');
    lines.push(`    <loc>${xmlEscape(loc)}</loc>`);
    for (const { hreflang, url: href } of alternates) {
      lines.push(
        `    <xhtml:link rel="alternate" hreflang="${xmlEscape(hreflang)}" href="${xmlEscape(href)}" />`
      );
    }
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(xDefault)}" />`
    );
    lines.push(`    <lastmod>${xmlEscape(SITE_LAST_UPDATED_AT)}</lastmod>`);
    lines.push('    <priority>1.0</priority>');
    lines.push('  </url>');
    lines.push('');
  }

  for (const { url } of URLS) {
    appendUrlEntry(url, URLS, xDefaultUrl);
  }
  for (const { url } of editorAlternates) {
    appendUrlEntry(url, editorAlternates, xDefaultEditorUrl);
  }

  lines.push('</urlset>');

  fs.writeFileSync(sitemapPath, lines.join('\n') + '\n', 'utf8');
  console.log(`✅ Successfully built sitemap.xml`);
  console.log(`📁 Output saved to: ${sitemapPath}`);
  console.log();

  const robots = `
User-agent: *
Allow: /

Sitemap: ${SITE_URL}sitemap.xml
  `;
  fs.writeFileSync(robotsPath, robots.trim() + '\n', 'utf8');
  console.log(`✅ Successfully built robots.txt`);
  console.log(`📁 Output saved to: ${robotsPath}`);
  console.log();
})();
