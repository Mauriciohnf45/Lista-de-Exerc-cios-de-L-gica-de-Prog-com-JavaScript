// Seção de Declarações das variáveis
let horasTrabalhadas, salarioPorHora, salarioTotal, horasExtras, horasNormais;
let salarioHoraExtra;
const horasNormais = 160; // 40 horas/semana * 4 semanas

// Seção de Comandos, procedimento, funções, operadores, etc...
horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês: "));
salarioPorHora = parseFloat(prompt("Digite o salário por hora: "));

if (horasTrabalhadas > horasNormais) {
    horasExtras = horasTrabalhadas - horasNormais;
    salarioHoraExtra = salarioPorHora * 1.5;
    salarioTotal = (horasNormais * salarioPorHora) + (horasExtras * salarioHoraExtra);
} else {
    salarioTotal = horasTrabalhadas * salarioPorHora;
}

// Exibir o salário total
alert("O salário total do funcionário é: R$ " + salarioTotal.toFixed(2));
