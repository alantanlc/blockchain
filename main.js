const { Blockchain, Transaction } = require('./blockchain');

let coin = new Blockchain();

coin.createTransaction(new Transaction('address1', 'address2', 100));
coin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\nStarting the miner...');
coin.minePendingTransactions('alans-address');

console.log('\nBalance of alan is', coin.getBalanceOfAddress('alans-address'));
coin.minePendingTransactions('alans-address');

console.log('\nBalance of alan is', coin.getBalanceOfAddress('alans-address'));
