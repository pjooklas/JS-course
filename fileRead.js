const fs = require("fs");
console.log("pradzia");
let tekstas = "";

fs.readFile(
    "a.txt", {
        encoding: "utf8"
    },
    (err, data) => {
        if (err) {
            console.log("Klaida skaitant faila", err);
            return;
        }
        tekstas += data;
        fs.readFile(
            "b.txt", {
                encoding: "utf8"
            },
            (err, data) => {
                if (err) {
                    console.log("Klaida skaitant faila", err);
                    return;
                }
                tekstas += data;
                fs.readFile(
                    "c.txt", {
                        encoding: "utf8"
                    },
                    (err, data) => {
                        if (err) {
                            console.log("Klaida skaitant faila", err);
                            return;
                        }
                        tekstas += data;
                        fs.readFile(
                            "d.txt", {
                                encoding: "utf8"
                            },
                            (err, data) => {
                                if (err) {
                                    console.log("Klaida skaitant faila", err);
                                    return;
                                }
                                tekstas += data;
                                console.log(`Surinkom duomenis is failu '${tekstas}'`);
                            }
                        );
                    }
                );
            }
        );
    }
);




// fs.readFile(
// "a.txt", {
// encoding: "utf8"
// },
// (err, data) => {
// if (err) {
// console.log("Klaida skaitant faila", err);
// return;
// }
// console.log("a.txt");
// console.log(data.substring(0, 100));
// }
// );
// fs.readFile(
// "zmones.json", {
// encoding: "utf8"
// },
// (err, data) => {
// if (err) {
// console.log("Klaida skaitant faila", err);
// return;
// }
// console.log("zmones.json");
// console.log(data);
// }
// );
// fs.readFile(
// "zmones1.json", {
// encoding: "utf8"
// },
// (err, data) => {
// if (err) {
// console.log("Klaida skaitant faila", err);
// return;
// }
// console.log("zmones1.json");
// console.log(data);
// }
// );
console.log("pabaiga");