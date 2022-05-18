console.log("startas");
setTimeout(() => {
    console.log("Po 100 ms");
}, 100);
setTimeout(() => {
    console.log("Po 500 ms");
}, 500);
setTimeout(() => {
    console.log("Po 10 ms");
    for (let i = 0; i < 1000000; i++) {
        for (let j = 0; j < 5000; j++) {}
    }
}, 10);
console.log("finisas");