let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(item=>parseInt(item));

let contador=0
for(let i=0; i<lines.length; i++) {
    for(let j=1; j<= lines[i]; j++) {
        
        if(lines[i]%j!==0) {
            contador++
        } 
        else {
            
        }

}


}
console.log(`${lines[i]} eh primo`)