let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split("\n");

let contC = 0;
let contR = 0;
let contS = 0;

for(let i=1; i<lines.length; i++) {
   
    let [x,y] = lines[i].split(" ");
  
  
    if( y =="C" || y =="C\r" ) {
        
        contC += parseInt(x);
     
    }
    if (y =="R"|| y =="R\r") {
        contR += parseInt(x);
       
    }
    if (y=="S"|| y =="S\r") {
        contS += parseInt(x);
       
    }

}
let total = contC+contR+contS;
let percC = (contC/total)*100;
let percR = (contR/total)*100;
let percS = (contS/total)*100;

console.log(`Total: ${total} cobaias`)
console.log(`Total de coelhos: ${contC}`)
console.log(`Total de ratos: ${contR}`)
console.log(`Total de sapos: ${contS}`)
console.log(`Percentual de coelhos: ${percC.toFixed(2)} %`)
console.log(`Percentual de ratos: ${percR.toFixed(2)} %`)
console.log(`Percentual de sapos: ${percS.toFixed(2)} %`)