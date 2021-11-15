const Web3 = require('web3');

export async function createWallet() {

    const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
    // const loader = setupLoader({ provider: web3 }).web3;

    const account = web3.eth.accounts.create();
    //const account = web3.eth.accounts.privateKeyToAccount("0x315b036a7379a200c1c28e2342de42b320b9833b2e336a53fd741a2e6e97510e");
    console.log(account);
}