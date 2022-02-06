const memoriaNum = []
const visor = document.querySelector('input#visor')

function inserirNum(num) {
    
   return visor.value += num
}

function inserirMetodo(acao){
    memoriaNum.unshift(visor.value)
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
