'use strict';

import Sequelize from 'sequelize';

const facebook_profile = Sequelize.define('facebook_profile', {
	first_name: {
		type: Sequelize.string
	},
	last_name: {
		type: Sequelize.string
	}
});