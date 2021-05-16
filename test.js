const walletgift = require("./index")


let wallet = new walletgift('0123456789');
async function main() {
    var out = await wallet.pay("https://gift.truemoney.com/campaign/?v=jkaIee01khBpXXvefc")
    console.log(out);
}
main();