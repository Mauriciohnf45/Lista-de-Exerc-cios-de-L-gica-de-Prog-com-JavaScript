let notaum, notadois, media;

notaum = parseFloat(prompt("Digite a primeira nota: "));
notadois = parseFloat(prompt("Digite a segunda nota: "));

media = (notaum + notadois) / 2;

if (media >= 6) {
    alert("A sua média é: " + media.toFixed(2) + " e você foi aprovado!");
} else {
    alert("A sua média é: " + media.toFixed(2) + " e você foi reprovado!");
}
