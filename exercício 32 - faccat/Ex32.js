let time1, time2;
let golsTime1, golsTime2;

time1 = prompt("Digite o nome do primeiro time: ");
time2 = prompt("Digite o nome do segundo time: ");
golsTime1 = parseInt(prompt("Digite o número de gols do " + time1 + ": "));
golsTime2 = parseInt(prompt("Digite o número de gols do " + time2 + ": "));

if (golsTime1 > golsTime2) {
    alert("O vencedor é: " + time1);
} else if (golsTime2 > golsTime1) {
    alert("O vencedor é: " + time2);
} else {
    alert("EMPATE");
}
