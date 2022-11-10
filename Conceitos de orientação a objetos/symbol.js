class Cachorro {
    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }

    latir() {
        console.log('Au au')
    }
}
let patas = Symbol()
Cachorro.prototype[patas] = 5

let labrador = new Cachorro('Labrador', 4, 'Preto')

console.log(Cachorro.prototype[patas])