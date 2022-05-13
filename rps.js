// const nuo = 14;
// const iki = 73;

// const res = Math.trunc(Math.random() * (iki - nuo + 1) + nuo);

// console.log(res);

/*
akmuo-popierius-zirkles
zaidzia 2 kompiuteriai 1000 zaidimu
kiek kartu laimejo 1 komp.
kiek kartu laimejo 2 komp.
kiek kartu buvo lygiosios
kiek is viso buvo akmenu (per abu zaidejus)
kiek is viso buvo popieriu (per abu zaidejus)
kiek is viso buvo zirkliu (per abu zaidejus)
*/

let laimejo1 = 0;
let laimejo2 = 0;
let lygiosios = 0;
let akmuo = 0;
let popierius = 0;
let zirkles = 0;

// 0 - akmuo, 1 - popierius, 2 - zirkles

for (let i = 1; i <= 1000; i++) {
    const pirmasPC = Math.trunc(Math.random() * 3);
    const antrasPC = Math.trunc(Math.random() * 3);

    if (pirmasPC == 0 && antrasPC == 2 || pirmasPC == 1 && antrasPC == 0 || pirmasPC == 2 && antrasPC == 1) {
        laimejo1++;
    } else if (pirmasPC == antrasPC) {
        lygiosios++;
    } else {
        laimejo2++;
    }

    if (pirmasPC == 0) {
        akmuo++;
    } else if (pirmasPC == 1) {
        popierius++;
    } else {
        zirkles++;
    }

    if (antrasPC == 0) {
        akmuo++;
    } else if (antrasPC == 1) {
        popierius++;
    } else {
        zirkles++;
    }
}

const rezultatas = `
1 komp. laimejo ${laimejo1} kartu,
2 komp. laimejo ${laimejo2} kartu,
lygiuju buvo ${lygiosios} kartu,
akmuo iskrito ${akmuo} kartu,
popierius iskrito ${popierius} kartu,
zirkles iskrito ${zirkles} kartu,
`;

console.log(rezultatas);