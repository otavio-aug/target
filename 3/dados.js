// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const fs = require("fs");

const jsonData = fs.readFileSync("dados.json", "utf-8");
const data = JSON.parse(jsonData);

let totalIncome = 0;
let lowerRevenue = { value: 0, day: "" };
let higherRevenue = { value: 0, day: "" };
let workingDays = 0;
data.forEach((item, index) => {
    totalIncome += item.valor;
    if (item.valor < lowerRevenue.value || lowerRevenue.value === 0) {
        lowerRevenue.value = item.valor;
        lowerRevenue.day = item.dia;
    }

    if (item.valor > higherRevenue.value) {
        higherRevenue.value = item.valor;
        higherRevenue.day = item.dia;
    }

    if (item.valor > 0) { // dias com valor 0 não são dias úteis?
        workingDays += 1;
    }
});

const average = totalIncome / workingDays;
let upperAverage = 0;
data.forEach((item, index) => {
    if (item.valor > average) {
        upperAverage += 1;
    } 
});

console.log(`
O menor valor de faturamento ocorrido em um dia do mês: dia ${lowerRevenue.day}, faturados ${lowerRevenue.value} reais.
O maior valor de faturamento ocorrido em um dia do mês: dia ${higherRevenue.day}, faturados ${higherRevenue.value} reais.
Dias úteis: ${workingDays}. Média: ${average}.
Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${upperAverage}.
`);

// RESPOSTA:
// O menor valor de faturamento ocorrido em um dia do mês: dia 28, faturados 1718.1221 reais.
// O maior valor de faturamento ocorrido em um dia do mês: dia 16, faturados 48924.2448 reais.
// Dias úteis: 21. Média: 20865.370166666664.
// Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: 10.