let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(' ')

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);

if (Math.abs(B - C) < A && A < B + C) {
  let perimetro = A + B + C;
  console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
  let area = ((A + B) * C) / 2;
  console.log(`Area = ${area.toFixed(1)}`);
}
