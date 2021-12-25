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
    if (valores.length == 0) {
        window.alert('Precisa digitar um valor')
    }else{
        let tot = valores.length
        res.innerHTML = `<p> Você selecionou ${tot} </p>`
        let min = valores[0]
        let max = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
           
            if (valores[pos] > max) {
                max = valores[pos]            
            }
            if (valores[pos] < min) {
                min = valores[pos]
            }
            let valor = valores[pos] += valores[pos]
        }
    media = soma / tot
    res.innerHTML += `<p>O maior valor foi ${max} </p>`
    res.innerHTML += `<p>O menor valor foi ${min} </p>`
    res.innerHTML += `<p>A soma de todos os valores é ${soma} </p> `
    res.innerHTML += `<p>A medias dos valores é ${media} </p> `
    }
}

/*res.innerHTML = `<p>Você selecionou ${valores.length}</p>`
    var min = Math.min.apply(valores)
    res.innerHTML += `O valor mínimo foi ${Number(min.value)} `
    */