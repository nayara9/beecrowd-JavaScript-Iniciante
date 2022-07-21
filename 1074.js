let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
  if (parseInt(lines[i]) !== 0) {
    if (parseInt(lines[i]) % 2 === 0 && parseInt(lines[i]) > 0) {
      console.log("EVEN POSITIVE");
    }
    if (parseInt(lines[i]) % 2 === 0 && parseInt(lines[i]) < 0) {
      console.log("EVEN NEGATIVE");
    }
    if (parseInt(lines[i]) % 2 !== 0 && parseInt(lines[i]) > 0) {
      console.log("ODD POSITIVE");
    }
    if (parseInt(lines[i]) % 2 !== 0 && parseInt(lines[i]) < 0) {
      console.log("ODD NEGATIVE");
    }
  } else {
    console.log("NULL");
  }
}
