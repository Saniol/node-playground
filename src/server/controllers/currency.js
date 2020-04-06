import CurrencyModel from '../models/currency';

const getEuroData = () => CurrencyModel.fetchTodayEuroRates();

export default {
    getEuroData,
};
