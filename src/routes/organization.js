'use strict';
import organization from '../controllers/organization';

export default (app) => {
	app.post('/api/v1/organization/create', organization.create);
	app.get('/api/v1/organization/read/:id', organization.read);
	app.get('/api/v1/organization/read-all', organization.readAll);
	app.put('/api/v1/organization/update/:id', organization.update);
	app.put('/api/v1/organization/delete/:id', organization.remove);
}