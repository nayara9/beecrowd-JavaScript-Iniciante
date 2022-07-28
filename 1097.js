let contador = 2;
let j = 7;

for(let i = 1; i<=9; i++) {
    for(j ; contador>=0; j--) {  
        contador -- 
    console.log(`I=${i} J=${j}`);   
    }    
    contador+=3;
    i++;
    j+=5;
}