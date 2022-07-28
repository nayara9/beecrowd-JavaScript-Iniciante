let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ')

let valor = parseFloat(lines.shift());
let dinheiro = [100, 50, 20, 10, 5, 2];

console.log("NOTAS:");

for (let i of dinheiro) {
  let notas = parseInt(valor / i);
  console.log(`${notas} nota(s) de R$ ${i}.00`);
  valor = valor % i;
}

console.log("MOEDAS:");

let moedas = [1.0, 0.5, 0.25, 0.1, 0.05];

for (let u of moedas) {
  let quantidade = parseInt(valor / u);
  console.log(`${quantidade} moeda(s) de R$ ${u.toFixed(2)}`);
  valor = valor % u;
}

valor = (valor / 0.01).toFixed(0);
console.log(valor + " moeda(s) de R$ 0.01");

