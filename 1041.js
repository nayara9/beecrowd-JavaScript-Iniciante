let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(' ');

if (parseFloat(lines[0]) > 0 && parseFloat(lines[1]) > 0) {
  console.log("Q1");
}
if (parseFloat(lines[0]) < 0 && parseFloat(lines[1]) > 0) {
  console.log("Q2");
}
if (parseFloat(lines[0]) < 0 && parseFloat(lines[1]) < 0) {
  console.log("Q3");
}
if (parseFloat(lines[0]) > 0 && parseFloat(lines[1]) < 0) {
  console.log("Q4");
}
if (parseFloat(lines[0]) === 0 && parseFloat(lines[1]) === 0) {
  console.log("Origem");
}
if (parseFloat(lines[0]) === 0 && parseFloat(lines[1]) !== 0) {
  console.log("Eixo Y");
}
if (parseFloat(lines[0]) !== 0 && parseFloat(lines[1]) === 0) {
  console.log("Eixo X");
}