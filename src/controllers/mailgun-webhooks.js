'use strict';

export function create (req, res) {
	
	return res.status(201).send('Create MailGun WebHook');
}

export function read (req, res) {
	
	return res.status(200).send('Read MailGun WebHook');
}

export function readAll (req, res) {
	
	return res.status(200).send('Read All MailGun WebHook');
}

export default {
	create,
	read,
	readAll
}