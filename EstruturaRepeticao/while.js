let resultadoDado;
let lancamentos = 0;

while (resultadoDado !== 6) {
resultadoDado = Math. floor(Math.random() * 6) + 1;
lancamentos++;
console. log(`Lancamento ${lancamentos}: Resultado do dado: ${resultadoDado}`);

}

console. log( `Finalmente! 0 número 6 foi obtido após ${lancamentos} lançamentos. `);