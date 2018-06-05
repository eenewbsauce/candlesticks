import _ from 'lodash';

import { txns } from './mockTransactions';

import Candlestick from '../lib/candlestick';

const cs = new Candlestick('foo')
console.log(cs.greet());