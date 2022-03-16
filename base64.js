const fs = require("fs")

let addRules = fs.readFileSync("_addRules.txt", "utf8")
let rules = fs.readFileSync(".rules", "utf8")

let sortedAddRules = Array.from(new Set(addRules.split("\n").map(e => e.trim()).filter(e => e !== ""))).sort().join("\n")
let sortedRules = Array.from(new Set((rules + "\n" + sortedAddRules).split("\n").map(e => e.trim()).filter(e => e !== ""))).sort().join("\n")
let list = "[AutoProxy]\n" + sortedRules

fs.writeFile(".rules", sortedRules, function (err) {
  if (err) throw err
  console.log(".rules updated!")
})

fs.writeFile("list.txt", btoa(encodeURIComponent(list)), function (err) {
  if (err) throw err
  console.log("list.txt updated!")
})

fs.writeFile("_addRules.txt", "", function (err) {
  if (err) throw err
  console.log("_addRules.txt Cleaned!")
})
