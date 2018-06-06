import * as _ from 'lodash';

import Transaction from './transaction';

export default class Ohlc {
    period: number;
    transactions: Transaction[];

    constructor(transactions: Transaction[], period: number) {
        this.period = period;
        this.transactions = transactions;
    }

    process(): any[] {
        return _.chain(this.transactions)
            .groupBy(txn => {
                return `${ txn.date.format('YYYYMMDD') }_${ txn.date.hour() }h_${ Math.floor(txn.date.minute() / 5) * 5 }m`;
            })
            .value();
    }
    
}
