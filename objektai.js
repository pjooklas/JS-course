// let staciakampis1 = {
//     ilgis: 21.34,
//     plotis: 11.47
// };
// let staciakampis2 = {
//     ilgis: 21.34,
//     plotis: 11.47
// };

// if (staciakampis1 === staciakampis2) {
//     console.log('tokie patys');
// } else {
//     console.log('skirtingi');
// }

// let staciakampis3 = staciakampis1;

// if (staciakampis1 === staciakampis3) {
//     console.log('tokie patys');
// } else {
//     console.log('skirtingi');
// }

// staciakampis1.ilgis = 53;
// staciakampis1['plotis'] = 5;

// console.log(staciakampis1);
// console.log(staciakampis2);
// console.log(staciakampis3);

/*
masinu lenktynes
startuoja 8 masinos
kieviena masina turi tokias savybes:
pavadinimas, greitis, kelias
lenktynes (ciklas):
kiekvienos iteracijos metu kievienos masinos (atskirai)
greitis gali padideti arba sumazeti (-2 .. 10)
masinos atbulai vaziuoti negali
kiekvienos iteracijos metu kieviena masina pavaziuoja per tiek, koks dabar yra jos greitis
lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km.
atspausdinti laimetoja.
*) - surusiuota turnyrine lentele (pagal nuvaziuota kelia)
**) - komentatorius: kas 100 km turi pranesti pirmaujancios masinos pavadinima
*/

const masinos = [{
        pavadinimas: "VW Passat",
        greitis: 0,
        kelias: 0
    },
    {
        pavadinimas: "Audi 80",
        greitis: 0,
        kelias: 0
    },
    {
        pavadinimas: "Zaporozietis",
        greitis: 0,
        kelias: 0
    },
    {
        pavadinimas: "Seat Ibiza",
        greitis: 0,
        kelias: 0
    },
    {
        pavadinimas: "BMW 525",
        greitis: 0,
        kelias: 0
    },
    {
        pavadinimas: "VW Golf",
        greitis: 0,
        kelias: 0
    },
    {
        pavadinimas: "Opel Zafira",
        greitis: 0,
        kelias: 0
    },
    {
        pavadinimas: "Volga",
        greitis: 0,
        kelias: 0
    },
];
let laimetojas = false;
let kelias = 100;
let komentatorius = '';
let ratai = 1;

function sortas(masyvas) {
    for (const masina of masinos) {
        masyvas.push([masina.pavadinimas, masina.kelias]);
    }
    masyvas.sort((a, b) => {
        return b[1] - a[1];
    });
}

// vykdom lenktynas
do {
    for (const masina of masinos) {
        const greitis = Math.trunc(Math.random() * 13 - 2);
        masina.greitis += masina.greitis + greitis > 0 ? greitis : 0;
        masina.kelias += masina.greitis;
    }

    // tikrina ar yra kas perzenges 100*x km
    let laimi = [];
    sortas(laimi);
    if (laimi[0][1] >= kelias) {
        komentatorius = `Nuvaziavus ${kelias}km laimi ${laimi[0][0]}`;
        console.log(komentatorius);
        kelias += 100;
    }

    // tikrina ar yra nugaletojas
    if (laimi[0][1] >= 1000) {
        laimetojas = laimi[0][0];
    }
    console.log(ratai++);
} while (laimetojas == false);

// nugaletoju lentele
const lentele = [];
sortas(lentele);

// console.log(`Nugalejo ${laimetojas}`);
console.log('-----------------');
console.log('Turnyrine lentele:');
for (let i = 0; i < lentele.length; i++) {
    console.log(`${i+1}: ${lentele[i][0]} nuvaziavo ${lentele[i][1]}`);
}