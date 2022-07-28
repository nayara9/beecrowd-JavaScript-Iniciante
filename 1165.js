let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(item=>parseInt(item));


for(let i=1; i<lines.length; i++) {
    let contador = 1
    for(let j=1; j< lines[i]; j++) {
       
        if(lines[i]%j!==0) {
            contador++
        }    
    }

if(contador==lines[i]-1) {

    console.log(`${lines[i]} eh primo`)
} else {
 
    console.log(`${lines[i]} nao eh primo`)
}

}