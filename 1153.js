let input = require('fs').readFileSync('stdin', 'utf8');
let lines = parseInt(input)

let fatorial=1;

for(let i=lines; i>=1; i--) {
    fatorial=fatorial*i;
}
console.log(fatorial);