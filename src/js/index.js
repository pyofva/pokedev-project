/*
  OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartao do pokedev
  aberto e mostrar o cartao correspondente ao que foi selecionado na listagem.
  PASSO 1 - precisamos criar um evento de clique no elemento da listagem
  passo 2 - identificar o evento do clique no elemento da listagem
  PASSO 3 - remover a classe aberto só do cartao que ta aberto
  PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev para saber qual cartao abrir
  PASSO 5 - remover a classe ativo que marca o pokedev selecionado da listagem
  PASSO 6 - adicionar a classe ativo no pokedev selecionado na listagem
*/ 



const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () =>{
        esconderCartaoPkedev();
        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);
        desativarPokedevNaListagem();
        ativarPokedevNaListagem(idPokedevSelecionado);
    } )
})

function ativarPokedevNaListagem(idPokedevSelecionado) {
    const idPokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    idPokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;

    const idDoCartaoPokedevParaAbrir = "cartao-"
        + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.
        getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPkedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

