let A, B, C;

A = parseFloat(prompt("Digite o valor do lado A: "));
B = parseFloat(prompt("Digite o valor do lado B: "));
C = parseFloat(prompt("Digite o valor do lado C: "));

if (A < (B + C) && B < (A + C) && C < (A + B)) {
    alert("Os valores formam um triângulo.");
} else {
    alert("Os valores não formam um triângulo.");
}
