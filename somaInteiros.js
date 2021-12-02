function somaInteiros(num){
    
    let soma = null;
    for(let i = 1; i <= num; i++){
        soma += i;
    }
    return soma;

}

let number = 5;

console.log(somaInteiros(number))