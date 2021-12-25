let valores = [1,2,3,4,5,6]

//for (let pos = 0; pos<valores.length; pos++){
  //  console.log(`A posição ${pos} igual a ${valores[pos ]} `)
//}
let min = valores[0]
let maior =valores[0]
for (let pos in valores){
    if (valores[pos] > maior) {
        maior = valores[pos]
       
        
    }
}
console.log(`posição ${maior} `)