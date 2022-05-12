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