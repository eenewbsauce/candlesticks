import _ from 'lodash';
import * as Quadriga from 'quadriga-api';
import lib from '../lib';
const { Transaction, OhclvProcessor } = lib;
const quadriga = new Quadriga();
const book = 'eth_cad';

quadriga.transactions(book, 'hour', (err, txns) => {
    const transactions = txns.map(txn => {
        return new Transaction(Object.assign({ book }, txn));
    });
    
    const ohlc = new OhclvProcessor(transactions, 10);
    const ohlcs = ohlc.process();
    
    console.dir(ohlcs);
});
