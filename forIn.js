function forInExemplo(obj){
    for(prop in obj){
        console.log(prop);
    }
}
const MEUOBJETO ={
    nome: "Daniel",
    idade: "22",
    cidade: "Rio de Janeiro"
}
forInExemplo(MEUOBJETO);

function forInExemplo2(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}

const MEUOBJETO2 ={
    nome: "Daniel",
    idade: "22",
    cidade: "Rio de Janeiro"
}

forInExemplo2(MEUOBJETO2);