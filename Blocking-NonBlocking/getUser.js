async function getData(num) {
    for (let i = 0; i < 1500; i++) {
    }
    return num * 5;
}

async function calc(num, callback) {
    callback(await getData(num));
}

module.exports = {calc}