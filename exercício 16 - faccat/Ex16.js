let quantidade_macacompradas, preco_pormaca, preco_total;

quantidade_macacompradas = parseFloat(prompt("Digite a quantidade de maçãs: "));

if (quantidade_macacompradas < 12) {
    preco_pormaca = 130; 
    preco_total = quantidade_macacompradas * (preco_pormaca / 100);
    alert("O valor total será de: R$ " + preco_total.toFixed(2));
} else {
    preco_pormaca = 100;
    preco_total = quantidade_macacompradas * (preco_pormaca / 100);
    alert("O valor total será de: R$ " + preco_total.toFixed(2));
}
