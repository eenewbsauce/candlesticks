import * as moment from 'moment';

import { Sides } from './constants';

export default class Transaction {
    amount: number;
    date: object;
    dateFormatted: string;
    id: number;
    price: number;
    side: string;

    constructor(transaction: any) {
        this.amount = transaction.amount;
        const dateNumber = parseInt(`${transaction.date}000`);
        this.date = moment(dateNumber);
        this.dateFormatted = this.date.format('YYYY-MM-DDThh:mm');
        this.id = transaction.tid;
        this.price = transaction.price;
        this.side = Sides[transaction.side];
    }
}