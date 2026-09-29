const opções = {
    pratoPrincipal: [
      "Frango grelhado",
      "Bife acebolado",
      "Strogonoff de Carne",
      "Peixe Assado",
      "Lasanha à Bolonhesa"
    ],
    acompanhamento: [
      "Arroz + Feijão + Salada",
      "Arroz Integral + Feijão Tropeiro",
      "Arroz + Purê de Batata",
      "Macarrão ao Alho e Óleo + Feijão"
    ],
    sobremesa: [
      "Fruta da estação",
      "Pudim de Leite",
      "Mousse de Maracujá",
      "Gelatina"
    ]
  };
  
  let ultimo_prato = "";
  let ultimo_acompanhamento = "";
  let ultima_sobremesa = "";
  
  function sortear_sem_repetir(lista, ultimoItem) {
    let sorteado = "";
    
    const i = Math.floor(Math.random() * lista.length);
    sorteado = lista[i];
  
    if (sorteado === ultimoItem) {
      const proximoIndice = (i + 1) % lista.length;
      sorteado = lista[proximoIndice];
    }
  
    return sorteado;
  }
  
  function organizarCardapio() {
    const novo_prato = sortear_sem_repetir(opções.pratoPrincipal, ultimo_prato);
    const novo_acompanhamento = sortear_sem_repetir(opções.acompanhamento, ultimo_acompanhamento);
    const nova_sobremesa = sortear_sem_repetir(opções.sobremesa, ultima_sobremesa);
  
    ultimo_prato = novo_prato;
    ultimo_acompanhamento = novo_acompanhamento;
    ultima_sobremesa = nova_sobremesa;
  
    document.getElementById("prato_princ").innerText = novo_prato;
    document.getElementById("acompanhamento").innerText = novo_acompanhamento;
    document.getElementById("sobremesa").innerText = nova_sobremesa;
  }
  
  document.getElementById("gerar").addEventListener("click", organizarCardapio);