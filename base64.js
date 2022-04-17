const fs = require("fs")

let _add = fs.readFileSync("_add.txt", "utf8")
let _rules = fs.readFileSync(".rules", "utf8") + '\n' + _add

let _new = Array.from(new Set(_rules.split("\n").map(e => e.trim().split(' ').map(e => e.replace(/^(\*\.)/, '||')).filter(e => e.startsWith('||')).join('\n')).join('\n').split('\n'))).filter(e => e !== "").sort().join("\n")
let list = ("[AutoProxy]\n" + _new).split("\n").map(e => btoa(e)).join("\n")

fs.writeFile(".rules", _rules, function (err) {
  if (err) throw err
  console.log(".rules updated!")
})

fs.writeFile("list.txt", list, function (err) {
  if (err) throw err
  console.log("list.txt updated!")
})

fs.writeFile("_add.txt", "", function (err) {
  if (err) throw err
  console.log("_add.txt Cleaned!")
})
