var idade = window.document.querySelector('input#txtidade')
var res = window.document.querySelector('div#res')
var ver = window.document.querySelector('input#ver')
var qsexo = window.document.getElementsByName('radsex')
var img = document.createElement('img')
img.setAttribute('id', 'foto')


ver.addEventListener('click', clicar)

function clicar(params) {
    var data = new Date()
    var ano = data.getFullYear()
    var conta = ano - Number(idade.value)
    if (idade.value.length == 0 || Number(idade.value) > ano) {
        window.alert('Doidão?')
    } else{
        var genero = ''
        if (qsexo[0].checked) {
            genero = 'Masculino'
            if (conta > 0 && conta < 10) {
                img.setAttribute('src', 'bebeh.png')
            }else if (conta < 21) {
                img.setAttribute('src', 'jovemhomem.png')
            }else if (conta < 50) {
                img.setAttribute('src', 'adulto.png')
            }else{
                img.setAttribute('src', 'idoso.png')
            }
        }else if (qsexo[1].checked) {
            genero = 'Feminino'
            if (conta > 0 && conta < 10) {
                img.setAttribute('src', 'bebem.png')
            }else if (conta < 21) {
                img.setAttribute('src', 'jovemmulher.png')
            }else if (conta < 50) {
                img.setAttribute('src', 'adulta.png')
            }else{
                img.setAttribute('src', 'idosa.png')
            }
        }    
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos gênero: ${genero} de ${conta} anos de idade`
    res.appendChild(img)
}