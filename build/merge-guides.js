/**
 * Merges build/guides/*.json (one file per topic cluster) into build/guides-en.json.
 * Run automatically by build.js; can also be run alone: node build/merge-guides.js
 */
const fs = require('fs');
const path = require('path');

const GUIDES_DIR = path.join(__dirname, 'guides');
const HUB_PATH = path.join(GUIDES_DIR, 'hub.json');
const OUT_PATH = path.join(__dirname, 'guides-en.json');

function mergeGuides() {
  const files = fs.readdirSync(GUIDES_DIR).filter((f) => /^\d+-.*\.json$/.test(f)).sort();
  const items = [];
  for (const f of files) {
    const list = JSON.parse(fs.readFileSync(path.join(GUIDES_DIR, f), 'utf8'));
    if (!Array.isArray(list)) throw new Error(`${f} must contain an array of guides`);
    items.push(...list);
  }
  const hub = JSON.parse(fs.readFileSync(HUB_PATH, 'utf8'));
  const slugs = new Set(items.map((g) => g.slug));
  if (slugs.size !== items.length) throw new Error('Duplicate guide slug');
  for (const g of items) {
    for (const r of g.related || []) {
      if (!slugs.has(r)) throw new Error(`${g.slug}: unknown related slug ${r}`);
    }
    g.steps = (g.steps || []).map((s, i) => ({ number: String(i + 1), ...s }));
  }
  fs.writeFileSync(OUT_PATH, JSON.stringify({ hub, items }, null, 2) + '\n', 'utf8');
  return { hub, items };
}

if (require.main === module) {
  const { items } = mergeGuides();
  console.log(`✅ Merged ${items.length} guides into build/guides-en.json`);
}

module.exports = { mergeGuides };
