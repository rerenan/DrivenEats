let prato;
let pratoPreco;
let bebida;
let bebidaPreco;
let sobremesa;
let sobremesaPreco;
let totalPreco;
function selecionarPrato(escolha) {
   
    
    const opcaoSelecionada = document.querySelector(".pratos").querySelector(".selecionado");
    if (opcaoSelecionada !== null) {
        let check = document.querySelector(".selecionado ion-icon");
        opcaoSelecionada.classList.remove("selecionado");
        check.classList.remove("check");
    }
    escolha.classList.toggle("selecionado");
    prato = document.querySelector(".pratos").querySelector(".selecionado h3").innerHTML;
    pratoPreco = document.querySelector(".pratos").querySelector(".selecionado span").innerHTML;
    let desbloquear = document.querySelector("button");
    if (prato && bebida && sobremesa) {
        desbloquear.classList.add("fechar-pedido");
        desbloquear.innerHTML = `Finalizar Pedido`;
    }
}

function selecionarBebida(escolha) {
    const opcaoSelecionada = document
    .querySelector(".bebidas")
    .querySelector(".selecionado");
    if (opcaoSelecionada !== null) {
        let check = document.querySelector(".selecionado ion-icon");
        opcaoSelecionada.classList.remove("selecionado");
        check.classList.remove("check");
    }
    escolha.classList.toggle("selecionado");
    bebida = document.querySelector(".bebidas").querySelector(".selecionado h3").innerHTML;
    bebidaPreco = document.querySelector(".bebidas").querySelector(".selecionado span").innerHTML;
    let desbloquear = document.querySelector("button");
    if (prato && bebida && sobremesa) {
        desbloquear.classList.add("fechar-pedido");
        desbloquear.innerHTML = `Finalizar Pedido`;
    }
}

function selecionarSobremesa(escolha) {
    const opcaoSelecionada = document
    .querySelector(".sobremesas")
    .querySelector(".selecionado");
    if (opcaoSelecionada !== null) {
        let check = document.querySelector(".selecionado ion-icon");
        opcaoSelecionada.classList.remove("selecionado");
        check.classList.remove("check");
    }
    escolha.classList.toggle("selecionado");
    sobremesa = document.querySelector(".sobremesas").querySelector(".selecionado h3").innerHTML;
    sobremesaPreco = document.querySelector(".sobremesas").querySelector(".selecionado span").innerHTML;
    let desbloquear = document.querySelector("button");
    if (prato && bebida && sobremesa) {
        desbloquear.classList.add("fechar-pedido");
        desbloquear.innerHTML = `Finalizar Pedido`;
    }
}
function finalizarPedido() {
    let butaoFinalizar = document.querySelector("button");
    let fundo = document.querySelector(".geral");
    let telaFinal = document.querySelector(".box-final");
    let nomePrato = document.querySelector(".prato-final").querySelector("h4");
    let precoPrato = document.querySelector(".preco-prato");
    let nomeBebida = document.querySelector(".bebida-final").querySelector("h4");
    let precoBebida = document.querySelector(".preco-bebida");
    let nomeSobremesa = document.querySelector(".sobremesa-final").querySelector("h4");
    let precoSobremesa = document.querySelector(".preco-sobremesa");
    let precoTotal = document.querySelector(".preco-total")
    if (prato && bebida && sobremesa) {
        fundo.classList.add("fundo-finalizar-pedido");
        telaFinal.classList.remove("escondido");
        nomePrato.innerHTML = prato;
        nomeBebida.innerHTML = bebida;
        nomeSobremesa.innerHTML = sobremesa;
        precoPrato.innerHTML = pratoPreco;
        precoBebida.innerHTML = bebidaPreco;
        precoSobremesa.innerHTML = sobremesaPreco;
        let precoPratoAdaptado = Number(precoPrato.innerHTML.replace(",","."));
        let precoBebidaAdaptado = Number(precoBebida.innerHTML.replace(",","."));
        let precoSobremesaAdaptado = Number(precoSobremesa.innerHTML.replace(",","."));
        totalPreco = (precoPratoAdaptado + precoBebidaAdaptado + precoSobremesaAdaptado).toFixed(2);
        precoTotal.innerHTML = totalPreco


    }
}
function enviarPedido() {
    const mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${totalPreco}`
    const url = "https://wa.me/5511948596311?text=" + encodeURIComponent(mensagem);
    window.open(url);
}
function cancelar() {
    let telaFinal = document.querySelector(".box-final");
    let fundo = document.querySelector(".geral");
    fundo.classList.remove("fundo-finalizar-pedido");
    telaFinal.classList.add("escondido");
}