let kgMorango, kgMaca;
let precoMorango, precoMaca, valorTotal, desconto;

precoMorango = 2.50;
precoMaca = 1.80;

kgMorango = parseFloat(prompt("Digite a quantidade de Kg de morangos: "));
kgMaca = parseFloat(prompt("Digite a quantidade de Kg de maçãs: "));

if (kgMorango <= 5) {
    valorTotal = kgMorango * precoMorango;
} else {
    valorTotal = kgMorango * 2.20;
}

if (kgMaca <= 5) {
    valorTotal += kgMaca * precoMaca;
} else {
    valorTotal += kgMaca * 1.50;
}

if ((kgMorango + kgMaca > 8) || (valorTotal > 25)) {
    desconto = 0.10 * valorTotal;
    valorTotal -= desconto;
}

alert("Valor a ser pago: R$ " + valorTotal.toFixed(2));
