import _ from 'lodash';

import { txns } from './mockTransactions';
import OhlcvProcessor  from '../lib/ohlcvProcessor';
import Transaction from '../lib/transaction';

const transactions = txns.map(txn => {
    return new Transaction(txn);
});

const ohlc = new OhlcvProcessor(transactions, 10);
const ohlcs = ohlc.process();

console.dir(ohlcs);

