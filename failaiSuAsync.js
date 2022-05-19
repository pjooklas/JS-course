const fs = require("fs");

function skaitytiFaila(vardas) {
    return new Promise((resolve, reject) => {
        fs.readFile(
            vardas, {
                encoding: "utf8"
            },
            (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }
        );
    });
}

console.log("pradzia");
async function run() {

    let tekstas = "";
    try {
        tekstas += await skaitytiFaila("a.txt");
        tekstas += await skaitytiFaila("b.txt");
        tekstas += await skaitytiFaila("c.txt");
        tekstas += await skaitytiFaila("d.txt");
        console.log(`Surinkom duomenis is failu ${tekstas}`);
    } catch {
        err => {
            console.log("Klaida skaitant faila", err);
        }
    }
}
console.log("pabaiga");

run();