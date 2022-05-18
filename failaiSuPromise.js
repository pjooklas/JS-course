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

let tekstas = "";

skaitytiFaila("a.txt").then(
  value => {
    console.log("perskaitem ", value);
    tekstas += value;
    return skaitytiFaila("b.txt");
  }
).then(
  value => {
    console.log("perskaitem ", value);
    tekstas += value;
    return skaitytiFaila("c.txt");
  }
).then(
  value => {
    console.log("perskaitem ", value);
    tekstas += value;
    return skaitytiFaila("d.txt");
  }
).then(
  value => {
    console.log("perskaitem ", value);
    tekstas += value;
    console.log(`Surinkom duomenis is failu '${tekstas}'`);
  }
).catch(
  err => {
    console.log("Klaida skaitant faila", err);
  }
);

console.log("pabaiga");
