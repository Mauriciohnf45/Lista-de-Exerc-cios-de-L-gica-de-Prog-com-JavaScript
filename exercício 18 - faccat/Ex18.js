let anonasc, anoatual, idade;

anonasc = parseInt(prompt("Digite o ano que você nasceu: "));
anoatual = parseInt(prompt("Digite o ano atual: "));

idade = anoatual - anonasc;

if (idade < 16) {
    alert("Você não pode votar!");
} else if (idade < 18) {
    alert("Você pode votar!");
} else {
    alert("Você deve votar!");
}
