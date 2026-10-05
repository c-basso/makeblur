/**
 * Merges guide JSON files (one file per topic cluster) into build/guides-<lang>.json.
 *   en: build/guides/*.json      + build/guides/hub.json
 *   xx: build/guides/xx/*.json   + build/guides/xx/hub.json
 * Run automatically by build.js; can also be run alone: node build/merge-guides.js [lang]
 */
const fs = require('fs');
const path = require('path');

const GUIDES_ROOT = path.join(__dirname, 'guides');

function guidesDirFor(lang = 'en') {
  return lang === 'en' ? GUIDES_ROOT : path.join(GUIDES_ROOT, lang);
}

function hasGuides(lang = 'en') {
  return fs.existsSync(path.join(guidesDirFor(lang), 'hub.json'));
}

function mergeGuides(lang = 'en') {
  const dir = guidesDirFor(lang);
  const files = fs.readdirSync(dir).filter((f) => /^\d+-.*\.json$/.test(f)).sort();
  const items = [];
  for (const f of files) {
    const list = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    if (!Array.isArray(list)) throw new Error(`${lang}/${f} must contain an array of guides`);
    items.push(...list);
  }
  const hub = JSON.parse(fs.readFileSync(path.join(dir, 'hub.json'), 'utf8'));
  const slugs = new Set(items.map((g) => g.slug));
  if (slugs.size !== items.length) throw new Error(`${lang}: duplicate guide slug`);
  for (const g of items) {
    for (const r of g.related || []) {
      if (!slugs.has(r)) throw new Error(`${lang}/${g.slug}: unknown related slug ${r}`);
    }
    g.steps = (g.steps || []).map((s, i) => ({ number: String(i + 1), ...s }));
  }
  const outPath = path.join(__dirname, `guides-${lang}.json`);
  fs.writeFileSync(outPath, JSON.stringify({ hub, items }, null, 2) + '\n', 'utf8');
  return { hub, items };
}

if (require.main === module) {
  const lang = process.argv[2] || 'en';
  const { items } = mergeGuides(lang);
  console.log(`✅ Merged ${items.length} guides into build/guides-${lang}.json`);
}

module.exports = { mergeGuides, hasGuides };
