var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ').map(item => parseFloat(item));

lines.sort((a, b) => b-a)

if (lines[0]>=(lines[2]+lines[1])) {
    console.log("NAO FORMA TRIANGULO");
} else {
if ((Math.pow(lines[0],2)) === (Math.pow(lines[1],2)+Math.pow(lines[2],2))) {
    console.log("TRIANGULO RETANGULO");
}

if ((Math.pow(lines[0],2)) > (Math.pow(lines[1],2)+Math.pow(lines[2],2))) {
    console.log("TRIANGULO OBTUSANGULO");
}

if ((Math.pow(lines[0],2)) < (Math.pow(lines[1],2)+Math.pow(lines[2],2))) {
    console.log("TRIANGULO ACUTANGULO");
}

if (lines[0]===lines[1] && lines[1]===lines[2]) {
    console.log("TRIANGULO EQUILATERO")
}

else if(lines[0]===lines[1] || lines[0]===lines[2] || lines[1]===lines[2]) {
    console.log("TRIANGULO ISOSCELES");
}
}