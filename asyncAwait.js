async function run() {
    // function suma(a, b) {
    //     return new Promise((resolve, reject) => {
    //         resolve(a+b);
    //     });
    // }

    //ta pati f-cija:
    async function suma(a, b) {
        return a + b;
    }

    const rez = await suma(1, 2);
    console.log(rez);
}

run();

function suma(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a + b);
    });
    value => {
        const rez = value;
        console.log(value);
    }
}