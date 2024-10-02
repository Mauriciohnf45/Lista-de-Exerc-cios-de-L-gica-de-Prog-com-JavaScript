let num1, num2;

num1 = parseFloat(prompt("Digite o primeiro valor: "));
num2 = parseFloat(prompt("Digite o segundo valor: "));

if (num1 === num2) {
    alert("Números iguais");
} else if (num1 > num2) {
    alert("Primeiro é maior");
} else {
    alert("Segundo maior");
}
