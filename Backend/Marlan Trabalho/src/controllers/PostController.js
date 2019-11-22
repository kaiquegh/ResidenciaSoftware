const Post= require('/posts');

module.exports = {
    
    async index(req, res) {

        const posts = await Post.findAll();
        return res.json(posts);
    },
    
    async show(req, res) {

        const post = await Post.findByPk(req.params.id);
        return res.json(post);
    },

    async store(req, res) {
        
        const post = await Post.create(req.body);
        return res.json(post);
    },

    async update(req, res) {

        const post = await Post.findByPk(req.params.id);    
        await post.update(req.body);
        return res.json({post});
    },

    async destroy(req, res) {

        const post = await Post.findByPk(req.params.id);    
        await post.destroy();
        return res.json();
    },
};

