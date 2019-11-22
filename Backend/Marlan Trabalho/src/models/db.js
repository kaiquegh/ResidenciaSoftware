const Sequelize = require('sequelize');
//CONEXÇÃO BANCO
const sequelize = new Sequelize('posts', 'postgres', 'senhaBanco', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});

module.exports = {
Sequelize: Sequelize,
sequelize: sequelize,
};