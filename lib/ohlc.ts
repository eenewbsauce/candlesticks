import _ from 'lodash';

import Transaction from './transaction';

export default class Ohlc {
    period: number;
    transactions: Transaction[];

    constructor(transactions: Transaction[], period: number) {
        this.period = period;
        this.transactions = transactions;
    }

    
}
