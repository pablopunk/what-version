const fetch = require('node-fetch')
const fetcher = (url) => fetch(url).then((r) => r.text())

const unwrapLinksAndDatesRegex = /<a\s.+?>(?<name>.*?)\/<\/a>\s+(?<date>.*?)\s+-/g

module.exports = async function node(search) {
  const html = await fetcher('https://nodejs.org/dist/')
  const lines = html.split('\n')
  const result = []

  for (const line of lines) {
    const match = unwrapLinksAndDatesRegex.exec(line)

    if (match) {
      result.push(match.groups)
    }
  }

  return result
    .map((r) => ({ ...r, date: new Date(r.date) }))
    .filter((r) => r.name.startsWith(search))
    .sort((a, b) => b.date - a.date)
    .map((r) => r.name)
}
