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

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} de números cadastrados </p>`
    }
}