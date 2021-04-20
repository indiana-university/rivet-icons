const fs = require('fs')
const { pathThatSvg } = require('path-that-svg')

const namespace = 'rvt-icon'

async function convert () {
  const files = fs.readdirSync('./src/svg')
  const icons = new Map()

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const source = fs.readFileSync(`./src/svg/${file}`, { encoding: 'utf8' })
    const svg = await pathThatSvg(source)
    const paths = [...svg.matchAll(/ d="([a-zA-Z0-9-,.\s]+)"/g)]
      .filter((match) => match)
      .map((match) => match[1])
      .map((d) => d.replace(/[\n\t]/g, ' '))
      .join(' ')
    const name = file.replace('.svg', '')
    icons.set(name, paths)
  }

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

  const css =
`:root {
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
}

convert()
