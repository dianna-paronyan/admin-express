const Sequelize = require('sequelize');
const DataTypes = require('sequelize')
const sequelize = new Sequelize('mydb',null,null,{dialect:'sqlite',storage:'database.db'});

const User = require('../models/User')(sequelize,DataTypes);
const Category = require('../models/Category')(sequelize,DataTypes)

module.exports = {
    User,
    Category
}