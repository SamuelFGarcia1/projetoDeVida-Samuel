const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".abas-conteudo");

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){

        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new date("2024-09-15T00:00:00");
const tempoObjetivo2 = new date("2024-12-09T00:00:00");
const tempoObjetivo3 = new date("2024-11-31T00:00:00");
const tempoObjetivo4 = new date("2024-09-11T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4,];


function calculatempo(tempoObjetivo) {
    let tempoAtual = new date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = math.floor(tempoFinal / 1000);
    let minutos = math.floor(segundos / 60);
    let horas = math.floor(minutos / 60);
    let dias = math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
} 

function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textcontent = calculaTempo(tempos)[i])[0];
        document.getElementById("horas"+i).textcontent = calculaTempo(tempos)[i])[1];
        document.getElementById("min"+i).textcontent = calculaTempo(tempos)[i])[2];
        document.getElementById("seg"+i).textcontent = calculaTempo(tempos)[i])[3];
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();
