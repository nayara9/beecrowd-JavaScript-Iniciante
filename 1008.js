var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines.shift());
var horas = parseInt(lines.shift());
var preco = parseFloat(lines.shift());

var salario = horas * preco;

console.log("NUMBER = " + numero); 
console.log("SALARY = U$ " + salario.toFixed(2));

