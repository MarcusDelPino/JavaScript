var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} agora`)
if (hora >= 6 && hora < 13){
    console.log(`Bom Dia o sol já nesceu lá na fazendinha `)
} else if ( hora >= 13 && hora < 18){
    console.log('Boa Tarde')
} else {
    console.log('Boa noite')
}