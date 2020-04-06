import remote from '../services/remote';

const fetchTodayEuroRates = () => remote(
    'http://api.nbp.pl/api/exchangerates/rates/C/EUR/today/',
)
        .then(result => result);

const fetchTodayUSDRates = () => remote(
    'http://api.nbp.pl/api/exchangerates/rates/C/USD/today/',
)
        .then(result => result);

export default {
    fetchTodayEuroRates,
    fetchTodayUSDRates,
};
