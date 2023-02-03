function verificaSeOChutePossuiValorValido() {
    const numero = +chute // transforma string em numero inteiro

    if(chuteForInvalido(numero)) {  // verifica se é um número(valor numérico)
       elementoChute.innerHTML += '<div>Valor inválido</div>'
       return // para não fazer mais nada nesta função caso seja true
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return // para não fazer mais nada nesta função caso seja true
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</buttton>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-angles-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-angles-up"></i></div>`
    }

} 

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        // recarrega a página atual (Em JavaScript, "window" representa a janela aberta no navegador. Já "location", nessa linguagem, contém informações sobre a URL atual. Por último, "reload()" é usado para recarregar a página)
        window.location.reload()
    }
})

