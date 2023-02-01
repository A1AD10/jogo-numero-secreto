const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    //Math.random() gera número pseudo-aleatório no intervalo [0,1], incluindo 0 e excluindo 1
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número secreto:', numeroSecreto);

// insere no id menor-valor [0] o valor da const menorValor
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

// insere no id maior-valor [100] o valor da const maiorValor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor
