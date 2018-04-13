'use strict';

import Lead from '../controllers/lead-controller';

export default (app) => {
	app.post('/api/v1/lead/create', Lead.create);
	app.get('/api/v1/lead/read', Lead.read);
}