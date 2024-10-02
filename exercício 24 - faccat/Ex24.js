let salarioFixo, vendas, comissao, salarioTotal;

salarioFixo = parseFloat(prompt("Digite o salário fixo: "));
vendas = parseFloat(prompt("Digite o valor das vendas: "));

if (vendas <= 1500) {
    comissao = vendas * 0.03;
} else {
    comissao = (1500 * 0.03) + ((vendas - 1500) * 0.05);
}

salarioTotal = salarioFixo + comissao;

alert("O salário total do vendedor é: R$ " + salarioTotal.toFixed(2));
