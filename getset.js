// "use strict";
class Zmogus {
    constructor(vardas, pavarde, amzius) {
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.amzius = amzius;
    }

    get pilnasVardas() {
        return this.vardas + " " + this.pavarde;
    }

    set pilnasVardas(value) {
        const names = value.split(" ");
        if (names.length > 0) {
            this.vardas = names[0];
            if (names.length > 1) {
                names.shift();
                this.pavarde = [...names].join(" ");
            } else {
                this.pavarde = "";
            }
        }
    }
}

let z1 = new Zmogus("Jonas", "Jonaitis", 33);
console.log(z1);
console.log(z1.pilnasVardas);


// let z1 = {
//     vardas: "Jonas",
//     pavarde: "Jonaitis"
// };

// Object.defineProperty(z1, "amzius", {
//     writable: false,
//     enumerable: true,
//     configurable: false,
//     value: 33
// });
// console.log(z1);

// z1.amzius = 34;


// Object.defineProperty(z1, "pilnasVardas", {
//     enumerable: true,
//     get() {
//         return this.vardas + " " + this.pavarde;
//     },
//     set(value) {
//         const names = value.split(" ");
//         if (names.length > 0) {
//             this.vardas = names[0];
//         }
//         if (names.length > 1) {
//             names.shift();
//             this.pavarde = [...names].join(" ");
//         }
//     }
// });
// console.log(z1);
// console.log(z1.pilnasVardas);
// z1.pilnasVardas = "Ona Jonaityte Petraitiene";
// console.log(z1.pilnasVardas);