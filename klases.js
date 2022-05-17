// const taskas = {
//     x: 0,
//     y: 0,
//     aukstyn: function(kiek) {
//         if (kiek === undefined) {
//             this.y++;
//             return;
//         }

//         if (typeof kiek === "number" && isFinite(kiek) && kiek > 0) {
//             this.y += kiek;
//         }
//     },
//     zemyn: function(kiek) {
//         if (kiek === undefined) {
//             this.y--;
//             return;
//         }

//         if (typeof kiek === "number" && isFinite(kiek) && kiek > 0) {
//             this.y -= kiek;
//         }
//     }

// }

// console.log(taskas);
// taskas.aukstyn(3);
// console.log(taskas);

function Taskas(x, y) {
    this.x = x;
    this.y = y;
}
Taskas.prototype.aukstyn = function(kiek) {
    if (kiek === undefined) {
        this.y++;
        return;
    }
    if (typeof kiek === "number" && isFinite(kiek) && kiek > 0) {
        this.y += kiek;
    }
};
Taskas.prototype.zemyn = function(kiek) {
    if (kiek === undefined) {
        this.y--;
        return;
    }
    if (typeof kiek === "number" && isFinite(kiek) && kiek > 0) {
        this.y -= kiek;
    }
};
const taskas = new Taskas(5, 10);
const taskas1 = new Taskas(2, 8);
console.log(taskas, taskas1);
taskas.aukstyn(3);
taskas1.zemyn(5);
console.log(taskas, taskas1);