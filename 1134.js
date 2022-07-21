let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(item=>parseInt(item));

let alcool = 0;
let gasolina = 0;
let diesel = 0;

for (let i of lines) {
    if ( i === 1) {
        alcool = alcool + i;
    }
    else if (i === 2) {
        gasolina = gasolina + 1;
    }
    else if (i === 3) {
        diesel = diesel + 1;
    }
    else if ( i === 4) {
        break;
    }
   
}

console.log(`MUITO OBRIGADO
Alcool: ${alcool}
Gasolina: ${gasolina}
Diesel: ${diesel}`);