let input = require('fs').readFileSync('stdin', 'utf8');
let lines = parseInt(input);

let seqQuad;
let seqCubo;

for(let i =1; i<=lines; i++) {

    let quadrado = Math.pow(i,2);
    let cubo = Math.pow(i,3);

    seqQuad+=quadrado;
    seqCubo+=cubo;

    console.log(`${i} ${quadrado} ${cubo}`);

    for(let j=1; j<=1; j++){
        let quadrado1 = quadrado + 1;
        let cubo1 = cubo + 1;
        console.log(`${i} ${quadrado1} ${cubo1}`);
    }
}