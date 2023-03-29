main();

async function main() {
    await f1();
    await f2();
}
async function f1() {
    setTimeout(() => {
        console.log("f1");
        return;
    }, 3700);
}
async function f2() {
    setTimeout(() => {
        console.log("f2");
        return;
    }, 3400);
}
