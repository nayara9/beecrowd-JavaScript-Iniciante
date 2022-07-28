var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var aniversario = parseInt(lines);

var ano = parseInt(aniversario / 365);
aniversario = aniversario % 365;

var mes = parseInt(aniversario / 30);
aniversario = aniversario % 30;

console.log(
  ano + " ano(s)" + "\n" + mes + " mes(es)" + "\n" + aniversario + " dia(s)"
)