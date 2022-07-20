let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split("\n").map(item=>parseInt(item));

let soma=0;
let numero = lines[0];

if(lines[0]>lines[1]) {
    while(numero>lines[1]) {
       
        if(numero%2 !==0 && numero>lines[1]) {
            if(numero<lines[0] && numero>lines[1])  {
                soma += numero;
            }
            numero-=2;  
        } else  { 
            numero--;
        }  
    }
console.log(soma);
}

else if(lines[0]<lines[1]) {
    while(numero<lines[1]) {
        if(numero%2 !==0 && numero<lines[1]) {
            if(numero>lines[0] && numero<lines[1]) {
                soma += numero;
            }
        numero+=2;
        } else {
            numero++;
        }
    }
console.log(soma); 
}

else {
    soma = lines[0] - lines[1]
    console.log(soma)
}
