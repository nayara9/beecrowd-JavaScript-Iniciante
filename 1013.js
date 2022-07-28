var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ')

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());

var maiorAB = (a + b + Math.abs(a - b)) / 2;

if (maiorAB > c) {
  console.log(maiorAB + " eh o maior");
} else {
  console.log(c + " eh o maior");
}