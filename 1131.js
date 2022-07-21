let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n')

let contInter =0
let contGrem=0
let contador = 0
let contEmp=0
let vencedor

for(let j=1; j<lines.length; j+=2)
    if(lines[j]==1) {
        console.log(`Novo grenal (1-sim 2-nao)`)    
    }
    else {
        console.log(`Novo grenal (1-sim 2-nao)`)
        continue
}

for(let i=0; i<lines.length-1; i+=2) {
    let[x,y] = lines[i].split(" ").map(item=>parseInt(item))

    if(x>y) {
        contInter++
    } 
    if(x<y) {
        contGrem++
    }
    if(x===y) {
        contEmp++
    } 
    contador++
}
if(contInter<contGrem) {
    vencedor="Gremio venceu mais"
} 
if(contInter>contGrem) {
    vencedor="Inter venceu mais"
}
if(contInter==contGrem) {
    vencedor="Nao houve vencedor"
}
console.log(`${contador} grenais`)
console.log(`Inter:${contInter}`)
console.log(`Gremio:${contGrem}`)
console.log(`Empates:${contEmp}`)
console.log(`${vencedor}`)