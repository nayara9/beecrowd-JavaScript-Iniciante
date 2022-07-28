let input = require('fs').readFileSync('stdin', 'utf8');
let lines = parseInt(input)

for(let i =1; i<=lines; i++) {

    let quadrado = Math.pow(i,2);
    let cubo = Math.pow(i,3);

    console.log(`${i} ${quadrado} ${cubo}`);
}
