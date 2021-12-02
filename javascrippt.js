//precisa pegar a maior palavra e retornar ela

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorArray;
let menorArray;

for(let index = 0; index < array.length; index++){
    let arrayAtual;
    let arrayFuturo;
    let arrayPassado;
    
    if (array[index-1] === undefined){
        arrayAtual = array[index].length;
        arrayFuturo = array[index+1].length;

    }
    else if(array[index+1] === undefined){
        arrayAtual = array[index].length;
        arrayPassado =  array[index-1].length;

    }else{
        arrayAtual = array[index].length;
        arrayFuturo = array[index+1].length;
        arrayPassado = array[index-1].length;
    }
    
    if(arrayAtual > arrayFuturo && arrayAtual > arrayPassado){
        maiorArray = array[index];
    }   
        
}

console.log(maiorArray);

