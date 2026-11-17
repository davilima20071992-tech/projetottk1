/* ==========================================================================
   SERVIDOR ESTÁTICO SIMPLES (sem dependências)
   --------------------------------------------------------------------------
   Serve a pasta dist/ gerada pelo build — ideal para hospedagem compartilhada
   (cPanel, HostGator, Locaweb etc.) ou para testar o site localmente.

   Uso:
     node servidor.js            → http://localhost:3000
     PORT=8080 node servidor.js  → porta personalizada (Windows: set PORT=8080)
   ========================================================================== */

import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT = path.join(__dirname, 'dist')
const PORT = process.env.PORT || 3000

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
}

function send(res, status, body, headers = {}) {
  res.writeHead(status, { 'Cache-Control': 'no-cache', ...headers })
  res.end(body)
}

const server = http.createServer((req, res) => {
  try {
    const url = decodeURIComponent(req.url.split('?')[0])
    let filePath = path.normalize(path.join(ROOT, url))

    // Impede acesso fora da pasta dist/
    if (!filePath.startsWith(ROOT)) return send(res, 403, 'Proibido')

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      const index = path.join(ROOT, 'index.html')
      if (fs.existsSync(index)) {
        return send(res, 200, fs.readFileSync(index), { 'Content-Type': MIME['.html'] })
      }
      return send(res, 404, 'Não encontrado')
    }

    const ext = path.extname(filePath).toLowerCase()
    const type = MIME[ext] || 'application/octet-stream'
    const immutable = /^\/assets\//.test(url)

    return send(res, 200, fs.readFileSync(filePath), {
      'Content-Type': type,
      'Cache-Control': immutable ? 'public, max-age=31536000, immutable' : 'no-cache',
    })
  } catch (err) {
    console.error(err)
    return send(res, 500, 'Erro interno')
  }
})

server.listen(PORT, () => {
  console.log('──────────────────────────────────────────────')
  console.log('  Lar Bom Samaritano — site no ar')
  console.log(`  Local:   http://localhost:${PORT}`)
  console.log('  Para parar: Ctrl+C')
  console.log('──────────────────────────────────────────────')
})
