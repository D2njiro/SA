listaCardapio = [
    { nome: "Frango Grelhado", preco: 20, estoque: 5 },
    { nome: "Carne Assada", preco: 25, estoque: 0 },
    { nome: "Peixe Frito", preco: 22, estoque: 3 },
    { nome: "Omelete", preco: 15, estoque: 10 }
];

listaPedidos = [];

function formatarPreco(valor) {
    return "R$ " + valor + ",00";
}

function buscarPrato(nomeProc) {
    achou = null;
    listaCardapio.forEach(function(item) {
        if (item.nome.toLowerCase() == nomeProc.toLowerCase()) {
            achou = item;
        }
    });
    return achou;
}

function validarPedido(prato, quantidade) {
    if (prato == null) {
        return "Prato não encontrado no cardápio!";
    }
    if (quantidade <= 0) {
        return "Digite uma quantidade válida!";
    }
    if (prato.estoque < quantidade) {
        return "Sem estoque suficiente para esse pedido!";
    }
    return "OK";
}

function calcularTotal(preco, quantidade) {
    total = preco * quantidade;
    if (total >= 50) {
        total = total - 10;
    }
    return total;
}

function gerarTextoCardapio(itens) {
    texto = "<ul>";
    itens.forEach(function(item) {
        texto = texto + "<li>" + item.nome + " - " + formatarPreco(item.preco) + "</li>";
    });
    texto = texto + "</ul>";
    return texto;
}

function mostrarCardapio() {
    areaMenu = document.getElementById("menu_opcoes");
    htmlCardapio = gerarTextoCardapio(listaCardapio);
    areaMenu.innerHTML = htmlCardapio;
}

function fazerPedido() {
    cliente = document.getElementById("nome_cliente").value;
    nomePrato = document.getElementById("prato_escolhido").value;
    quantidade = document.getElementById("qtd_prato").value;
    divResultado = document.getElementById("resultado");

    if (cliente == "" || nomePrato == "") {
        divResultado.innerHTML = "Por favor, preencha todos os campos!";
        return;
    }

    pratoEncontrado = buscarPrato(nomePrato);
    checagem = validarPedido(pratoEncontrado, quantidade);

    if (checagem != "OK") {
        divResultado.innerHTML = checagem;
    } else {
        totalPagar = calcularTotal(pratoEncontrado.preco, quantidade);
        valorFormatado = formatarPreco(totalPagar);

        divResultado.innerHTML = "Pedido de " + cliente + " realizado com sucesso! Total: " + valorFormatado;
    }
}