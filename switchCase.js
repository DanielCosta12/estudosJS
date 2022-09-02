function getAnimal(id){
    switch(id){
        case 1: return "cão";
        case 2: return "gato";
        case 3: return "cobra";
        default: return "Adicione o id certo de 1 até 3";
    }
}

console.log(getAnimal(3));
console.log(getAnimal(1));
console.log(getAnimal(2));
console.log(getAnimal(84));

// -equivale a uma comparação de tipo e valor (===);
// -sempre precisa de um valor "default";
// -Ideal para quando se precisa comprar muitos valores;