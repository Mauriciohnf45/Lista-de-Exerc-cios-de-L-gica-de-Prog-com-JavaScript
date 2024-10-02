let a, b, c, soma;

a = parseFloat(prompt("Digite o primeiro valor: "));
b = parseFloat(prompt("Digite o segundo valor: "));
c = parseFloat(prompt("Digite o terceiro valor: "));

if (a > b && a > c) {
    soma = b + c;
} else if (b > a && b > c) {
    soma = a + c;
} else {
    soma = a + b;
}

alert("A soma dos dois maiores valores é: " + soma);
