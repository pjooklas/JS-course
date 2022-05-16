// function labas(vardas, pavarde) {
//     let pasisveikinimas;
//     if (vardas.endsWith('s')) {
//         pasisveikinimas = 'Sveikas';
//     } else {
//         pasisveikinimas = 'Sveika';
//     }
//     return `${pasisveikinimas}, ${vardas} ${pavarde}`;

// }

// console.log(labas('Jonas', 'Jonaitis'));
// console.log(labas('Ona', 'Petraitiene'));

// let k = 10;

// console.log(typeof labas);

/*
parasyti funkcija, kuriai galima perduoti bet kiek parametru
funkcijos rezultatas turi buti parametru, kurie yra skaiciai, suma
t.y.: skaiciuSuma(1, 2, "trys", null, false, 3, 4, "labas") => 10
*/

// function skaiciuSuma() {
//     let suma = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         if (typeof arguments[i] === 'number') {
//             if (isFinite(arguments[i])) {
//                 suma += arguments[i];
//             }
//         }
//     }
//     return suma;
// }

// console.log(skaiciuSuma(1, "2", 'trys', 3, NaN));


// function faktorialas(sk) {
//     if (typeof sk !== 'number' || !isFinite(sk) || sk < 0) {
//         return undefined;
//     }

//     if (sk !== Math.round(sk)) {
//         return undefined;
//     }

//     if (sk === 0) {
//         return 1;
//     }
//     return sk * faktorialas(sk - 1);
// }

// console.log(faktorialas(3));



/*
parasyti rekursine funkcija, kuri atspausdina fibonaci skaiciu seka
sustoja, kai pasiekiam max (cia yra parametras)
function fib(sk1, sk2, max) {
/////
}
*/

function fib(sk1, sk2, max) {
    if (sk2 >= max) {
        console.log(sk1);
        return;
    }

    console.log(sk1);
    return fib(sk2, sk1 + sk2, max);
};

fib(1, 1, 50);


// function fib(sk1, sk2, max) {
//     console.log(sk1);
//     const sk3 = sk1 + sk2;
//     if (sk3 > max) {
//     console.log(sk2);
//     } else {
//     fib(sk2, sk3, max);
//     }
//     }
//     fib(1, 1, 50);

console.log('-------------');

// function test(a, b) {
//     console.log("f", a, b);
//     a += 10;
//     b += 10;
//     console.log("f", a, b);
// }
// let a = 1;
// let b = 2;
// console.log(a, b);
// test(a, b);
// console.log(a, b);


// function test(m) {
//     console.log("f", m);
//     for (let i = 0; i < m.length; i++) {
//         m[i] += 10;
//     }
//     console.log("f pakeistas", m);
// }
// let m = [1, 2, 3];
// console.log(m);
// test(m);
// console.log(m);

function calc(f) {
    const arg = [...arguments];
    arg.shift();
    return f(...arg);
}

function suma(a, b) {
    return a + b;
}

function sandauga(a, b) {
    return a * b;
}

function atimtis(a, b) {
    return a - b;
}

function dalyba(a, b) {
    return a / b;
}
console.log(calc(suma, 3, 4));
console.log(calc(sandauga, 3, 4));
console.log(calc(atimtis, 3, 4));
console.log(calc(dalyba, 3, 4));