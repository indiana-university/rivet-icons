const fs = require('fs')

const pathRE = new RegExp('<path.*d="(.+)".*/>', 'g')

const files = fs.readdirSync('./src/svg')
const icons = new Map()
const namespace = 'rvt-icon'

files.forEach((file) => {
  const svg = fs.readFileSync(`./src/svg/${file}`, { encoding: 'utf8' })
  const paths = [...svg.matchAll(pathRE)]
    .filter((path) => path)
    .map((path) => path[1])
    .join(' ')
  const name = file.replace('.svg', '')
  icons.set(name, paths)
})

const iconVars = [...icons.entries()]
  .map(([key, value]) => `  --${key}: path('${value}');`)
  .join('\n')

const iconSelectors = [...icons.entries()]
  .map(([key]) => [key, key.replace(`${namespace}-`, '')])
  .map(([key, name]) =>
`.${namespace}--${name},
[data-${namespace}="${name}"] {
  --${namespace}: var(--${key});
}`)
  .join('\n\n')

const css = `
:root {
${iconVars}
}

.rvt-icon,
[data-rvt-icon] {
  display: inline-flex;
  padding: 0.25rem;
}

.rvt-icon::before,
[data-rvt-icon]::before {
  background-color: currentColor;
  clip-path: var(--rvt-icon);
  content: '';
  display: inline-block;
  height: 1rem;
  width: 1rem;
}

${iconSelectors}
`

fs.writeFileSync(`./dist/${namespace}s.css`, css)
