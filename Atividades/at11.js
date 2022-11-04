let idade = 17
let cnh = true

if (idade >= 18 && cnh == false) {
    console.log("Você tem a idade correta porem não tem CNH")
} else if (idade >= 18 && cnh == true) {
    console.log("Você Tem a idade correta e possui CNH")
} else {
    console.log("Você não possiu idade correta para tirar CNH")
}