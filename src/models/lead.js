'use strict';
import Sequelize from 'Sequelize';

const lead = Sequelize.define('lead', {
	first_name  : {type: Sequelize.STRING, allowNull: true, defaultValue: null},
	last_name   : {type: Sequelize.STRING, allowNull: true, defaultValue: null},
	email       : {type: Sequelize.STRING, allowNull: true, defaultValue: null},
	address_1   : {type: Sequelize.STRING, allowNull: true, defaultValue: null},
	address_2   : {type: Sequelize.STRING, allowNull: true, defaultValue: null},
	city        : {type: Sequelize.STRING, allowNull: true, defaultValue: null},
	zip         : {type: Sequelize.STRING, allowNull: true, defaultValue: null},
	zip4        : {type: Sequelize.STRING, allowNull: true, defaultValue: null},
	phone       : {type: Sequelize.STRING, allowNull: true, defaultValue: null},
	created_date: {type: Sequelize.Date, allowNull: false, defaultValue: Sequalize.Now}
});