let quantidadeAtual, quantidadeMaxima, quantidadeMinima, quantidadeMedia;

quantidadeAtual = parseFloat(prompt("Digite a quantidade atual em estoque: "));
quantidadeMaxima = parseFloat(prompt("Digite a quantidade máxima em estoque: "));
quantidadeMinima = parseFloat(prompt("Digite a quantidade mínima em estoque: "));

quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

if (quantidadeAtual >= quantidadeMedia) {
    alert("Não efetuar compra");
} else {
    alert("Efetuar compra");
}
