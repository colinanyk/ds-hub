'use strict';
import sequalize from 'sequelize';
import dotenv from 'dotenv';
const env = dotenv.config();

export default () => {
	
	const connectSequelize = new sequalize('postgres://' +
		process.env.POSTGRESQL_USER + ':' +
		process.env.POSTGRESQL_PASSWORD + '@' +
		process.env.POSTGRESQL_HOST + ':5432/dshub');
	
	connectSequelize
		.authenticate()
		.then(() => {
			console.log('Connection has been established successfully.');
		})
		.catch(err => {
			console.error('Unable to connect to the database:', err);
		});
}