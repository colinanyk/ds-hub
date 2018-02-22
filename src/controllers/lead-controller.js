'use strict';

export async function create (req, res) {
	
	return res.status(201).send('Create lead');
}

export default {
	create
}