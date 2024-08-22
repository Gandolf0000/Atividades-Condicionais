var valorf
var valor1 = 10
var valor2 = 2
var operação = "divisão"

switch(operação){
    case "adição":
    valorf = valor1 + valor2
    break;
    case "subtração":
    valorf = valor1 - valor2
    break;
    case "multiplicação":
    valorf = valor1 * valor2
    break;
    case "divisão":
    valorf = valor1 / valor2
    break;
    default:
    console.log("Operação irreconhecível.")
}

console.log(valorf)