let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ');

if (parseFloat(lines) >= 0 && parseFloat(lines) <= 25) {
  console.log("Intervalo [0,25]");
}
if (parseFloat(lines) > 25 && parseFloat(lines) <= 50) {
  console.log("Intervalo (25,50]");
}
if (parseFloat(lines) > 50 && parseFloat(lines) <= 75) {
  console.log("Intervalo (50,75]");
}
if (parseFloat(lines) > 75 && parseFloat(lines) <= 100) {
  console.log("Intervalo (75,100]");
}
if (parseFloat(lines) > 100 || parseFloat(lines) < 0) {
  console.log("Fora de intervalo");
}
