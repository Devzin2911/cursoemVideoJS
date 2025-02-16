function contar() {
    var inicio = document.getElementById('txt-inicio')
    var passo = document.getElementById('txt-passo')
    var fim = document.getElementById('txt-fim')
    var res = document.getElementById('conteudo02')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = `Contando...`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p<= 0) {
            window.alert('Passo invalido! Considerando passo igual a 1')
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `  ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `  ${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }

}