let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split("\n").map(item=>parseInt(item))

for(let i = 1; i<=lines[0]; i++) {
    
    let soma = 0;
    

    for(let j=0; j<lines[i]; j++) {
        
        
        if(lines[i]%j===0) {
        soma+=j
        } 
    }
    if(soma==lines[i]) {
        console.log(`${lines[i]} eh perfeito`)
    } else {
        console.log(`${lines[i]} nao eh perfeito`)
    }
}