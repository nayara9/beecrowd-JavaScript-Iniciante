let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let j;
let k;

for(let i = 1; i<= lines[0]; i++) {
    let[x,y] = lines[i].split(" ").map(item=>parseInt(item));

    if(x<y) {
        let soma1=0;
        for(j=x+1; j<y; j++) {
           
            if(j%2!==0) {                
                soma1+=j;
            } 
        }   
        console.log(soma1);
    }
    else if(x>y)  {
        let soma2=0;
        for(k=y+1; k<x; k++) {

            if(k%2!==0) {
                soma2+=k;
            }
        }
        console.log(soma2);
    }
    else if(x=y) {
        let soma = x-y
        console.log(soma)
    }           
}