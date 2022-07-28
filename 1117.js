let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split("\n").map(item=>parseFloat(item));

let contador=1;
let nota = 0;

for(let i=0; i<lines.length; i++) {

    if (lines[i]>=0 && lines[i]<=10) {
        
        nota+=lines[i];
        if(contador>=2) {
            break;
        }
        contador++;
    } else {
        console.log("nota invalida");
          
    }
}
let media = (nota/contador).toFixed(2);
console.log(`media = ${media}`)