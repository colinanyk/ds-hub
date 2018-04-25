'use strict';
import mongoose from 'mongoose';
import moment from 'moment';
import bcrypt from 'bcrypt-node';
import timeZones from '../../time-zones-zone';
import states from '../../state-abbreviation';

const types = ['organization', 'employee', 'manager'];

const user = new mongoose.Schema({
	first_name: {type: String, required: true, default: null},
	last_name: {type: String, required: true, default: null},
	email: {type: String, required: true, default: null, unique: true},
	password: {type: String, required: true},
	type: {type: String, required: true, enum: types, default: 'organization'},
	created: {type: Date, required: true, default: new Date()},
	modified: {type: Date, default: null},
	status: {type: String, required: true, enum: ['active', 'suspended', 'verified', 'pending'], default: 'pending'},
	profile_picture: {type: String, default: null},
	address: {
		address_1: {type: String, default: null},
		address_2: {type: String, default: null},
		address_3: {type: String, default: null},
		city: {type: String, default: null},
		state: {
			name: {type: String, default: 'n/a'},
			abbreviation: {type: String, enum: states, default: states[0]}
		},
		zip: {type: String, default: null},
		zip4: {type: String, default: null},
		country: {type: String, default: null}
	},
	phone: {
		country_area: {type: String, default: '1'},
		work: {type: String, default: null},
		ext: {type: String, default: null},
		fax: {type: String, default: null},
		other: {type: String, default: null}
	},
	time_zone: {
		zone: {type: String, enum: timeZones, default: timeZones[14]},
		gmt: {type: String, default: '(GMT-05:00)'},
		name: {type: String, default: 'Eastern Time (US &amp; Canada)'}
	}
});

user.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

user.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', user);