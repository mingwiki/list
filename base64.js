const fs = require('fs');

let rules = fs.readFileSync('rules', 'utf8')
let sortedRules = rules.split("\n").filter(e => e !== '' ).sort()
let str = "[AutoProxy]\n" + sortedRules

fs.writeFile('rules', sortedRules, function (err) {
  if (err) throw err;
  console.log('Rules updated!');
});

fs.writeFile('list.txt', btoa(str), function (err) {
  if (err) throw err;
  console.log('List updated!');
});
