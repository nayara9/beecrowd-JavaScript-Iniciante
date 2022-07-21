let j=1;
let soma;
let contador1 = 0;
for(let i = 0; i<2; i+=0.2) {
    for(let j=1; j<=3; j++)
    
        if(i!==0 && i!==1 && i!==2) {            
            soma = parseInt(j) + parseFloat(i.toFixed(1));

            console.log(`I=${parseFloat(i.toFixed(1))} J=${soma}`);
        }
        else{
            console.log(`I=${parseInt(i.toFixed(0))} J=${j+i}`);
        }
}