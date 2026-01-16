const fs = require('fs');
const path = require('path');

const { LANGUAGES, DEFAULT_LANGUAGE } = require('./constants');

function extractJsonLdBlocks(html) {
  const blocks = [];
  const re = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) {
    blocks.push(m[1].trim());
  }
  return blocks;
}

function contextAround(str, pos, radius = 160) {
  const start = Math.max(0, pos - radius);
  const end = Math.min(str.length, pos + radius);
  return str.slice(start, end);
}

function parseJsonLd(block, { file, lang, index }) {
  try {
    const obj = JSON.parse(block);
    if (!obj || typeof obj !== 'object') {
      return {
        ok: false,
        error: `JSON-LD block is not an object (got ${typeof obj})`,
      };
    }
    return { ok: true };
  } catch (e) {
    const msg = e && e.message ? e.message : String(e);
    const posMatch = msg.match(/position (\d+)/);
    const pos = posMatch ? Number(posMatch[1]) : null;
    return {
      ok: false,
      error: msg,
      pos,
      context: pos === null ? null : contextAround(block, pos),
      meta: { file, lang, index },
    };
  }
}

(function main() {
  const projectRoot = path.join(__dirname, '..');
  const results = [];

  for (const lang of LANGUAGES) {
    const htmlPath = path.join(
      projectRoot,
      lang === DEFAULT_LANGUAGE ? 'index.html' : `${lang}/index.html`
    );

    if (!fs.existsSync(htmlPath)) {
      results.push({
        ok: false,
        error: `Missing built HTML file: ${htmlPath}`,
        meta: { file: htmlPath, lang },
      });
      continue;
    }

    const html = fs.readFileSync(htmlPath, 'utf8');
    const blocks = extractJsonLdBlocks(html);

    if (blocks.length === 0) {
      results.push({
        ok: false,
        error: `No JSON-LD blocks found in ${htmlPath}`,
        meta: { file: htmlPath, lang },
      });
      continue;
    }

    for (let i = 0; i < blocks.length; i++) {
      const res = parseJsonLd(blocks[i], { file: htmlPath, lang, index: i + 1 });
      if (!res.ok) results.push(res);
    }
  }

  if (results.length === 0) {
    console.log(`✅ Structured data OK: all JSON-LD blocks parse in ${LANGUAGES.length} pages`);
    process.exit(0);
  }

  console.error(`❌ Structured data validation failed: ${results.length} issue(s)`);
  for (const r of results) {
    const file = r.meta?.file || '(unknown file)';
    const lang = r.meta?.lang || '(unknown lang)';
    const idx = r.meta?.index ? ` block #${r.meta.index}` : '';
    console.error(`\n- ${lang}: ${file}${idx}`);
    console.error(`  ${r.error}`);
    if (typeof r.pos === 'number' && r.context) {
      console.error(`  (near position ${r.pos})`);
      console.error(`  --- context ---\n${r.context}\n  --- end context ---`);
    }
  }
  process.exit(1);
})();

