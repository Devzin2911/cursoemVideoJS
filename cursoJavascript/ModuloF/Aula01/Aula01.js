let num  = [9, 6, 3, 5]

console.log(num)


num[4] = 7

console.log(num)

num.push(10)

console.log(num)

console.log(num.length)

/*
for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
*/

for (let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}