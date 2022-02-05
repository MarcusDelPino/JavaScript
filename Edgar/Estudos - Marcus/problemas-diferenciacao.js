 // formas diferentes de declarar uma função
const funcao1 = (param1) => { console.log('AF: o valor inserido é ' + param1)}

function funcao1Equivalente(param1) {
  console.log('F: o valor inserido é ' + param1);
}

funcao1("TESTANDO ARROW FUNCTION");
funcao1Equivalente("TESTANDO FUNCTION");

const minhaIdade = 2022 - 1998;

function verificaIdadeMaiorQue(verificarMaiorQue = null) {
  if(verificarMaiorQue == null) console.error("Voce deve preencher o parametro 'verificarMaiorQue'");
  console.log("Verificando se minha idade é maior que " + verificarMaiorQue);
  if( minhaIdade >= verificarMaiorQue ) {
    console.log("Minha idade de " + minhaIdade + " anos é maior ou igual que " + verificarMaiorQue + " anos.");
    return true;
  }

  console.log("Minha idade de " + minhaIdade + " anos é menor que " + verificarMaiorQue + " anos.");
  return false;
}

if( verificaIdadeMaiorQue(30) == true ) { // quando nao coloco verificadores, significa que estou esperando boolean
  console.log('A verificação de idade retornou true');
} else {
  console.log('A verificação de idade retornou false');
}


const varA = 10;
const varB = 20;

console.log( "O valor da variavel A: " + varA + " é maior que o da variável B: " + varB + "? = " + (varA > varB))


// Variáveis
// Let só fica disponível entre {}. Se for exposto globalmente, pode ser alterado posteriormente;
let varLet = '123' 

// Const só fica disponível entre {}. Não pode ser alterado
const varConst = '1234' 

// Var é issado para cima, como uma variável global, poderá gerar confusão e conflito de nomenclaturas. Evitar utilizar.
var varVar = '12345' 

// Tentando reproduzir o problema de var

let nome = "Marcus"; // Quando uma variável está fora de {} ele está em um contexto global

function exibirOutroNome() {
  console.log("\n\nExibindo nome:");
  let nome = "Josias"; // Esta é contexto isolado
  console.log(nome);
}

exibirOutroNome();
nome = "Paulo"
exibirOutroNome();