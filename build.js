const fs = require('fs/promises')
const { pathThatSvg } = require('path-that-svg')
const { symbolFileName } = require('./svg.config')

const namespace = 'rvt-icon'

async function buildStyles (options = {}) {
  const {
    include = [],
    out = `./dist/${symbolFileName}.css`
  } = options

  const allFiles = await fs.readdir('./src/svg')
  const files = allFiles
    .map((fileName) => {
      const fullName = fileName.replace('.svg', '')
      const shortName = fullName.replace(`${namespace}-`, '')
      return { fileName, fullName, shortName }
    })
    .filter(({ shortName }) =>
      include.length
        ? include.includes(shortName)
        : true
    )
    .map(async ({ fileName, fullName, shortName }) => {
      const source = await fs.readFile(`./src/svg/${fileName}`, { encoding: 'utf8' })
      const svg = await pathThatSvg(source)
      const path = [...svg.matchAll(/ d="([a-zA-Z0-9-,.\s]+)"/g)]
        .filter((match) => match)
        .map((match) => match[1])
        .map((d) => d.replace(/\s/g, ' '))
        .join(' ')
      return { fullName, path, shortName }
    })
  const icons = await Promise.all(files)

  const iconVars = icons
    .map(({ fullName, path }) => `  --${fullName}: '${path}';`)
    .join('\n')

  const selectors = icons
    .map(({ fullName, shortName }) =>
`.${namespace}--${shortName},
[data-${namespace}="${shortName}"] {
  --${namespace}: var(--${fullName});
}`)
    .join('\n\n')

  const css =
`:root {
${iconVars}
}

.${namespace},
[data-${namespace}] {
  display: inline-flex;
  padding: 0.25rem;
}

.${namespace}::before,
[data-${namespace}]::before {
  background-color: currentColor;
  clip-path: path(var(--${namespace}));
  content: '';
  display: inline-block;
  height: 1rem;
  width: 1rem;
}

${selectors}
`

  await fs.writeFile(out, css)

  return css
}

module.exports = {
  buildStyles
}
