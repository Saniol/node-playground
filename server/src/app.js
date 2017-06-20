import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/sample', (req, res) => {
    res.json({
        title: 'Data from backend',
        msg: 'Hello world 2!',
    });
});

app.listen(3000, () => {
    console.log('Server application listening on port 3000!');
});
