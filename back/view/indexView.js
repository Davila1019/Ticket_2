const isAuthenticated = require('../middlewares/isAuthenticated')


module.exports = async (app) => {
    app.get('/',isAuthenticated.isAuthenticated,async(req,res) => {
        res.render('index')
    });
};