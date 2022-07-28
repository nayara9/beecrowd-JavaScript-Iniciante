let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ').map(item=>parseInt(item));

let text=""

for(let i= 1; i<=lines[1]; i++) {


  
            text= text + i + " "  
  

}
console.log(text)
