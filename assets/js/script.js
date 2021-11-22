/* Jogo de adivinhar o número */

let numeroAleatorio = Math.floor(Math.random() * 50) +1

const campoPalpite = document.querySelector('.main__numPalpite')

const envioPalpite = document.querySelector('.main__enviarPalpite')

const palpites = document.querySelector('.main__palpites')

const ultimoResultado = document.querySelector('.main__ultimoResultado')

const baixoOuAlto = document.querySelector('.main__menosOuMais')

const hack = document.querySelector('.active-hack')
console.log(hack)

const resultado = document.querySelector('.resultado')

hack.addEventListener('change', mostrarHack)

let contagemPalpites = 1
let botaoReinicio


function conferirPalpite() {
    // alert('Eu sou um placeholder')
    let palpiteUsuario = Number(campoPalpite.value);
    
    if (contagemPalpites === 1) {
        palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent += palpiteUsuario + ', ';

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.innerText = 'Parabéns! Você acertou!';
        ultimoResultado.style.backgroundColor = 'green';
        // ultimoResultado.style.TextAlign = 'center'
        baixoOuAlto.innerText = '';
        configFimDeJogo();
    } else if (contagemPalpites === 10) {
        ultimoResultado.innerText = '!!! FIM DE JOGO !!!';
        baixoOuAlto.innerText = '';
        configFimDeJogo();
    } else {
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.innerText = 'Seu palpite está baixo!';
        } else {
            baixoOuAlto.innerText = 'Seu Palpite está alto!';
        }
    }

    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
}

envioPalpite.addEventListener('click', conferirPalpite)

function configFimDeJogo() {
    campoPalpite.disabled = true
    envioPalpite.disabled = true
    botaoReinicio = document.createElement('button')
    botaoReinicio.textContent = 'Iniciar um novo jogo'
    document.body.appendChild(botaoReinicio)
    botaoReinicio.addEventListener('click', reiniciarJogo)
}

function reiniciarJogo() {
    contagemPalpites = 1

    let reiniciarParas = document.querySelectorAll('.main__resultados p')
    for (let i = 0 ; i < reiniciarParas.length ; i++){
        reiniciarParas[i].textContent = ''
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio)

    campoPalpite.disabled = false
    envioPalpite.disabled = false
    campoPalpite.value = ''
    campoPalpite.focus()

    ultimoResultado.style.backgroundColor = 'white'

    numeroAleatorio = Math.floor(Math.random() * 100) +1

    // resultado.textContent = numeroAleatorio
}

function mostrarHack() {
    const divHack = document.querySelector('.main__hack')
    if (hack.checked === true) {
        resultado.textContent = numeroAleatorio
        divHack.classList.add('main__hack--active')
    } else if (hack.checked === false) {
        resultado.textContent = '';
        divHack.classList.remove('main__hack--active')
    }
}