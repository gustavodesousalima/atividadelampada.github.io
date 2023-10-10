const botao = document.getElementById("botao")
const mario = document.querySelector('.mario');
const banana = document.querySelector('.banana');

function trocarImagem(elementImg, srcAtribute) {
    const imagem = document.getElementById(elementImg)
    imagem.setAttribute('src', srcAtribute)
}

function addClasseElemento(element, classeCSS) {
    const elemento = document.getElementsByTagName(element)

    for (let i = 0; i < elemento.length; i++) {
        elemento[i].classList.add(classeCSS)
    }
}

function removerClasseElemento(element, classeCSS) {
    const elemento = document.getElementsByTagName(element)
    for (let i = 0; i < elemento.length; i++) {
        elemento[i].classList.remove(classeCSS)

    }
}

botao.addEventListener('click', () => {

    const jaClicado = botao.getAttribute('data-jaClicado')

    if (jaClicado === "null" || jaClicado === "false") {
        botao.setAttribute('data-jaClicado', "true")
        trocarImagem("lampada", "./img/lampadaapagada.png")
        trocarImagem("botao", "./img/botaodesligar.png")
        removerClasseElemento("body", "corpo")
        addClasseElemento("body", "localEscuro")
    } else {
        botao.setAttribute('data-jaClicado', "false")
        trocarImagem("lampada", "./img/lampadaligada.png")
        trocarImagem("botao", "./img/botaoligar.png")
        removerClasseElemento("body", "localEscuro")
        addClasseElemento("body", "corpo")
    }

})

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 800);

}

const loop = setInterval(() => {

    const bananaPosition = banana.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (bananaPosition <= 20 && bananaPosition > 0 && marioPosition < 20) {
        banana.style.animation = 'none';
        banana.style.left = `${bananaPosition}px`;
        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = ''

        clearInterval(loop);
    }

}, 10);

document.getElementsByClassName("game")[0].addEventListener('click', jump);