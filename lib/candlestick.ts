import Transaction from './transaction';
import Ohclv from './ohclv';

export default class Candlestick {
    book: string;
    open: number;
    high: number;
    close: number;
    low: number;
    volume: number;
    id: number;
    period: number;
    trades: number;

    constructor(ohclv: Ohclv) {
        this.book = ohclv.book;
        this.open = ohclv.open;
        this.close = ohclv.close;
        this.high = ohclv.high;
        this.low = ohclv.low;
        this.volume = ohclv.volume;
        this.id = ohclv.id;
        this.period = ohclv.period;
        this.trades = ohclv.trades;
    }
}