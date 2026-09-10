/**
 * Minimal Mustache-like renderer used by build.js.
 * Supports {{path}}, {{path|json}}, {{path|html_attr}},
 * {{#each path as |name|}}...{{/each}}, and {{#if path}}...{{/if}}.
 */

function getValue(obj, path) {
    const keys = String(path).trim().split('.');
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

function escapeHtmlAttr(str) {
    if (typeof str !== 'string') return str;
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function isTruthy(value) {
    if (value == null || value === false || value === '') return false;
    if (Array.isArray(value)) return value.length > 0;
    return true;
}

function replaceVariables(template, context) {
    return template.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
        const rawKey = key.trim();
        if (rawKey.startsWith('#') || rawKey.startsWith('/')) {
            return match;
        }
        const [pathExpression, ...filters] = rawKey
            .split('|')
            .map((s) => s.trim())
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
        }
        console.warn(`Warning: Variable ${pathExpression} not found in data`);
        return match;
    });
}

function findMatchingClose(template, innerStart, openNeedle, closeNeedle) {
    let depth = 1;
    let i = innerStart;
    while (i < template.length) {
        const nextOpen = template.indexOf(openNeedle, i);
        const nextClose = template.indexOf(closeNeedle, i);
        if (nextClose === -1) {
            throw new Error(`Unclosed template block ${openNeedle}`);
        }
        if (nextOpen !== -1 && nextOpen < nextClose) {
            depth += 1;
            i = nextOpen + openNeedle.length;
        } else {
            depth -= 1;
            if (depth === 0) return nextClose;
            i = nextClose + closeNeedle.length;
        }
    }
    throw new Error(`Unclosed template block ${openNeedle}`);
}

function parseIf(template, start) {
    const openMatch = template.slice(start).match(/^\{\{#if\s+([^}]+)\}\}/);
    if (!openMatch) {
        throw new Error(`Malformed {{#if}} at position ${start}`);
    }
    const innerStart = start + openMatch[0].length;
    const closeStart = findMatchingClose(template, innerStart, '{{#if ', '{{/if}}');
    return {
        type: 'if',
        start,
        end: closeStart + '{{/if}}'.length,
        path: openMatch[1].trim(),
        inner: template.slice(innerStart, closeStart)
    };
}

function parseEach(template, start) {
    const openMatch = template
        .slice(start)
        .match(/^\{\{#each\s+([^\s]+)\s+as\s+\|([^|]+)\|\}\}/);
    if (!openMatch) {
        throw new Error(`Malformed {{#each}} at position ${start}`);
    }
    const innerStart = start + openMatch[0].length;
    const closeStart = findMatchingClose(template, innerStart, '{{#each ', '{{/each}}');
    return {
        type: 'each',
        start,
        end: closeStart + '{{/each}}'.length,
        path: openMatch[1].trim(),
        varName: openMatch[2].trim(),
        inner: template.slice(innerStart, closeStart)
    };
}

function findFirstControl(template) {
    const ifIdx = template.indexOf('{{#if ');
    const eachIdx = template.indexOf('{{#each ');
    if (ifIdx === -1 && eachIdx === -1) return null;
    const useEach = eachIdx !== -1 && (ifIdx === -1 || eachIdx < ifIdx);
    return useEach ? parseEach(template, eachIdx) : parseIf(template, ifIdx);
}

function stripTrailingJsonComma(html) {
    return html.replace(/,\s*\n[\s\n]*\]/g, '\n            ]').replace(/,\s*\]/g, ']');
}

function renderTemplate(template, data) {
    let result = template;
    let guard = 0;
    while (guard < 20000) {
        guard += 1;
        const block = findFirstControl(result);
        if (!block) break;
        let replacement = '';
        if (block.type === 'if') {
            const value = getValue(data, block.path);
            replacement = isTruthy(value) ? renderTemplate(block.inner, data) : '';
        } else {
            const array = getValue(data, block.path);
            if (!Array.isArray(array)) {
                console.warn(`Warning: ${block.path} is not an array or not found`);
                replacement = '';
            } else {
                replacement = array
                    .map((item) => {
                        const merged = { ...data, [block.varName]: item };
                        return renderTemplate(block.inner, merged);
                    })
                    .join('');
                replacement = stripTrailingJsonComma(replacement);
            }
        }
        result = result.slice(0, block.start) + replacement + result.slice(block.end);
    }
    result = replaceVariables(result, data);
    return stripTrailingJsonComma(result);
}

module.exports = {
    getValue,
    escapeHtmlAttr,
    isTruthy,
    renderTemplate
};
