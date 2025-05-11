// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const inputNumber = 3;

function isFibonacci(number) {
    let firstOperator = 0;
    let secondOperator = 1;

    while (secondOperator < number) {
        const tempNumber = secondOperator;
        secondOperator = firstOperator + secondOperator;
        firstOperator = tempNumber;
    }

    return secondOperator === number || number === 0; // 0 não retornaria true, uma vez que não executaria o while e o valor de secondOperator seria 1
}

if (isFibonacci(inputNumber)) {
    console.log(`${inputNumber} pertence.`);
    return true;
}

console.log(`${inputNumber} NÃO pertence.`);
