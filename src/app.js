'use strict';

import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import configRoutes from './routes';
import connectPostgres from './services/db';

const env = dotenv.config();

const port = process.env.PORT || 3001;

const app = express();

connectPostgres();

module.exports = app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '125mb' }));

configRoutes(app);

app.param('id', function (req, res, next, id) {
	req.id = id;
	next();
});


app.get('/', (req, res) => res.send('DeStash Hub'));

app.listen(port, () => console.log('Example app listening on port ' + port));