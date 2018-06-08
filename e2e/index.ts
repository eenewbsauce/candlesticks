import _ from 'lodash';
import * as Quadriga from 'quadriga-api';
import lib from '../lib';
const { Transaction, OhclvProcessor } = lib;
const quadriga = new Quadriga();

quadriga.transactions('eth_cad', 'hour', (err, txns) => {
    const transactions = txns.map(txn => {
        return new Transaction(txn);
    });
    
    const ohlc = new OhclvProcessor(transactions, 10);
    const ohlcs = ohlc.process();
    
    console.dir(ohlcs);
});
