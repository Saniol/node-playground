import express from 'express';
import path from 'path';
import 'isomorphic-fetch';
import apiRoutes from './routes/api';
import webappRoutes from './routes/webapp';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '../public')));

apiRoutes(app);
webappRoutes(app);


app.listen(3000, () => {
    console.log('Server application listening on port 3000!');
});
