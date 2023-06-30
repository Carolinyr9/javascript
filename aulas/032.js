// Velocidade máxima de até 70
// A cada 5km acima você ganha um ponto
// Math.Floor()
// caso os pontos sejam maior que 12 a carteira é suspendida

verificarVelocidade(80)

function verificarVelocidade(velocidade){
    const velocidadeMax = 70
    const kmPontos = 5;

    if(velocidade <= velocidadeMax){
        console.log('Ok')
    }

    else {
        const pontos = Math.floor(((velocidade - velocidadeMax) / kmPontos))

        if (pontos >= 12){
            console.log('Carteira suspensa')
        } 
        else {
            console.log('Pontos', pontos)
        }
    }
}