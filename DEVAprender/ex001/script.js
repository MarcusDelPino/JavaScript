let btn = window.document.querySelector('input#btn')

btn.addEventListener('click', clicar)

function clicar(params) {
    let resposta = window.prompt('qual a senha?')
    if (resposta == 'quero ver gol') {
        window.document.write('Show de bola')
    } else{
        alert('Errrrrou, ta pegando fogo bixo')
    }
}