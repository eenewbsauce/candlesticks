import * as _ from 'lodash';

import Candlestick from './candlestick';
import Ohclv from './ohclv';
import Transaction from './transaction';

export default class OhclvProcessor {
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
            .map(g => this.createOhlc(g))            
            .value();
    }

    createOhlc(group: Transaction[]) {
        const open = _.first(group).price;
        const close = _.last(group).price;
        const high = _.maxBy(group, 'price').price;
        const low = _.minBy(group, 'price').price;
        const volume = _.sumBy(group, 'amount');
        const trades = group.length;
        const period = this.period;
        const ohclv = new Ohclv({ open, close, high, low, volume, period, trades });

        return new Candlestick(ohclv);
    }
    
}
