function verificar(params) {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 21) {
                
            }else if (idade < 50) {
                
            }else {

            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 10 && idade < 10) {
                //criança
            } else if (idade < 21) {
                
            }else if (idade < 50) {
                
            }else {
                
            }
        }
    }
    res.innerHTML = `Detectamos gênero ${gênero} com ${idade} de idade `
    res.style.textAlign = 'center'
    res.appendChild(img)

}