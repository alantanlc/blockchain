const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('d207b722d5beeb7256ff1380f29b74538ad8b136ed66ecf6ca39d0bd4f9e5983');
const myWalletAddress = myKey.getPublic('hex');

let coin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
coin.addTransaction(tx1);

console.log('\nStarting the miner...');
coin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of alan is', coin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', coin.isChainValid());

coin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', coin.isChainValid());
