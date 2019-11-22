const db = require('./db');

const User = db.sequelize.define('users', {
    firstName: {
        type: db.Sequelize.STRING,
        required: true,
    },
    lastName: {
        type: db.Sequelize.STRING,
        required: true,
    },
    age: {
        type: db.Sequelize.INTEGER,
        required: true,
    },
    email: {
        type: db.Sequelize.STRING,
        required: true,
    },
});

module.exports = User;

const Post = require('./Post');
User.hasMany(Post, {foreignKey: 'user_id', sourceKey: 'id'});