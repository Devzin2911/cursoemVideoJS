function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano_nasc')
    var conteudo = document.getElementById('conteudo02')


    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.jpeg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-f.jpg')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade >= 21 && idade < 50) {
                // Adulta
                img.setAttribute('src', 'foto-adulto-f.jpg')
            } else {
                //idosa
                img.setAttribute('src', 'foto-idosa-f.jpeg')
            }
        }
        conteudo.innerHTML = `Detectamos ${genero} com ${idade} anos`
        conteudo.appendChild(img)
    }
}