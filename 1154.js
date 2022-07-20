let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(item=>parseInt(item))

let contador=0
let soma=0

for(let i=0; i<lines.length;i++) {
    if(lines[i]<=0) {
        break
    } else {
    soma+=lines[i]
    contador++
    }
}
let media = (parseInt(soma)/parseInt(contador)).toFixed(2)
console.log(media)