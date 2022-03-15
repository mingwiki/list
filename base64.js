let fs = require('fs');

let rules = fs.readFileSync('rules', 'utf8')
let str = "[autoproxy] \n " + rules

fs.writeFile('list.txt', btoa(str), function (err) {
  if (err) throw err;
  console.log('File updated!');
});
