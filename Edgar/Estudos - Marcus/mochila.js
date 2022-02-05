const mochilaMark = [];
const mochilaEd = [];
const armarioMarrom = [];

function novoItem(nome, tamanho, peso) { // esta função retorna um objeto que contém nome, tamanho e peso
  return {
    nome: nome,
    tamanho: tamanho,
    peso: peso
  };
}

function adicionarItem( item, qualContainer ) {
  qualContainer.push( item );
  return;
}

adicionarItem( novoItem( 'Espada', 3, 10 ), mochilaMark );
adicionarItem( novoItem( 'Banana', 1, 0.4 ), mochilaMark );
adicionarItem( novoItem( 'Lata', 1, 1 ), mochilaMark );
adicionarItem( novoItem( 'Faca', 2, 3 ), mochilaMark );

function verificarLimiteContainer(qualContainer, limiteTamanho, limitePeso) {
  let removerItensSlot = [];

  let totalTamanho = 0;
  let totalPeso = 0;
  for( let slot = 0; slot < qualContainer.length; slot++ ) {
    console.log("O item que estamos vendo é " + qualContainer[slot].nome + " que tem o tamanho " + qualContainer[slot].tamanho + " e o peso " + qualContainer[slot].peso);
    totalTamanho += qualContainer[slot].tamanho;
    totalPeso += qualContainer[slot].peso;

    let remover = false
    if(totalTamanho >= limiteTamanho) {
      console.error("O tamanho " + totalTamanho + " excede o limite de " + limiteTamanho);
      remover = true;
    }

    if(totalPeso >= limitePeso) {
      console.error("O peso " + totalPeso + " excede o limite de " + limitePeso);
      remover = true;
    }

    if( remover == true ) {
      removerItensSlot.push(slot);
    }
  }

  if(removerItensSlot.length > 0) {
    console.log("Os  itens que devem ser removidos para manter os limites propostos são:");

    for(let slot = 0; slot < removerItensSlot.length; slot++ ) {
      console.log(qualContainer[removerItensSlot[slot]].nome);
    }
  }
}

verificarLimiteContainer(mochilaMark, 5, 12.3);