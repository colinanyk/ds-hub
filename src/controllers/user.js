'use strict';
import User from '../models/application/user';
import moment from 'moment';
import jwt from 'jsonwebtoken';

const timeZones        = require('../time-zones.json');
const states           = require('../states.json');
const IntegerOnly      = /^-?\d+\.?\d*$/;
const AlphaNumericOnly = /^[a-zA-Z0-9]+$/;
const AlphaOnly        = /^[a-zA-Z]+$/;
const ValidEmail       = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export function create(req, res) {
	
	const date = moment(new Date).utc();
	
	//Base User Object
	let firstName       = req.body.first_name ? req.body.first_name : null;
	let lastName        = req.body.last_name ? req.body.last_name : null;
	let email           = req.body.email ? req.body.email : null;
	let password        = req.body.password ? req.body.password : null;
	let confirmPassword = req.body.confirm_password ? req.body.confirm_password : null;
	let type            = req.body.type ? req.body.type : null;
	let created         = date.valueOf();
	let status          = req.body.status ? req.body.status : 'pending';
	let address_1       = req.body.address_1 ? req.body.address_1 : null;
	let address_2       = req.body.address_2 ? req.body.address_2 : null;
	let address_3       = req.body.address_3 ? req.body.address_3 : null;
	let city            = req.body.city ? req.body.city : null;
	let state           = req.body.state ? req.body.state : null;
	let zip             = req.body.zip ? req.body.zip : null;
	let zip4            = req.body.zip4 ? zip.body.zip4 : null;
	let country         = req.body.country ? req.body.country : null;
	let country_area    = req.body.country_area ? req.body.country_area : null;
	let work            = req.body.work ? req.body.work : null;
	let ext             = req.body.ext ? req.body.ext : null;
	let fax             = req.body.fax ? req.body.fax : null;
	let other           = req.body.other ? req.body.other : null;
	let timeZone        = req.body.time_zone ? req.body.time_zone : 'US/Eastern';

	//Validate Required Fields
	if (firstName === null) {
		return res.status(409).send('first_name field is required');
	} else if (typeof(firstName) !== 'string') {
		return res.status(409).send('first_name field needs to be a string, type ' + typeof(firstName) + 'was provided');
	} else if (!firstName.match(AlphaOnly)) {
		return res.status(409).send('first_name needs to be alphabetical only')
	} else {
		firstName.replace(/ /g, '').toLowerCase();
	}
	
	if (lastName === null) {
		return res.status(409).send('last_name field is required');
	} else if (typeof(lastName) !== 'string') {
		return res.status(409).send('last_name field needs to be a string, type ' + typeof(lastName) + 'was provided');
	} else if (!lastName.match(AlphaOnly)) {
		return res.status(409).send('last_name needs to be alphabetical only')
	} else {
		lastName.replace(/ /g, '').toLowerCase()
	}
	
	if (email === null) {
		return res.status(409).send('email field is required');
	} else if (typeof(email) !== 'string') {
		return res.status(409).send('email field needs to be a string, type ' + typeof(email) + 'was provided');
	} else if (!email.match(ValidEmail)) {
		return res.status(409).send('email is not properly formated');
	} else {
		email.replace(/ /g, '').toLowerCase();
	}
	
	if (password === null) {
		return res.status(409).send('password field is required');
	} else if (typeof(password) !== 'string') {
		return res.status(409).send('password field needs to be a string, type ' + typeof(password) + 'was provided');
	}
	
	if (confirmPassword === null) {
		return res.status(409).send('confirm_password field is required');
	} else if (typeof(confirmPassword) !== 'string') {
		return res.status(409).send('confirm password needs to be a string, type ' + typeof(confirmPassword) + 'was provided');
	}
	
	if (password !== confirmPassword) {
		return res.status(409).send('Password does not match confirmed password');
	} else if (password.length < 8) {
		return res.status(409).send('Password needs to be 8 characters or longer');
	}
	
	if (type === null) {
		return res.status(409).send('type field is required');
	} else if (typeof(type) !== 'string') {
		return res.status(409).send('type field needs to be a string, type ' + typeof(type) + 'was provided')
	} else if (!type.match(AlphaOnly)) {
		return res.status(409).send('type needs to be alphabetical only');
	} else {
		type.replace(/ /g, '').toLowerCase();
	}
	
	if (typeof(status) !== 'string') {
		return res.status(409).send('status field needs to be a string, type ' + typeof(status) + ' was provided');
	} else if (typeof(status) === 'string' && !status.match(AlphaOnly)) {
		return res.status(409).send('status needs to be alphabetical only');
	}
	
	if (address_1 !== null && typeof(address_1) !== 'string') {
		return res.status(409).send('address_1 field needs to be a string, type ' + typeof(address_1) + 'was provided');
	} else if (address_1 !== null && !address_1.match(AlphaNumericOnly)) {
		return res.status(409).send('address_1 needs to be alphanumeric only');
	} else if (address_1 !== null && address_1.match(AlphaNumericOnly)) {
		address_1.toLowerCase();
	}
	
	if (address_2 !== null && typeof(address_1) !== 'string') {
		return res.status(409).send('address_2 field needs to be a string, type ' + typeof(address_2) + 'was provided');
	} else if (address_2 !== null && !address_2.match(AlphaNumericOnly)) {
		return res.status(409).send('address_2 needs to be alphanumeric only');
	} else if (address_2 !== null && address_2.match(AlphaNumericOnly)) {
		address_2.toLowerCase();
	}
	
	if (address_3 !== null && typeof(address_1) !== 'string') {
		return res.status(409).send('address_3 field needs to be a string, type ' + typeof(address_3) + 'was provided');
	} else if (address_3 !== null && !address_3.match(AlphaNumericOnly)) {
		return res.status(409).send('address_3 needs to be alphanumeric only');
	} else if (address_3 !== null && address_3.match(AlphaNumericOnly)) {
		address_3.toLowerCase();
	}
	
	if (city !== null && typeof(city) !== 'string') {
		return res.status(409).send('city field needs to be a string, type ' + typeof(city) + 'was provided');
	} else if (city !== null && !city.match(AlphaOnly)) {
		return res.status(409).send('city needs to be alphabetical only');
	} else if (city !== null && city.match(AlphaOnly)) {
		city.toLowerCase();
	}
	
	if (state !== null && typeof(state) !== 'string') {
		return res.status(409).send('state field needs to be a string, type ' + typeof(state) + 'was provided');
	} else if (state !== null && !state.match(AlphaOnly)) {
		return res.status(409).send('state needs to be alphabetical only');
	} else if (state !== null && state.match(AlphaOnly)) {
		state.replace(/ /g, '');
	}
	
	if (zip !== null && typeof(zip) !== 'string') {
		return res.status(409).send('zip field needs to be a string, type ' + typeof(zip) + 'was provided');
	} else if (zip !== null && !zip.match(AlphaNumericOnly)) {
		return res.status(409).send('zip field needs to be alphanumeric only');
	} else if (zip !== null && zip.match(AlphaNumericOnly)) {
		zip.replace(/ /g, '');
	}
	
	if (zip4 !== null && typeof(zip4) !== 'string') {
		return res.status(409).send('zip4 field needs to be a string, type ' + typeof(zip4) + 'was provided');
	} else if (zip4 !== null && !zip4.match(AlphaNumericOnly)) {
		return res.status(409).send('zip4 field needs to be alphanumeric only');
	} else if (zip4 !== null && zip4.match(AlphaNumericOnly)) {
		zip4.replace(/ /g, '');
	}
	
	if (country !== null && typeof(country) !== 'string') {
		return res.status(409).send('country field needs to be a string, type ' + typeof(country) + 'was provided');
	} else if (country !== null && !country.match(AlphaOnly)) {
		return res.status(409).send('country field needs to be alphabetical only');
	} else if (country !== null && country.match(AlphaOnly)) {
		country.toLowerCase();
	}
	
	if (country_area !== null && typeof(country_area) !== 'string') {
		return res.status(409).send('phone country_area field needs to be a string, type ' + typeof(country_area) + 'was provided');
	} else if (country_area !== null && !country_area.match(IntegerOnly)) {
		return res.status(409).send('phone country_area filed needs to be numeric only');
	} else if (country_area !== null && country_area.match(IntegerOnly)) {
		country_area.replace(/ /g, '');
	}
	
	if (work !== null && typeof(work) !== 'string') {
		return res.status(409).send('work phone field needs to be a string, type ' + typeof(work) + 'was provided');
	} else if (work !== null && !work.match(IntegerOnly)) {
		return res.status(409).send('work phone field needs to be numeric only');
	} else if (work !== null && work.match(IntegerOnly)) {
		work.replace(/ /g, '');
	}
	
	if (ext !== null && typeof(ext) !== 'string') {
		return res.status(409).send('work phone extension field needs to be a string, type ' + typeof(ext) + 'was provided');
	} else if (ext !== null && !ext.match(IntegerOnly)) {
		return res.status(409) / send('phone etx field needs to be numeric only');
	} else if (ext !== null && ext.match(IntegerOnly)) {
		ext.replace(/ /g, '');
	}
	
	if (fax !== null && typeof(fax) !== 'string') {
		return res.status(409).send('fax field needs to be a string, type ' + typeof(fax) + 'was provided');
	} else if (fax !== null && !fax.match(IntegerOnly)) {
		return res.status(409).send('fax field needs to be numeric only');
	} else if (fax !== null && fax.match(IntegerOnly)) {
		fax.replace(/ /g, '');
	}
	
	if (other !== null && typeof(other) !== 'string') {
		return res.status(409).send('other phone field needs to be a string, type ' + typeof(other) + 'was provided');
	} else if (other !== null && !other.match(IntegerOnly)) {
		return res.status(409).send('other phone field needs to be numeric only');
	} else if (other !== null && other.match(IntegerOnly)) {
		other.replace(/ /g, '');
	}
	
	if (timeZone !== null && typeof(timeZone) !== 'string') {
		return res.status(409).send('time_zone field needs to be a string, type ' + typeof(timeZone) + 'was provided');
	}
	
	User.findOne({email: email}, (err, user) => {
			if (err) {
				return res.status(500).send('There was an issue with creating your user please contact your administrator');
			}
			if (user) {
				return res.status(200).send('User with email ' + email + ' already exists');
			}
			
			const newUser                      = new User();
			newUser.first_name                 = firstName;
			newUser.last_name                  = lastName;
			newUser.email                      = email;
			newUser.password                   = newUser.generateHash(password);
			newUser.type                       = type;
			newUser.created                    = created;
			newUser.status                     = status;
			newUser.address.address_1          = address_1;
			newUser.address.address_2          = address_2;
			newUser.address.address_3          = address_3;
			newUser.address.city               = city;
			newUser.address.state.name         = state;
			newUser.address.state.abbreviation = state;
			newUser.address.zip                = zip;
			newUser.address.zip4               = zip4;
			newUser.address.country            = country;
			newUser.phone.country_area         = country_area;
			newUser.phone.work                 = work;
			newUser.phone.ext                  = ext;
			newUser.phone.fax                  = fax;
			newUser.phone.other                = other;
			newUser.time_zone.zone             = timeZone;
			
			newUser.save((err) => {
					if (err) {
						console.error('ERROR: ' + err);
						return res.status(409).send('There was an issue creating a new User');
					}
					let token = jwt.sign(newUser, process.env.SECRET, {
						expiresIn: 60 * 60 * 24
					});
					
					// let response = {
					// 	user   : user,
					// 	token  : token,
					// 	message: 'User created'
					// };
					
					return res.send('test');
				});
		});
}

export function read(req, res) {
	
	return res.status(200).send('Read User');
}

export function readAll(req, res) {
	
	return res.status(200).send('Read All Users');
}

export function update(req, res) {
	
	return res.status(201).send('Update User');
}

export function remove(req, res) {
	
	return res.status(201).send('Remove User');
}

export default {
	create,
	read,
	readAll,
	update,
	remove
}