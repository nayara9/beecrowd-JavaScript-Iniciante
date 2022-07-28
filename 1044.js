var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ')

if (parseInt(lines[0]) > parseInt(lines[1])) {
  if (parseInt(lines[0]) % parseInt(lines[1]) === 0) {
    console.log("Sao Multiplos");
  }
  if (parseInt(lines[0]) % parseInt(lines[1]) !== 0) {
    console.log("Nao sao Multiplos");
  }
} else {
  if (parseInt(lines[1]) % parseInt(lines[0]) === 0) {
    console.log("Sao Multiplos");
  }
  if (parseInt(lines[1]) % parseInt(lines[0]) !== 0) {
    console.log("Nao sao Multiplos");
  }
}