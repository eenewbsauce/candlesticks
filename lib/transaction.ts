import { Sides } from './constants';

export default class Transaction {
    amount: number;
    date: Date;
    id: number;
    price: number;
    side: string;

    constructor(transaction: any) {
        this.amount = transaction.amount;
        this.date = transaction.date;
        this.id = transaction.tid;
        this.price = transaction.price;
        this.side = transaction.side;
    }
}