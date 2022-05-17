class Zmogus {
    constructor(vardas) {
        this.vardas = vardas;
    }
    labas() {
        console.log(`Labas, as esu ${this.vardas}`);
    }
}
const j = new Zmogus("Jonas");
const p = new Zmogus("Petras");
j.labas();
p.labas();
class Studentas extends Zmogus {
    constructor(grupe, vardas) {
        super(vardas);
        this.grupe = grupe;
    }
    mokosi() {
        console.log(`As ${this.vardas} mokausi ${this.grupe}`);
    }
}
const a = new Studentas("javascript", "Antanas");
a.labas();
a.mokosi();