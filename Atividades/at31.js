let numeros = [7, 6, 8, 9, 0]
let numeros2 = [17, 56, 338]

function verificaArray(array) {
    if (array.length < 5) {
        console.log("Esse array é muito pequeno")
    } else {
        console.log("Esse array está OK!")
    }
}

verificaArray(numeros)
verificaArray(numeros2)