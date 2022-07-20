let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(" ").map(item => parseInt(item));

let linesCopy = [...lines];

lines.sort((a, b) => a - b);
for (let u of lines) {
  let numero = u;
  console.log(numero);
}
console.log("");

for (let i of linesCopy) {
  let num = i;
  console.log(num);
}