var func = require('./funcao')
var readlineSync = require('readline-sync'); 

console.log("programa para verificar idade valida de trabalho\n")
console.log("================================================\n")

var idade = readlineSync.question("Digite sua idade");

func.idadeValida(idade)
