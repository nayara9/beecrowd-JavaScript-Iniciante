let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ').map(item=>parseInt(item));

let text= ""

    for(let j=0; j<=lines[0]; j++) {
        
        for(let i= 1; i<=lines[1]; i++) {
            text+= i
            if(j=lines[0]) {
            text= text + " " + parseInt(i+j) 
            console.log(text)
            
            }
    }

    
}