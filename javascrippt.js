//precisa pegar a maior palavra e retornar ela

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorArray;
let menorArray;
let arrayAtual;
let arrayFuturo;
let arrayPassado;

for(let index = 0; index < array.length; index++){
    
    
    if (array[index-1] === undefined){
        arrayAtual = array[index].length;
        arrayFuturo = array[index+1].length;

    }
    else if(array[index+1] === undefined){
        arrayAtual = array[index].length;
        arrayPassado =  array[index-1].length;
        arrayFuturo = array[index-2].length;

    }else{
        arrayAtual = array[index].length;
        arrayFuturo = array[index+1].length;
        arrayPassado = array[index-1].length;
    }
    
    if(arrayAtual > arrayFuturo && arrayAtual > arrayPassado){
        maiorArray = array[index];
    }  
    if(arrayAtual < arrayFuturo && arrayAtual < arrayPassado){
        menorArray = array[index];
    }  
        
}

console.log(maiorArray);
console.log(menorArray);


