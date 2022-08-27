function numeroPositivo (num){

    let resultado ;
    if (num < 0){

        resultado = false;
    }else{
        resultado = true;
     
    }
    return resultado;
}
console.log(`o resultado é: ${numeroPositivo(10)}`);
console.log(`o resultado é: ${numeroPositivo(-50)}`);



