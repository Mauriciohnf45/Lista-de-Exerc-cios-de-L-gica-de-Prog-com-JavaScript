let hora_inicio, hora_fim, duracao;

hora_inicio = parseInt(prompt("Digite a hora de início do jogo (em horas): "));
hora_fim = parseInt(prompt("Digite a hora de fim do jogo (em horas): "));

if (hora_fim >= hora_inicio) {
    duracao = hora_fim - hora_inicio;
} else {
    duracao = (24 - hora_inicio) + hora_fim;
}

alert("A duração do jogo foi de " + duracao + " horas.");
