const estaNaAreaSegura = (posX, posY, areaSegura) => {
    return posX >= areaSegura.xMin &&
    posX <= areaSegura.xMax &&
    posY >= areaSegura.xMin &&
    posY <= areaSegura.xMax;
};

const areaSegura = {
    xMin: 10,
    xMax: 50,
    yMin: 20,
    yMax: 60
};

const posicaoJogador = {x: 36, y: 40};

const resultado = estaNaAreaSegura(posicaoJogador.x, posicaoJogador.y, areaSegura);
console.log("O jogador está na área segure:", resultado ? "Sim" : "Não");