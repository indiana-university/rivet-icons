const { DOCS_BUILD_DIR, DOCS_SRC_DIR, ICON_BUILD_DIR } = require('./lib/constants.js')

module.exports = (config) => {
  config.addPassthroughCopy(ICON_BUILD_DIR)
  config.addPassthroughCopy(`${DOCS_SRC_DIR}/*.css`)
  return {
    dir: {
      input: DOCS_SRC_DIR,
      output: DOCS_BUILD_DIR
    }
  }
}
