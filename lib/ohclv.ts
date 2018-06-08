export default class Ohclv {
    open: number;
    close: number;
    high: number;
    low: number;
    volume: number;
    period: number;
    trades: number;

    constructor(ochlvParams: any) {
        this.open = ochlvParams.open;
        this.high = ochlvParams.high;
        this.close = ochlvParams.close;
        this.low = ochlvParams.low;
        this.volume = ochlvParams.volume;
        this.period = ochlvParams.period;
        this.trades = ochlvParams.trades;
    }
}