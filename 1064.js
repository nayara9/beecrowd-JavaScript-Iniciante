let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n').map(item => parseFloat(item));

let contador = 0;
let soma = 0;

for(let i = 0; i<lines.length ; i++) {  
       if(lines[i]>=0) {
        contador++;
        soma = soma + parseFloat(lines[i])
    }
}

let media = (soma/contador).toFixed(1);
console.log(`${contador} valores positivos
${media}`);
