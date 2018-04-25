'use strict';
import mongoose from 'mongoose';
import moment from 'moment';

const mailGunWebHook = new mongoose.Schema({
	lead_id: {type:  mongoose.Schema.Types.ObjectId, ref: 'Lead', required: true},
	delivered: {
		time_stamp: {type: Date, default: null},
		delivered: {type: Boolean, default: null},
		raw: {}
	},
	dropped: {
		time_stamp: {type: Date, default: null},
		dropped: {type: Boolean, default: null},
		raw: {}
	},
	hard_bounce: {
		time_stamp: {type: Date, default: null},
		hard_bounce: {type: Boolean, default: null},
		raw: {}
	},
	spam_complaint: {
		time_stamp: {type: Date, default: null},
		spam_complaint: {type: Boolean, default: null},
		raw: {}
	},
	unsubscribe: {
		time_stamp: {type: Date, default: null},
		unsubscribe: {type: Boolean, default: null},
		raw: {}
	},
	clicks: {
		clicks: {type: Number, default: 0},
		click_events: [{
			time_stamp: {type: Date},
			city: {type: String},
			device_type: {type: String},
			country: {type: String},
			region: {type: String},
			email_client: {type: String},
			email_client_type: {type: String},
			client_os: {type: String},
			link: {type: String},
			ip: {type: String},
			user_agent: {type: String},
			raw: {}
		}],
	},
	opens: {
		opens: {type: Number, default: 0},
		open_events: [{
			time_stamp: {type: Date},
			city: {type: String},
			device_type: {type: String},
			country: {type: String},
			region: {type: String},
			email_client: {type: String},
			email_client_type: {type: String},
			client_os: {type: String},
			ip: {type: String},
			user_agent: {type: String},
			raw: {}
		}]
	}
});

module.export = mongoose.model('MailGun', mailGunWebHook);