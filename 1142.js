let input = require('fs').readFileSync('stdin', 'utf8');
let lines = parseInt(input);

let contador=1

for(let i = 1; contador <= lines; i+=4) {
    let j = i+1
    for( j; contador<= lines; j+=4) {
        let k = j+1
         for(k; contador<=lines; k+=4) {
            console.log(`${i} ${j} ${k} PUM`)
            j+=4
            i+=4
            contador++
         }
    }
}