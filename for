function multiplicaPorDois(arr){
    let valoresMultiplicados = [];
    for(let i = 0; i < arr.length; i++){
        valoresMultiplicados.push(arr[i]*2);
    }

    return valoresMultiplicados;
}
const MEUS_NUMEROS = [12,7,34,356,456,82,4];

console.log(multiplicaPorDois(MEUS_NUMEROS));