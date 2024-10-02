let litros, precoAlcool, precoGasolina, desconto, valorTotal, valorDesconto;
let tip;

precoAlcool = 2.90;
precoGasolina = 3.30;

litros = parseFloat(prompt("Digite a quantidade de litros vendidos: "));
tip = prompt("Digite o tipo de combustível (A para Álcool, G para Gasolina): ").toUpperCase();

if (tip === "A") {
    if (litros <= 20) {
        desconto = 0.03;
    } else {
        desconto = 0.05;
    }
    valorTotal = litros * precoAlcool;
} else if (tip === "G") {
    if (litros <= 20) {
        desconto = 0.04;
    } else {
        desconto = 0.06;
    }
    valorTotal = litros * precoGasolina;
} else {
    alert("Tipo de combustível inválido.");
}

valorDesconto = valorTotal * desconto;
valorTotal -= valorDesconto;

alert("O valor a ser pago é: R$ " + valorTotal.toFixed(2));
