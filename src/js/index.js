 window.alert('Bem-vindos aos Pokedevs\n By Jubs Damasceno')
// Objetivos:

//P1: criar uma variavel no JS pra trabalhar com a listagem de pokedevs
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");


//P2:identificar o evento de clique no elemnto da listagem
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {

        //P3:remover a classe aberto só do cartão que está aberto
        esconderCartaoPokedev();


        //P4: clicar em umpokedev da listagem,pegar o id desse pokedev pra saber qual cartão abrir 
        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

        //P5: remover a classe ativa que marca o pokedev selecionado na listagem
        desativarPokedevNaListagem();

        //P6: adicionar a classe ativo no pokedev selecionado na listagem
        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);

    })

})

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

