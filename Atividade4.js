const readline = require("readline");
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question("Escolha a sua senha: ", function (valor) {
        const senha = valor;    

    function solicitarsenha() {
        terminal.question("Qual a sua senha? ", function (valor) {
            const escolha = valor;
            if (escolha === senha) {
                console.log("Entrou na sua conta.");
                terminal.close();
            } else {
                console.log("Senha errada.");
                solicitarsenha();
            }
        });
    }
    solicitarsenha();
});
