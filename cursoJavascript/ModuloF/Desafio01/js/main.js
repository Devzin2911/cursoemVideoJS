let txtN = document.querySelector('input#txtN')
let listaN = document.querySelector('select#listaN')
let res = document.querySelector('div#conteudo02')
let valores = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function isInLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(txtN.value) && !isInLista(txtN.value, valores)) {
        valores.push(Number(txtN.value))
        let item = document.createElement('option')
        item.text = `Valor ${txtN.value} adicionado.`
        listaN.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    
    txtN.value = ''
    txtN.focus()
}




function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione variaves antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = valores[0]
        let media = 0
        for (let pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior) {
                    maior = valores[pos]
                }
                 if (valores[pos] < menor) {
                    menor = valores[pos]
                }
           media = soma / total     
        }
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} de números cadastrados </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`
    }
}