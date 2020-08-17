const pkg = require('./package.json')
const node = require('./src/node')

module.exports = (package, search) => {
  switch (package) {
    case 'node':
      return node(search)
    default:
      throw new Error(`Unknown project ${package}.
If you want this package to be added, please open an issue or a PR with the implementation: ${pkg.bugs.url}
        `)
  }
}
