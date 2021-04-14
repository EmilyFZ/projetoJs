function escolhido() {
    alert("Você Acabar de entrar no jogo !!")
    
while(true){
    var personagens = parseInt(prompt("Qual o personagem escolhido? \n1: Estágiario  \n2: Hacker  \n3: Adolescente "))
    if (personagens == 1) {
        let Personagem = "Estágiario"
        return estagiario()
        break;

    } else if (personagens == 2) {
        let Personagem = "Hacker"
        return hacker()
        break;

    } else if (personagens == 3) {
        let Personagem = "Adolescente"
        return adolescente()
        break;
    }

    else {
        alert('Personagem não encontrado')
        
    }
}
}

function estagiario() {
    // document.write(`<p> Game Over </p>`)
    var perguntas = parseInt(prompt("Em qual ano o filme matrix foi lançado?  \n1: 1999  \n2: 1998"));

    if (perguntas == 1) {
        return resposta()

    } else {
        return alert("GAME OVER, SE QUISER VOLTAR APERTE F5!");
    }
}

function resposta() {
    alert("Parabéns! Vamos para próxima pergunta!!");
    var perguntas1 = parseInt(prompt("Em Matrix, os humanos são \n1: Escravos da máquina \n2: Expulsos do planeta Terra"));
    if (perguntas1 == 1) {
        return resposta2()

    }
    else {
        return alert("GAME OVER, SE QUISER VOLTAR APERTE F5!")
    }
}
function resposta2() {
    alert("Parabéns! Vamos para próxima pergunta!!");
    var perguntas2 = parseInt(prompt("Quem foi o escolhido para salvar as pessoas daquela realidade? \n1: Neo \n2: Morpheu "));

    if (perguntas2 == 1) {
        return (alert("VOCÊ GANHOU PARABÉNS!!"))
    } else {
        return alert("GAME OVER, SE QUISER VOLTAR APERTE F5!")
    }
}

function final(){
    alert("VOCÊ GANHOU PARABÉNS!!")
}