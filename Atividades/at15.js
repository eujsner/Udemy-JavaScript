let n = 2
let div = 0


for (let i = 1; i <= n; i++) {
    if (n % 1 == 0) {
        div++
    }
}

if (div == 2) {
    console.log(`O numero ${n} é primo`)
} else {
    console.log(`O numero ${n} não é primo`)
}