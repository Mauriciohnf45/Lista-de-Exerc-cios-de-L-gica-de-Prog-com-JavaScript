 let idadeHomem1, idadeHomem2, idadeMulher1, idadeMulher2;
let homemMaisVelho, mulherMaisNova, homemMaisNovo, mulherMaisVelha;
let soma, produto;

idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem: "));
idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem: "));
idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher: "));
idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher: "));

if (idadeHomem1 > idadeHomem2) {
    homemMaisVelho = idadeHomem1;
    homemMaisNovo = idadeHomem2;
} else {
    homemMaisVelho = idadeHomem2;
    homemMaisNovo = idadeHomem1;
}

if (idadeMulher1 < idadeMulher2) {
    mulherMaisNova = idadeMulher1;
    mulherMaisVelha = idadeMulher2;
} else {
    mulherMaisNova = idadeMulher2;
    mulherMaisVelha = idadeMulher1;
}

soma = homemMaisVelho + mulherMaisNova;
produto = homemMaisNovo * mulherMaisVelha;

alert("A soma das idades do homem mais velho com a mulher mais nova é: " + soma);
alert("O produto das idades do homem mais novo com a mulher mais velha é: " + produto);
