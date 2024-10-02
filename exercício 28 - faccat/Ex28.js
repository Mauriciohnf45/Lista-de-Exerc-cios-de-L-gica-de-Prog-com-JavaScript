let a, b, c, maior;

a = parseFloat(prompt("Digite o primeiro valor: "));
b = parseFloat(prompt("Digite o segundo valor: "));
c = parseFloat(prompt("Digite o terceiro valor: "));

maior = a;

if (b > maior) {
    maior = b;
}

if (c > maior) {
    maior = c;
}

alert("O maior valor é: " + maior);
