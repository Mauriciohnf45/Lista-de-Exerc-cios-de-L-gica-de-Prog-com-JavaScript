let nome;
let altura, peso_ideal;
let sexo;

nome = prompt("Digite o nome: ");
altura = parseFloat(prompt("Digite a altura: "));
sexo = prompt("Digite o sexo (M ou F): ").toUpperCase();

if (sexo === "M") {
    peso_ideal = (72.7 * altura) - 58;
} else {
    peso_ideal = (62.1 * altura) - 44.7;
}

alert("O peso ideal é: " + peso_ideal.toFixed(2) + " kg");
