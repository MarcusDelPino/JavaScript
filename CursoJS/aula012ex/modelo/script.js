var msg = window.document.querySelector('div#msg')
var img = window.document.querySelector('img#foto')
var atualiza = window.document.getElementById('carr')

function aparecer(params) {
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
if (hora > 0 && hora < 12) {
    //bom dia
    img.src = 'img/dia.png'
    atualiza.style.background = 'blue'
} else if (hora > 13 && hora < 18) {
    //boa tarde
    img.src = 'img/tarde.png'
    atualiza.style.background = '#f0a278'
} else {
    img.src = 'img/noite.png'
    atualiza.style.background = 'lightgray'
}
}