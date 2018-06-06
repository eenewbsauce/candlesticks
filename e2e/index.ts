import _ from 'lodash';

import { txns } from './mockTransactions';
import Transaction from '../lib/transaction';

const transactions = txns.map(txn => {
    return new Transaction(txn);
})

console.log(transactions[0]);