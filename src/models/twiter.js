'use strict';

import Sequelize from 'sequelize';

const twitter_profile = Sequelize.define('twitter_profile', {
	handle: {
		type: Sequelize.string
	},
	first_name: {
		type: Sequelize.string
	},
	last_name: {
		type: Sequelize.string
	}
});