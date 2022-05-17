class Taskas {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    aukstyn(kiek) {
        if (kiek === undefined) {
            this.y++;
            return;
        }
        if (typeof kiek === "number" && isFinite(kiek) && kiek > 0) {
            this.y += kiek;
        }
    }
    zemyn(kiek) {
        if (kiek === undefined) {
            this.y--;
            return;
        }
        if (typeof kiek === "number" && isFinite(kiek) && kiek > 0) {
            this.y -= kiek;
        }
    }
    kairen(kiek) {
        if (kiek === undefined) {
            this.x--;
            return;
        }
        if (typeof kiek === "number" && isFinite(kiek) && kiek > 0) {
            this.x -= kiek;
        }
    }
}
const taskas = new Taskas(5, 10);
const taskas1 = new Taskas(2, 8);
console.log(taskas, taskas1);
taskas.aukstyn(3);
taskas1.zemyn(5);
console.log(taskas, taskas1);
taskas.kairen(17);
taskas1.kairen(2);
console.log(taskas, taskas1);
const taskas2 = new Taskas(1, 1);