let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split("\n").map(item=>parseInt(item))


for(let i=0; i<=lines.length; i++) {

    if(lines[i]==0) {
        break
    } 
  
    else {
        let contador =1 
        let soma = 0
        
        for(let j=lines[i]; contador<=5; j++) {
            
            if(j%2==0) {
              
                soma+=j
                contador++
            }      
           
        }  
        console.log(soma)
    }
}

