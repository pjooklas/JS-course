// paskaiciuoti ir atspausdinti skaiciu nuo 5 iki 23 suma

let sk = 5;
let suma = 0;

while (sk < 24) {
    suma += sk;
    sk++;
}

console.log('suma:', suma);


// skaiciai nuo 2 iki 352
// atspausdinti suma visu skaiciu, kurie dalinasi is 3 ir is 7
let sk2 = 2;
let suma2 = 0;

while (sk2 < 353) {
    if (sk2 % 3 == 0 && sk2 % 7 == 0) {
        suma2 += sk2;
    }
    sk2++;
}

console.log('Suma 2: ', suma2);


// daugybos lentele nuo 3 iki 5

let daug1 = 3;
do {
    let daug2 = 3;
    do {
        console.log(`${daug1} * ${daug2} = ${daug1 * daug2}`);
        daug2++;
    } while (daug2 < 6);
    daug1++;
} while (daug1 < 6);


for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

for (let i = 100; i >= 1; i -= 3) {
    console.log(i);
}