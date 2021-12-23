var inicio = window.document.querySelector('input#txtnumber')
var res = window.document.querySelector('div#res')
var btn = window.document.querySelector('input#btn')
btn.addEventListener('click', clicar)

function clicar(params) {
    var n1 = Number(inicio.value)
    res.innerHTML = ` ${n1} `
}