let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines =parseFloat(input);

let imposto = ["Isento", 8, 18, 28]


if(lines>=0 && lines<=2000) {
    console.log(imposto[0]);
    }
if(lines>=2000.01 && lines<=3000) {
    salario = (lines - 2000)*(imposto[1]/100);
    console.log("R$ "+salario.toFixed(2));
}
if(lines>=3000 && lines<=4500) {
    salario = (lines - 3000)*(imposto[2]/100)+1000*(imposto[1]/100)
    console.log("R$ "+salario.toFixed(2));
}
if(lines>4500) {
    salario = (lines-4500)*(imposto[3]/100) +1000*(imposto[1]/100)+1500*(imposto[2]/100)
    console.log("R$ "+salario.toFixed(2));
}