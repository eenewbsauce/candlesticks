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
                const hour = txn.date.hour();
                const minute =  Math.floor(txn.date.minute() / this.period) * this.period;
                
                return `${ txn.date.format('YYYYMMDD') }_${ hour }h_${ minute }m`;
            })
            .map(g => this.createCandlestick(g))            
            .value();
    }

    createCandlestick(group: Transaction[]): Candlestick {
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