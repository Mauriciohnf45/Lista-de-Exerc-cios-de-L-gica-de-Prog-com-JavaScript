var salario = parseFloat(prompt("Qual seu salário? "))
var reajuste = parseFloat(prompt("Qual a porcentagem do reajuste? "))
var salarioFinal = (salario / 100 * reajuste) + salario
var salarioFinalF = salarioFinal.toFixed(2)
alert("O salario final é " + salarioFinalF)