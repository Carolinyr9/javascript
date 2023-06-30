// pegar as teclas
const keys = document.querySelectorAll(".key")


// tocar notas
function playNote(event){
    // key code
    let audioKeyCode = getKeyCode(event)

    // type or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    console.log(key)

    // if key exist
    const cantFoundKey = !key

    if(cantFoundKey){
        return;
    }

    addPlayingClass(key)
    playAudio(audioKeyCode)
}

function addPlayingClass(key){
    key.classList.add('playing')
}

function getKeyCode(event){
    let keyCode;

    const isKeyBoard = event.type === "keydown"
    if(isKeyBoard){
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}


function playAudio(audioKeyCode){
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function removePlayingClass(event){
    event.target.classList.remove("playing")
}

function registerEvents(){
// clicar com o mouse
keys.forEach( function(key){
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
})

// usar o teclado
window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)
