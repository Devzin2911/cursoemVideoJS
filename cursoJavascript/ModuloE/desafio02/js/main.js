function gerarTabuada() {
    var num = document.getElementById('numero')
    let tab = document.getElementById('tabuada')
    

    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número')
    } else {
        var i = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${i} x ${c} = ${i * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
       }
    }
}