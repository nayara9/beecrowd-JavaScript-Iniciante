let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(' ')

let cardapio = {
  1: 4.0,
  2: 4.5,
  3: 5.0,
  4: 2.0,
  5: 1.5,
};

let valorPago = cardapio[lines[0]] * parseInt(lines[1]);

console.log(`Total: R$ ${valorPago.toFixed(2)}`);