var num = window.document.querySelector('input#txtnumber')
var lista = window.document.querySelector('select#list')
var res = window.document.querySelector('div#res')
let valores = []


function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}


function adicionar() {
    if (isnumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `O valor escolhido foi ${num.value} `
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('os números tem que ser entre 0 e 100, e não pode repitir')
    }
    num.value = ''
    num.focus()
}

function concluir(params) {
    res.innerHTML = `<p>Você selecionou ${valores.length}</p>`
    var min = Math.min.apply(valores)
    res.innerHTML += `O valor mínimo foi ${Number(min.value)} `
    
}