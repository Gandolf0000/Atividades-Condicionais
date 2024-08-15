const readline = require("readline");
const terminal = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});

terminal.question("Qual é a sua idade?", function (valor) {
    var idade = Number(valor);

    if(idade < 18){
        console.log("Menor de idade.");
    } else if(idade >= 18 && idade < 60){
        console.log("Adulto.");
    } else{
        console.log("Idoso.");
    }

    terminal.close();
});