// 1ª forma
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


// 2ª forma
function numeroPositivo2(num){
    let resultado;
    const EHNEGATIVO = num < 0;

    if(EHNEGATIVO){
        resultado = false;
    }else{
        resultado = true;
    }
    return resultado;
}
console.log(`o resultado é: ${numeroPositivo2(22)}`);
console.log(`o resultado é: ${numeroPositivo2(-2)}`);


// 3ªforma

function numeroPositivo3(num){
    const EHNEGATIVO2 = num < 0;

    if (EHNEGATIVO2) {
        return false;
    }
    return true;
}
console.log(`o resultado é: ${numeroPositivo3(-2)}`);
console.log(`o resultado é: ${numeroPositivo3(10)}`);
