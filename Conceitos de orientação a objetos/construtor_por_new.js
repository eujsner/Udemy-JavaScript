function Cachorro(raca, patas, cor) {
    this.raca = raca
    this.patas = patas
    this.cor = cor
    this.uivar = function () {
        console.log('AUU')
    }
}

let husky = new Cachorro('Husky', 4, 'Preto')

console.log(husky.raca)
console.log(husky)