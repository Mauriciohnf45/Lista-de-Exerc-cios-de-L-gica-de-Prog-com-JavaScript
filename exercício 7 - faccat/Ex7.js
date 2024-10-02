var anos = parseInt(prompt("Digite sua idade expressa en anos: "))
var meses = parseInt(prompt("Digite a quantidade de meses desde o seu último aniversário: "))
var dias = parseInt(prompt("Digite os dias desde o último mêsversário: "))
var total_anos = 365 * anos 
var total_meses = 30 * meses
var resultado = total_anos + total_meses + dias
alert("A sua idade em dias são: " + resultado )