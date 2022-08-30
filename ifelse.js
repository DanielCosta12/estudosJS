function numeroPositivo(num){
    const EHNEGATIVO = num < 0;
    const EHPOSITIVO = num >10;

    if(EHNEGATIVO) {
        
        return"Esse numero é negativo"

    }else if(!EHNEGATIVO&&EHPOSITIVO) {
        return "Esse número é positivo e maior que 10"

    }

    return "Esse número é positivo!"
}

console.log(numeroPositivo(6));
console.log(numeroPositivo(-20));
console.log(numeroPositivo(400));