var inicio = window.document.querySelector('input#txtnumber')
var termino = window.document.querySelector('input#txtnumber1')
var passo = window.document.querySelector('input#txtnumber2')
var res = window.document.querySelector('div#res')
var btn = window.document.querySelector('input#btn')
btn.addEventListener('click', clicar)

/*
function clicar(params) {
    var n1 = Number(inicio.value)
    res.innerHTML = ` ${n1} `
}*/
          
function clicar(params) {
        var n1 = Number(inicio.value)
        var n2 = Number(termino.value)
        var n3 = Number(passo.value)

        if (inicio.value.length == 0 || termino.value.length == 0 || passo.value.length == 0) {
            
            window.alert('Preencha os números')

        }else{
            res.innerHTML = ''
            
            for (var n4 = n1; n4 <= n2; n4 += n3){

                res.innerHTML += `${n4} \u{1F643}`

            }
        }
}