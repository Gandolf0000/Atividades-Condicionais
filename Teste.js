const readline = require("readline");

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function autenticarUsuario() {
  terminal.question("Escolha o seu nome: ", function (nome) {
    terminal.question("Escolha a sua senha: ", function (senha) {

      const usuario = { nome, senha };
      solicitarNomeESenha(usuario);
    });
  });
}

function solicitarNomeESenha(usuario) {
  terminal.question("Qual o seu nome? ", function (entradaNome) {
    terminal.question("Qual a sua senha? ", function (entradaSenha) {
      if (verificarCredenciais(entradaNome, entradaSenha, usuario)) {
        console.log(`Bem-vindo, ${usuario.nome}! Entrou na sua conta.`);
        terminal.close();
      } else {
        console.log("Nome ou senha errados. Tente novamente.");
        solicitarNomeESenha(usuario); 
      }
    });
  });
}

function verificarCredenciais(nome, senha, usuario) {
  return nome === usuario.nome && senha === usuario.senha;
}

autenticarUsuario();
