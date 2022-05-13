let staciakampis1 = {
    ilgis: 21.34,
    plotis: 11.47
};
let staciakampis2 = {
    ilgis: 21.34,
    plotis: 11.47
};

if (staciakampis1 === staciakampis2) {
    console.log('tokie patys');
} else {
    console.log('skirtingi');
}

let staciakampis3 = staciakampis1;

if (staciakampis1 === staciakampis3) {
    console.log('tokie patys');
} else {
    console.log('skirtingi');
}

staciakampis1.ilgis = 53;
staciakampis1['plotis'] = 5;

console.log(staciakampis1);
console.log(staciakampis2);
console.log(staciakampis3);