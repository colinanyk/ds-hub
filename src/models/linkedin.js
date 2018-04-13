'use strict';

import Sequelize from 'sequelize';

const linkedIn_profile = Sequelize.define('linkedIn_profile', {
	id: {
		type: Sequelize.string
	},
	first_name : {
		type: Sequelize.string
	},
	last_name: {
		type: Sequelize.string
	},
	maiden_name: {
		type: Sequelize.string
	},
	formatted_name: {
		type: Sequelize.string
	},
	phonetic_first_name: {
		type: Sequelize.string
	},
	phonetic_last_name: {
		type: Sequelize.string
	},
	formatted_phonetic_name: {
		type: Sequelize.string
	},
	head_line: {
		type: Sequelize.string
	},
	location: {
		type: Sequelize.string
	},
	industry: {
		type: Sequelize.string
	},
	
})