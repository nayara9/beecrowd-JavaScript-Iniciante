let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ');

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);

let delta = Math.pow(b, 2) - 4 * a * c;
let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

if (delta < 0 || a === 0) {
  console.log("Impossivel calcular");
} else {
  console.log(`R1 = ${raiz1.toFixed(5)}\nR2 = ${raiz2.toFixed(5)}`);
}