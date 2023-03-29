const { default: axios } = require("axios");

main();

async function main() {
    await f1();
    f2();
}

async function f1() {
    axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then((result) => {
            console.log(result.data);
        })
        .catch((err) => {
            console.log(err);
        });
}

async function f2() {
    console.log('f2 get called');
}
