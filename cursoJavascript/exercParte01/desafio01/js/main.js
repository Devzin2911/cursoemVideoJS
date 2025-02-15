
function carregar() {
    var msg = document.querySelector('.conteudo01')
    var imagem = document.querySelector('.imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        // bom Dia
        imagem.src = './img/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde
        imagem.src = './img/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // Boa Noite
        imagem.src = './img/noite.jpg'
        document.body.style.background = '#50555d'
    }
}
