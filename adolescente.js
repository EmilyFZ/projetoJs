function adolescente() {

    var perguntas = parseInt(prompt("Filme Matrix foi..  \n1: O primeiro DVD a vender mais de 1 milhão de cópias  \n2: O filme mais caro já produzido."))

    if (perguntas == 1) {
        return resposta()
    } else {
        alert("GAME OVER, SE QUISER VOLTAR APERTE F5!");
    }
}
function resposta() {
    alert("Parabéns! Vamos para próxima pergunta!!");
    var perguntas1 = parseInt(prompt("Quais são as sequências de Matrix? \n1: Matrix Reloaded e Matrix Revolutions \n2: Matrix o retorno” e “Matrix Nova Era"));
    if (perguntas1 == 1) {
        return resposta2()

    }
    else {
        alert("GAME OVER, SE QUISER VOLTAR APERTE F5!")

    }
}

function resposta2() {
    alert("Parabéns! Vamos para próxima pergunta!!");
    var perguntas2 = parseInt(prompt("Quem foi o escolhido para salvar as pessoas daquela realidade? \n1: Neo \n2: Morpheu "));

    if (perguntas2 == 1) {
        return alert("VOCÊ GANHOU PARABÉNS!!")
    } else {
        return alert("GAME OVER, SE QUISER VOLTAR APERTE F5!")
    }
}