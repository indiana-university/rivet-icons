const { DOCS_DIR, SRC_DIR } = require('./constants.js')

module.exports = () => ({
  dir: {
    input: SRC_DIR,
    output: DOCS_DIR
  }
})
