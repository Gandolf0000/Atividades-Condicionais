var moeda = "libra"
var valor = 20
var valora

switch(moeda){
    case "dolar":
    valora = valor * 0.18
    break;
    case "libra":
    valora = valor * 0.14
    break;
    case "euro":
    valora = valor * 0.16
    break;

    default:
    console.log("Moeda não reconhecida.")
    valor = null
}

console.log(valora)