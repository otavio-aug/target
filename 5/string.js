// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function reverseString(str) {
    const strArray = str.split("");
    const reversedArray = [];
    // nova lógica cedida por I.A, na minha lógica, utilizaria outro método ineficiente, percorrendo todo o array do inicio, e indo adicionando de acordo com o indice, esta lógica ficando bem mais clean e eficiente
    for (let i = strArray.length - 1; i >= 0; i--) {
        reversedArray.push(strArray[i]);
    }
    return reversedArray.join("");
}

console.log(reverseString("Que legal!"));

// RESPOSTA:
// !lagel euQ