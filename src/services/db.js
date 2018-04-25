'use strict';
import sequalize from 'sequelize';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const env = dotenv.config();

export default () => {
	const db = process.env.MONGO_URL;
	
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
	
	const connect = () => {
		mongoose.connect(db, (err) => {
			if (err) {
				console.log('Error connecting to : ' + db);
			} else {
				console.log('Successfully connected to MongoDB');
			}
		});
	};
	
	connect();
}