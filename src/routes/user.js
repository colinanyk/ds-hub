'use strict';
import user from '../controllers/user';

export default (app) => {
	app.post('/api/v1/user/create', user.create);
	app.get('/api/v1/user/read/:id', user.read);
	app.get('/api/v1/user/read-all', user.readAll);
	app.put('/api/v1/user/update/:id', user.update);
	app.put('/api/v1/user/delete/:id', user.remove);
}