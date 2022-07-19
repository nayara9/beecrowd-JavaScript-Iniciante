var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nome = (lines.shift());
var salario = parseInt(lines.shift());
var vendas = parseFloat(lines.shift());

var comissao = 0.15*vendas;
var totalSalario = comissao + salario;

console.log("TOTAL = R$ " + totalSalario.toFixed(2));