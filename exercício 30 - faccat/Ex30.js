let a, b, c;

a = parseFloat(prompt("Digite o primeiro valor: "));
b = parseFloat(prompt("Digite o segundo valor: "));
c = parseFloat(prompt("Digite o terceiro valor: "));

if (a > b) {
    if (a > c) {
        if (b > c) {
            alert(c + ", " + b + ", " + a);
        } else {
            alert(b + ", " + c + ", " + a);
        }
    } else {
        alert(b + ", " + a + ", " + c);
    }
} else {
    if (b > c) {
        if (a > c) {
            alert(c + ", " + a + ", " + b);
        } else {
            alert(a + ", " + c + ", " + b);
        }
    } else {
        alert(a + ", " + b + ", " + c);
    }
}
