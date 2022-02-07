const memoriaNum = []
const visor = document.querySelector('input#visor')

let novoNum = true
let numeroAntigo
let numeroAtual
let operadorCalc

function inserirNum(num) {
   if(novoNum){
        visor.value = num
        novoNum = false
   } else{
       visor.value += num
   }
}
function inserirMetodo(operadorUsado){
    if(!novoNum){
        novoNum = true
        numeroAntigo = parseFloat(visor.value)
        calcular()
        console.log(operadorUsado)
        console.log(numeroAntigo)
    }
}
function operacaoPendente(){
    operadorUsado != undefined
}

function calcular(){
    if(operacaoPendente()){
        numeroAtual = parseFloat(visor.value)
        if (operadorUsado == '+'){
            visor.value = numeroAntigo + numeroAtual
            novoNum = true
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