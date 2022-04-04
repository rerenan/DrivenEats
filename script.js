let prato;
let bebida;
let sobremesa;
function selecionarPrato(escolha) {
   
    
    const opcaoSelecionada = document.querySelector(".pratos").querySelector(".selecionado");
    if (opcaoSelecionada !== null && opcaoSelecionada !== escolha) {
        let check = document.querySelector(".selecionado ion-icon");
        opcaoSelecionada.classList.remove("selecionado");
        check.classList.remove("check");
    }
    escolha.classList.toggle("selecionado");
    prato = document.querySelector(".pratos").querySelector(".selecionado h3").innerHTML;
}

function selecionarBebida(escolha) {
    const opcaoSelecionada = document
    .querySelector(".bebidas")
    .querySelector(".selecionado");
    if (opcaoSelecionada !== null && opcaoSelecionada !== escolha) {
        let check = document.querySelector(".selecionado ion-icon");
        opcaoSelecionada.classList.remove("selecionado");
        check.classList.remove("check");
    }
    escolha.classList.toggle("selecionado");
    bebida = document.querySelector(".bebidas").querySelector(".selecionado h3").innerHTML;
}

function selecionarSobremesa(escolha) {
    const opcaoSelecionada = document
    .querySelector(".sobremesas")
    .querySelector(".selecionado");
    if (opcaoSelecionada !== null && opcaoSelecionada !== escolha) {
        let check = document.querySelector(".selecionado ion-icon");
        opcaoSelecionada.classList.remove("selecionado");
        check.classList.remove("check");
    }
    escolha.classList.toggle("selecionado");
    sobremesa = document.querySelector(".sobremesas").querySelector(".selecionado h3").innerHTML;
}

