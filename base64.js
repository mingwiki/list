const fs = require("fs")

let addRules = fs.readFileSync("_addRules.txt", "utf8")
let rules = fs.readFileSync(".rules", "utf8") + '\n' + addRules

let newRules = Array.from(new Set(rules.split("\n").map(e => e.trim().split(' ').map(e => e.replace(/^(\*\.)/, '||')).filter(e => e.startsWith('||')).join('\n')).join('\n').split('\n'))).filter(e => e !== "").sort().map(e => btoa(e)).join("\n")
let list = "[AutoProxy]\n" + newRules

fs.writeFile(".rules", atob(newRules), function (err) {
  if (err) throw err
  console.log(".rules updated!")
})

fs.writeFile("list.txt", list, function (err) {
  if (err) throw err
  console.log("list.txt updated!")
})

fs.writeFile("_addRules.txt", "", function (err) {
  if (err) throw err
  console.log("_addRules.txt Cleaned!")
})
