let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(item=>parseFloat(item))

let contador=0;

let nota =0
for(let i=0; i<lines.length; i++) {
   
    if(contador==2) {
        console.log("novo calculo (1-sim 2-nao)")
    
        if(lines[i]==1) {  
            contador=0
            continue;
        }
        if(lines[i]===2) {
          
            break;
        }
        else {
            continue;
        }     
    }
    
    if (lines[i]<0 || lines[i]>10) {
        
        console.log("nota invalida")   
    }
    if(lines[i]>=0 && lines[i]<=10) {
    
        nota+=lines[i]
        contador++
        if(contador==2) {
           
            let media = nota/parseInt(contador)
            console.log(`media = ${media.toFixed(2)}`)
            
            nota=0  
        }
    }
}