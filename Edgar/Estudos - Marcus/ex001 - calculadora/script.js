const memoriaNum = []
const visor = document.querySelector('input#visor')

let novoNum = true
let numeroAntigo
let operadorSelect
let contaFeita
let decimal


function inserirNum(num) {
   if(novoNum){
        visor.value = num
        novoNum = false
   } else{
       visor.value += num
   }
}

function operacaoPendente() {
   return operadorSelect != undefined

}

function calcular(){
    if (operacaoPendente()){
        const numeroAtual = parseFloat(visor.value.replace(',','.'))
        novoNum = true
        if(operadorSelect == '+'){
            visor.value = (numeroAntigo + numeroAtual).toLocaleString('BR')
        }else if(operadorSelect == '-'){
            visor.value = (numeroAntigo - numeroAtual).toLocaleString('BR')
        }else if(operadorSelect == '*'){
            visor.value = (numeroAntigo * numeroAtual).toLocaleString('BR')
        }else if(operadorSelect == '/'){
            visor.value = (numeroAntigo / numeroAtual).toLocaleString('BR')
        }
        
    }else {
        
    }
}
function inserirMetodo(operador){
    if(!novoNum){
        calcular()
        novoNum = true
        numeroAntigo = parseFloat(visor.value.replace(',','.'))
        operadorSelect = operador
    }
    
}
function inserirRes(){
    calcular()
    operadorSelect = undefined
}

function limpar(){
    numeroAntigo = 0
    numeroAtual = 0
    visor.value = ''
    operadorSelect = undefined
}
function apagarUm(){
    let apaga = visor.value
    visor.value = apaga.slice(0, -1)
    
}

function existePonto(){
   return visor.value.indexOf(',') !== -1
}
function existeValor(){
   return visor.value.length > 0
}

function inserirDecimal(ponto){
    if(!existePonto()){
        if(existeValor()){
            visor.value += ','
        }else{
            visor.value = '0,'
            novoNum = false
        }
    }

}

/* memoriaNum.unshift(visor.value)
    visor.value = ''
    
    if(acao == '+'){
        let num1 = memoriaNum[1]
        let num0 = memoriaNum[0]
        let resultado = parseFloat(num1) + parseFloat(num0)
        visor.value = resultado   
       
        
    }else if (acao == '-'){
        let num1 = memoriaNum[1]
        let num0 = memoriaNum[0]
        let resultado = parseFloat(num1) - parseFloat(num0)
        visor.value = resultado   
       
        
    }else if (acao == '*'){
        let num1 = memoriaNum[1]
        let num0 = memoriaNum[0]
        let resultado = parseFloat(num1) * parseFloat(num0)
        visor.value = resultado   
       
        
    }else if(acao == '/'){
        let num1 = memoriaNum[1]
        let num0 = memoriaNum[0]
        let resultado = parseFloat(num1) / parseFloat(num0)
        visor.value = resultado   
               
    }else{

    }
    //memoriaNum.unshift(visor.value)
    console.log(memoriaNum)
}
*/