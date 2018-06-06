import _ from 'lodash';

export default class CandlestickGroup {
    period: number;
    transactions: any[];

    constructor(transactions: any[], period: number) {
        this.period = period;
        this.transactions = transactions;
    }

    
}
