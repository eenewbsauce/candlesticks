import * as moment from 'moment';

import { Sides } from './constants';

export default class Transaction {
    amount: number;
    date: moment.Moment;
    dateFormatted: string;
    id: number;
    price: number;
    side: string;

    constructor(transaction: any) {
        this.amount = Number(transaction.amount);
        this.date = moment(transaction.date);
        this.dateFormatted = this.date.format('YYYY-MM-DDThh:mm');
        this.id = transaction.id;
        this.price = Number(transaction.price);
        this.side = Sides[transaction.side];
    }
}