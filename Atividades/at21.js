function verificarTipo(valor) {
    if (typeof valor == "number") {
        console.log(`${valor} é um numero!`)
    } else if (typeof valor == "string") {
        console.log(`${valor} é uma String!`)
    } else if (typeof valor == "boolean") {
        console.log(`${valor} é um boolean!`)
    }
}


verificarTipo(true)
verificarTipo(2)
verificarTipo(-1.4)
verificarTipo("abc")