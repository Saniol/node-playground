import CurrencyController from '../controllers/currency';

export default (app) => {
    app.get('/api', (req, res) => {
        res.send('Hello World! This is API path.');
    });

    app.get('/api/sample', (req, res) => {
        res.json({
            title: 'Data from backend',
            msg: 'Hello world 2!',
        });
    });

    app.get('/api/euro', (req, res) => CurrencyController.getEuroData()
            .then(result => res.json(result))
    );
};
