// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?


const index = 13;
let sum = 0, key = 0;

while (key < index) {
    key += 1;
    sum += key;
}

console.log(sum)

// RESPOSTA: 91