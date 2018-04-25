'use strict';
import mongoose from 'mongoose';

const timeZones = require('../../time-zones.json');
const states = require('../../states.json');
const frequency = ['monthly', 'weekly', 'quarterly', 'annually'];
const status = ['active', 'ended', 'requested', 'approved', 'pending'];
const type = ['email', 'social', 'ringless'];

const campaign = new mongoose.Schema({
	name: {type: String, required: true, default: null},
	description: {type: String, default: null},
	created_date: {type: Date, required: true, default: new Date()},
	modified_date: {type: Date, required: true, default: null},
	start_date: {type: Date, default: null},
	end_date: {type: Date, default: null},
	frequency: {type: String, enum: frequency, required: true, default: frequency[0]},
	status: {type: String, enum: status, required: true, default: status[3]},
	type: {type: String, enum: type, required: true, default: type[0]},
	organization: {type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true, default: null}
});

module.exports = mongoose.model('Campaign', campaign);