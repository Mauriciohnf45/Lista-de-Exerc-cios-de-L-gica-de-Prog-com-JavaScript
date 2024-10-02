let n1, n2, n3, mediaFinal;
n1 = parseFloat(prompt("Digite a primeira nota: "));
n2 = parseFloat(prompt("Digite a segunda nota: "));
n3 = parseFloat(prompt("Digite a terceira nota: "));
mediaFinal = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
alert("A média final do aluno é: " + mediaFinal.toFixed(2));