'use strict';
import lead from './lead';
import user from './user';
import organization from './organization';
import campaign from './campaign';

export default (app) =>{
	lead(app);
	user(app);
	organization(app);
	campaign(app);
}