let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let num = lines.length

for (let i=0; i<num; i++) {
    
    let [x,y] = lines[i].split(" ").map(item=>parseInt(item));
    if(x <= 0 || y<= 0) {
        break;
    }
    if (x>=y) {
        let string2 = "";
        let j;
        let soma1= 0;
        
        for(j=y; j<=x; j++) {
            if(j==y) {
                string2+=j;
            }
            else {
                string2=string2 + " " + j;
            }
            soma1+=j;
            
        }
        console.log(`${string2} Sum=${soma1}`);
    }
    if(x<y) {
        let k;
        let soma2=0;
        let string1="";
        for(k=x; k<=y;k++) {
            if(k==x) {
                string1+=k   
            }
            else {
                string1=string1 + " " + k
            }
            soma2+=k
        }
        console.log(`${string1} Sum=${soma2}`)
   }    
}