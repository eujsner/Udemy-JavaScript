let Calculadora = {
    somar: function (a, b) {
        return a + b
    },
    subtrair: function (a, b) {
        return a - b
    },
    multiplicar: function (a, b) {
        return a * b
    },
    dividir: function (a, b) {
        return a / b
    }
}

console.log(Calculadora.somar(1, 1))
console.log(Calculadora.subtrair(2, 5))
console.log(Calculadora.multiplicar(5, 5))
console.log(Calculadora.dividir(7, 4))