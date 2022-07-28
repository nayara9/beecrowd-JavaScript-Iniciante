let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split("\n")


for(let i=1; i<=lines[0]; i++) {
    let[x,y] = lines[i].split(" ").map(item=>parseInt(item));

    let contador =0
    let soma = 0
    for(let j=x; contador<y; j++) {
     
        if(j%2!==0) {
            soma+=j
            contador++
        }      
    }  
console.log(soma)
}

