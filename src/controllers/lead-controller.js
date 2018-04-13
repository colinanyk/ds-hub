'use strict';

export async function create(req, res) {
	
	//Default Values Applied TODO: Determine what fields are required
	
	let first_name     = req.body.first_name ? req.body.first_name : null;
	let last_name      = req.body.last_name ? req.body.last_name : null;
	let email_personal = req.body.email_personal ? req.body.email_personal : null;
	let email_work     = req.body.email_work ? req.body.email_work : null;
	let phone_cell     = req.body.phone_cell ? req.body.phone_cell : null;
	let phone_home     = req.body.phone_home ? req.body.phone_home : null;
	let phone_work     = req.body.phone_work ? req.body.phone_work : null;
	let phone_other    = req.body.phone_other ? req.body.phone_other : null;
	let address_1      = req.body.address_1 ? req.body.address_1 : null;
	let address_2      = req.body.address_2 ? req.body.address_2 : null;
	let address_3      = req.body.address_3 ? req.body.address_3 : null;
	let city           = req.body.city ? req.body.city : null;
	let state          = req.body.state ? req.body.state : null;
	let zip            = req.body.zip ? req.body.zip : null;
	let zip4           = req.body.zip4 ? req.body.zip4 : null;
	let organization   = req.body.organization ? req.body.organization : null;
	let ip             = req.body.ip ? req.body.ip : null;
	
	//Normalize input data if not null
	if (first_name != null) {
		first_name = first_name.toLowerCase();
	}
	
	if (last_name != null) {
		last_name = last_name.toLowerCase();
	}
	
	if (email_personal != null) {
		email_personal = email_personal.toLowerCase();
	}
	
	if (email_work != null) {
		email_work = email_work.toLowerCase();
	}
	
	// TODO: Add Phone Normailzation
	
	if (address_1 != null) {
		address_1 = address_1.toLowerCase();
	}
	
	if (address_2 != null) {
		address_2 = address_2.toLowerCase();
	}
	
	if (address_3 != null) {
		address_3 = address_3.toLowerCase();
	}
	
	if (city != null) {
		city = city.toLowerCase();
	}
	
	if (state != null) {
		state = state.toLowerCase();
	}
	
	if (zip != null) {
		state = zip.toLowerCase();
	}
	
	if (zip4 != null) {
		zip4 = zip4.toLowerCase();
	}
	
	if (organization != null) {
		organization = organization.toLowerCase();
	}
	
	// TODO: Add Ip normalization
	
	//Regex Definitions
	const integerOnly      = /^-?\d+\.?\d*$/;
	const alphaNumericOnly = /^[a-zA-Z0-9]+$/;
	const alphaOnlyNoCase  = /^[a-zA-Z]+$/;
	const isIP             = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
	const isEmail          = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	// TODO: Regrex all non null values
	
	const clientLeadObj = {
		first_name  : first_name,
		last_name   : last_name,
		email       : {
			personal: email_personal,
			work    : email_work
		},
		phone       : {
			cell : phone_cell,
			home : phone_home,
			work : phone_work,
			other: phone_other
		},
		address     : {
			address_1: address_1,
			address_2: address_2,
			address_3: address_3,
			city     : city,
			state    : state,
			zip      : zip,
			zip4     : zip4
		},
		organization: organization,
		ip          : ip
	};
	
	return res.status(201).send('Create lead');
}

export async function read(req, res) {
	
	
	return res.status(200).send('Reading Lead');
}

export default {
	create,
	read
}