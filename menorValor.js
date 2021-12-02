
function menorIndice(array){
    let menorArray;
    let arrayAtual;
    let arrayFuturo;
    let arrayPassado;

    for(let i = 0; i < array.length; i++){
        if (array[i-1] === undefined){
            arrayAtual = array[i];
            arrayFuturo = array[i+1];

        }
        else if(array[i+1] === undefined){
            arrayAtual = array[i];
            arrayPassado =  array[i-1];
            arrayFuturo = array[i-2];

        }else{
            arrayAtual = array[i];
            arrayFuturo = array[i+1];
            arrayPassado = array[i-1];
        }
        
        if(arrayAtual < arrayFuturo && arrayAtual < arrayPassado){
            menorArray = i;
        }
    }
    return menorArray;
}

array = [2, 4, 6, 7, 10, 0, -3];

console.log(menorIndice(array))