const fs = require("fs")

let _add = fs.readFileSync("_add.txt", "utf8")
let _list = fs.readFileSync("list.txt", "utf8")
let list = new Array("[AutoProxy]").concat(_list.split("\n").map(e => atob(e)).slice(1).concat(Array.from(new Set(_add.split("\n").map(e => e.trim().split(' ').map(e => e.replace(/^(\*\.)/, '||')).filter(e => e.startsWith('||'))))).filter(e => e !== "")).sort().filter(e => e.length)).map(e => btoa(e)).join("\n")

fs.writeFile("list.txt", list, function (err) {
  if (err) throw err
  console.log("list.txt updated!")
})
fs.writeFile("_add.txt", "", function (err) {
  if (err) throw err
  console.log("_add.txt Cleaned!")
})