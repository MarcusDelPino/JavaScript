var txt = window.document.querySelector('input#txt')
var btn = window.document.querySelector('input#btn')
var res = window.document.querySelector('div#res')

btn.addEventListener('click', clicar)

function clicar(params) {
var p1 = txt.value
res.innerHTML = `<p>Seu país é ${p1}</p>`
if (p1 == 'Brasil') {
    res.innerHTML += '<p>Você é Brasileiro</p>'
} else {
    res.innerHTML += "<p>Você é estrangeiro</p>"    
}

}
