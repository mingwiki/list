const fs = require('fs');

let rules = fs.readFileSync('rules', 'utf8')
let sortedRules = Array.from(new Set(rules.split("\n").forEach(e => e.trim()).filter(e => e !== ''))).sort().join("\n")
let str = "[AutoProxy]\n" + sortedRules

fs.writeFile('rules', sortedRules, function (err) {
  if (err) throw err
  console.log('Rules updated!')
})

fs.writeFile('list.txt', btoa(str), function (err) {
  if (err) throw err
  console.log('List updated!')
})
