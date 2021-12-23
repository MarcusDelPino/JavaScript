var num = window.document.querySelector('input#txtnumber')
var btn = window.document.querySelector('input#btn')
var res = window.document.querySelector('div#res')
var txt = window.document.querySelector('select#tabuada')
btn.addEventListener('click', clicar)
function clicar(params) {

    var n1 = Number(num.value)
    var tb = 0
    if (num.value.length == 0) {

        alert('Coloque o número') 

    }else {
        txt.innerHTML = ' '
        while (tb <= 10) {
            var item = document.createElement('option')
            item.text = `${n1} X ${tb} = ${n1*tb}`
            txt.appendChild(item)

            tb++
        }
    }

}