const readline = require("readline");
const terminal = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});

terminal.question("Escolha um número.", function (valor) {
    var valor = Number(valor);

   if(valor % 2 == 0){
    console.log("Par.");
   } else{
    console.log("Ímpar.");
   }

    terminal.close();
});