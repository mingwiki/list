const fs = require("fs")

let _add = fs.readFileSync("_add.txt", "utf8")
let _delete = fs.readFileSync("_delete.txt", "utf8")
let _list = Buffer.from(fs.readFileSync("list.txt", 'utf8'), "base64").toString('utf8')
let list = new Array("[AutoProxy]").concat(_list.split("\n").slice(1).concat(Array.from(new Set(_add.split("\n").map(e => e.trim().split(' ').map(e => e.replace(/^(\*\.)/, '||')).filter(e => e.startsWith('||')).join("\n")).join("\n").split('\n'))).filter(e => e !== "")).sort().filter(e => e.length && !(_delete.split("\n").map(e => e.trim().split(' ').filter(e => e.startsWith('||')).join("\n")).join("\n").split('\n').includes(e)))).join("\n")

fs.writeFile("list.txt", Buffer.from(list, 'utf8').toString('base64'), function (err) {
  if (err) throw err
  console.log("list.txt updated!")
})
fs.writeFile("_add.txt", "", function (err) {
  if (err) throw err
  console.log("_add.txt Cleaned!")
})
fs.writeFile("_delete.txt", "", function (err) {
  if (err) throw err
  console.log("_delete.txt Cleaned!")
})