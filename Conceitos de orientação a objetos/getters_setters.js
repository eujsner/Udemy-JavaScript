class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    get getNome() {
        return this.nome
    }

    set setNome(nome) {
        this.nome = nome
    }
}

let pessoa = new Pessoa('joao')
console.log(pessoa)

pessoa.setNome = 'Pedro'
console.log(pessoa.getNome)


