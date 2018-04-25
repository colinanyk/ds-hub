'use strict';
import campaign from '../controllers/campaign';

export default (app) => {
	app.post('/api/v1/campaign/create', campaign.create);
	app.get('/api/v1/campaign/read/:id', campaign.read);
	app.get('/api/v1/campaign/read-all', campaign.readAll);
	app.put('/api/v1/campaign/update/:id', campaign.update);
	app.put('/api/v1/campaign/delete/:id', campaign.remove);
}