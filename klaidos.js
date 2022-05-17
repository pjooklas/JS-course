function fakt(sk) {
    if (typeof sk !== "number" || !isFinite(sk) || sk < 0) {
        let klaida = new Error("Kazkoks ne skaicius");
        throw klaida;
    }
    if (sk !== Math.round(sk)) {
        throw new Error("Turi buti sveikas skaicius");
    }
    if (sk === 0) {
        return 1;
    }
    return sk * fakt(sk - 1);
}
try {
    console.log(fakt(-3.14));
} catch (err) {
    console.log("pagavau: " + err.message);
} finally {
    console.log("Sitas blokas suveiks bet kuriuo atveju");
}

console.log("pabaiga");