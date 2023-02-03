const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTele(chute)
    verificaSeOChutePossuiValorValido(chute)
    finalizaComGameOver(chute)
}

function exibeChuteNaTele(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

function finalizaComGameOver(chute) {
    if(chute === 'game over') {
        document.body.innerHTML = `
            <h2>GAME OVER</h2>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</buttton>
        `
        document.body.style.backgroundColor = 'red'
    }
}

// quando a função acabar ela liga novamente o microfone
recognition.addEventListener('end', () => recognition.start())
