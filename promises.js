console.log("pradzia");

const p = new Promise(
    (resolve, reject) => {
        console.log("Vykdom promise executoriu");
        setTimeout(() => {
            console.log("palaukem 10 ms");
            // resolve("darbo rezultatas");
            reject("blogas darbo rezultatas");
        }, 10);
        console.log("baigem promise executoriu");
    }
);
console.log(p);

const p1 = p.then(
    value => {
        console.log("----");
        console.log("gavom rezultata: " + value);
        console.log("p", p);
        console.log("p1", p1);
        console.log("p2", p2);
        console.log("p3", p3);
        console.log("p4", p4);
        throw 3.14;
    }
);
console.log(p1);

const p2 = p1.then(
    value => {
        console.log("----");
        console.log("gavom dar viena rezultata: " + value);
        console.log("p", p);
        console.log("p1", p1);
        console.log("p2", p2);
        console.log("p3", p3);
        console.log("p4", p4);
        return undefined;
    },
    null
)
console.log(p2);

const p3 = p2.catch(
    err => {
        console.log("----");
        console.log("gavom klaida: " + err);
        console.log("p", p);
        console.log("p1", p1);
        console.log("p2", p2);
        console.log("p3", p3);
        console.log("p4", p4);
        return undefined;
    }
);
console.log(p3);

const p4 = p3.finally(() => {
    console.log("----");
    console.log("Visada suveiks !!!");
    console.log("p", p);
    console.log("p1", p1);
    console.log("p2", p2);
    console.log("p3", p3);
    console.log("p4", p4);
});

console.log("pabaiga");