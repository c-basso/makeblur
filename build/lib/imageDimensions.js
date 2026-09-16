const fs = require('fs');

let sharp = null;
try {
  // Optional: sharp may be missing or built for another platform (e.g. running the build inside a Linux VM
  // with macOS node_modules). PNG/JPEG/WebP dimensions are read from the file header as a fallback.
  sharp = require('sharp');
} catch (_) {
  sharp = null;
}

function readPngSize(buf) {
  if (buf.length < 24 || buf.toString('ascii', 1, 4) !== 'PNG') return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function readJpegSize(buf) {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) { i++; continue; }
    const marker = buf[i + 1];
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
}

function readWebpSize(buf) {
  if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') return null;
  const chunk = buf.toString('ascii', 12, 16);
  if (chunk === 'VP8X') return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
  if (chunk === 'VP8L') {
    const b = buf.readUInt32LE(21);
    return { width: 1 + (b & 0x3fff), height: 1 + ((b >> 14) & 0x3fff) };
  }
  if (chunk === 'VP8 ') return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
  return null;
}

/**
 * Read pixel width/height from a local image file.
 * Uses sharp when available; falls back to header parsing for PNG, JPEG and WebP.
 * Shared by `build/build.js` (inject og/twitter dimensions) and validators.
 *
 * @param {string} imagePath absolute path
 * @returns {Promise<{ width: number, height: number }>}
 */
async function readImageDimensions(imagePath) {
  if (sharp) {
    const meta = await sharp(imagePath).metadata();
    if (meta.width != null && meta.height != null) return { width: meta.width, height: meta.height };
  }
  const buf = fs.readFileSync(imagePath);
  const size = readPngSize(buf) || readJpegSize(buf) || readWebpSize(buf);
  if (!size) throw new Error(`could not read dimensions: ${imagePath}`);
  return size;
}

module.exports = { readImageDimensions };
