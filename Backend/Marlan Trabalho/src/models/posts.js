const db = require('./db');


//Cria os posts no BD
const Post = db.sequelize.define('posts', {
    title: {
        type: db.Sequelize.STRING,
        required: true
    },
    content: {
        type: db.Sequelize.TEXT,
        required: true
    }
});

module.exports = Post;
const Post = require('./Post');
User.hasMany(Post, {foreignKey: 'user_id', sourceKey: 'id'});