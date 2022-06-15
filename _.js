const fs = require("fs")

const _add = fs.readFileSync("_add.txt", "utf8")
const _delete = fs.readFileSync("_delete.txt", "utf8")
const _list = Buffer.from(fs.readFileSync("index", 'utf8'), "base64").toString('utf8')
const list = ["[AutoProxy]"].concat([...new Set(_list.split("\n").slice(1).concat([...new Set(_add.split("\n").map(e => e.trim().split(' ').map(e => e.replace(/^(\*\.)/, '||')).filter(e => e.startsWith('||')).join("\n")).join("\n").split('\n'))].filter(e => e !== "")).sort().filter(x => x.length && !(_delete.split("\n").map(e => e.trim().split(' ').filter(e => e.startsWith('||')).join("\n")).join("\n").split('\n').includes(x))))]).join("\n")

fs.writeFile("index", Buffer.from(list, 'utf8').toString('base64'), function (err) {
  if (err) throw err
  console.log("index.html updated!")
})
fs.writeFile("_add.txt", "", function (err) {
  if (err) throw err
  console.log("_add.txt Cleaned!")
})
fs.writeFile("_delete.txt", "", function (err) {
  if (err) throw err
  console.log("_delete.txt Cleaned!")
})
