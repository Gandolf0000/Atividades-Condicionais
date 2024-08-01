var valor = Math.random()*100

if(valor < 50){
    console.log("Insuficiente.")
} else if(valor <= 50 && valor < 70){
    console.log("Suficiente.")
} else if(valor <= 70 && valor < 90){
    console.log("Bom.")
} else{
    console.log("Excelente.")
}