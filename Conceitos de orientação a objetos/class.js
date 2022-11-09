const cachorro = {
    patas: 4,
    raca: 'SRD',
    uivar: function () {
        console.log("Auuuuuuuu")
    },
}

let pitbull = Object.create(cachorro)
pitbull.uivar();

console.log(pitbull.raca)

pitbull.raca = "Pit Bull"
console.log(pitbull.raca)