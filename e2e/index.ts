import _ from 'lodash';

import { txns } from './mockTransactions';
import Ohlc  from '../lib/ohlc';
import Transaction from '../lib/transaction';

const transactions = txns.map(txn => {
    return new Transaction(txn);
});

const ohlc = new Ohlc(transactions, 10);
const ohlcs = ohlc.process();

console.dir(ohlcs);

