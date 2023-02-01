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
}

function exibeChuteNaTele(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

// quando a função acabar ela liga novamente o microfone
recognition.addEventListener('end', () => recognition.start())