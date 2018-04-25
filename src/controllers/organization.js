'use strict';

export function create (req, res) {
	
	return res.status(201).send('Create Organization');
}

export function read (req, res) {
	
	return res.status(200).send('Read Organization');
}

export function readAll (req, res) {
	
	return res.status(200).send('Read All Organization');
}

export function update (req, res) {
	
	return res.status(201).send('Update Organization');
}

export function remove (req, res) {
	
	return res.status(201).send('Remove Organization');
}

export default {
	create,
	read,
	readAll,
	update,
	remove
}