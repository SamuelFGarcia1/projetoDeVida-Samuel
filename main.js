const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".abas-conteudo");

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){

        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
    }
}