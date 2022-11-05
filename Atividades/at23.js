let tamanhoTexto = (texto) => {
    if (texto.length > 10) {
        console.log("Texto muito longo")
    } else {
        console.log("Texto dentro do limite")
    }
}

tamanhoTexto("Olá como você esta?")
tamanhoTexto("Olá")