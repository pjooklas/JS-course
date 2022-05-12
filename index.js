var kintamasis;

kintamasis = 5;

console.log(kintamasis);

kintamasis = 7;

console.log(kintamasis);

var kitasKintamasis;

kitasKintamasis = 15;

kintamasis = kintamasis + kitasKintamasis;
/*
              7
                          15
               7        + 15
                    22           

*/

console.log(kintamasis);

kintamasis = kintamasis + 3 + kitasKintamasis;
/*
              22        + 3
                   25
                              15
                    25      + 15
                         40


*/

console.log(kintamasis);

kintamasis = kintamasis % 3;

console.log(kintamasis);

kitasKintamasis = kitasKintamasis ** 3;

console.log(kitasKintamasis);

kintamasis = kitasKintamasis = kintamasis + kitasKintamasis;
/*
                                    1     + 3375
                                        3376

*/
console.log(kintamasis, kitasKintamasis);


// number - skaicius (su kableliu)
kintamasis = 0.1 + 0.2;
console.log(kintamasis);

// string - tekstas
kintamasis = "la\tbas \"pas\r\nauli\' ! \\\\ !  \u5e4F \u0061\u0062 !";
console.log(kintamasis);

// boolean - true/false tiesa/netiesa
kintamasis = false;
console.log(kintamasis);

// undefined - reiksme neapibrezta
var naujasKintamasis;
naujasKintamasis = undefined;
console.log(naujasKintamasis);
