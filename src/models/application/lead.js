'use strict';
import mongoose from 'mongoose';
import moment from 'moment';

const lead = new mongoose.Schema({
	created: {type: Date, required: true, default: new Date()},
	lead_id: {type: String, required: true},
	organization: {type:  mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true}
});

module.export = mongoose.model('Lead', lead);