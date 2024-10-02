let valor1, valor2;

valor1 = parseInt(prompt("Digite o primeiro valor: "));
valor2 = parseInt(prompt("Digite o segundo valor: "));

if (valor1 < valor2) {
    alert("Valores em ordem crescente: " + valor1 + " " + valor2);
} else {
    alert("Valores em ordem crescente: " + valor2 + " " + valor1);
}
