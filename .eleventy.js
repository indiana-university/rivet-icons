const { DOCS_BUILD_DIR, DOCS_SRC_DIR } = require('./lib/constants.js')

module.exports = () => ({
  dir: {
    input: DOCS_SRC_DIR,
    output: DOCS_BUILD_DIR
  }
})
