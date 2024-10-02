let numeroConta;
let saldo, debito, credito, saldoAtual;

numeroConta = parseInt(prompt("Digite o número da conta do cliente: "));
saldo = parseFloat(prompt("Digite o saldo: "));
debito = parseFloat(prompt("Digite o débito: "));
credito = parseFloat(prompt("Digite o crédito: "));

saldoAtual = saldo - debito + credito;

alert("Saldo atual: R$ " + saldoAtual.toFixed(2));

if (saldoAtual >= 0) {
    alert("Saldo Positivo");
} else {
    alert("Saldo Negativo");
}
