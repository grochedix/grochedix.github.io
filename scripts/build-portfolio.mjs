import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const projects = [
  { dir: 'avocat-affaires-site', slug: 'avocat-affaires-site' },
  { dir: 'restaurant-etoile', slug: 'restaurant-etoile' },
  { dir: 'marathon-terre-lune', slug: 'marathon-terre-lune' },
]

const outRoot = path.join(root, 'projets')
fs.rmSync(outRoot, { recursive: true, force: true })

for (const { dir, slug } of projects) {
  const cwd = path.join(root, dir)
  if (!fs.existsSync(path.join(cwd, 'package.json'))) {
    console.error(`Missing project: ${dir}`)
    process.exit(1)
  }
  console.error(`\n=== Building ${dir} (base /projets/${slug}/) ===\n`)
  execSync('npm run build', {
    cwd,
    stdio: 'inherit',
    env: { ...process.env, GITHUB_PAGES: 'true' },
  })
  const dist = path.join(cwd, 'dist')
  if (!fs.existsSync(dist)) {
    console.error(`No dist/ after build: ${dir}`)
    process.exit(1)
  }
  const dest = path.join(outRoot, slug)
  fs.mkdirSync(dest, { recursive: true })
  fs.cpSync(dist, dest, { recursive: true })

  const stray = path.join(dest, 'node_modules')
  if (fs.existsSync(stray)) {
    console.error(`Unexpected node_modules in output: projets/${slug}/`)
    process.exit(1)
  }

  const indexHtml = path.join(dest, 'index.html')
  const spa404 = path.join(dest, '404.html')
  if (fs.existsSync(indexHtml)) {
    fs.copyFileSync(indexHtml, spa404)
  }
}

fs.writeFileSync(path.join(root, '.nojekyll'), '')
console.error('\nOK: projets/<slug>/ + root .nojekyll')
