function ehPrimo(num){
    let naoEhPrimo;
    let ehPrimo;

    for(let i = 2; i < num; i++){
        if((num % i) === 0){
            naoEhPrimo = true;
            ehPrimo = 0;
        }
        else{
            naoEhPrimo = false;
            ehPrimo = num;
        }
    }
    return ehPrimo;

}

let primo;
let maiorPrimo;

for(let i = 1; i < 50; i++){
    primo = ehPrimo(i)
    maiorPrimo = primo;
}

console.log(maiorPrimo);

