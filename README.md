## Installing

Using npm:

```bash
$ npm install truewallet-gift
```

Using bower:

```bash
$ bower install truewallet-gift
```

Using yarn:

```bash
$ yarn add truewallet-gift
```

## Example

```js
const walletgift = require("truewallet-gift")
let wallet = new walletgift('0123456789');
async function main() {
    var response = await wallet.pay("https://gift.truemoney.com/campaign/?v=jkaIee01khBpXXvefc")
    console.log(response);
}
main();
```