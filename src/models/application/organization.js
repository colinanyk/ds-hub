'use strict';
import mongoose from 'mongoose';
import moment from 'moment';
const timeZones = require('../../time-zones.json');
const states = require('../../states.json');

const organization = new mongoose.Schema({
	left: {type: Number, required: true, default: null},
	right: {type: Number, required: true, default: null},
	root: {type: Number, required: true, default: 0},
	name: {type: Number, required: true, default: null},
	type: {type: Number, enum: ['organization', 'location', 'region', 'umbrella'], required: true, default: 'organization'},
	address: {
		address_1: {type: String, default: null},
		address_2: {type: String, default: null},
		address_3: {type: String, default: null},
		city: {type: String, default: null},
		state: {
			name: {type: String, enum: states, default: states[0].name},
			abbreviation: {type: String, enum: states, default: states[0].abbreviation}
		},
		zip: {type: String, default: null},
		zip4: {type: String, default: null},
		country: {type: String, default: null},
	},
	time_zones: {
		zone: {type: String, enum: timeZones, default: timeZones[14].zone},
		gmt: {type: String, enum: timeZones, default: timeZones[14].gmt},
		name: {type: String, enum: timeZones, default: timeZones[14].name}
	},
	phone: {
		country_code: {type: String, default: null},
		work: {type: String, default: null },
		ext: {type: String, default: null},
		fax: {type: String, default: null},
		other: {type: String, default: null}
	},
	logo: {type: String, default: null},
	users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, default: null}]
});

module.exports = mongoose.model('Organization', organization);