const isAuthenticated = require('../middlewares/isAuthenticated')
const userController = require('../controller/userController')
const jwt = require('jsonwebtoken');
const {promisify} = require('util');

module.exports = async (app) => {
    app.get('/',isAuthenticated.isAuthenticated,async(req,res) => {
        const data = await promisify(jwt.verify)(req.cookies.jwt, process.env.KEY)
        res.render('index',{data})
    });
    
     app.get('/userProfile',async(req,res) => {
        const data = await promisify(jwt.verify)(req.cookies.jwt, process.env.KEY)
        res.render('formDatos',{data})
    });

    app.get('/friendProfile',async(req,res) => {
        const dataf = await promisify(jwt.verify)(req.cookies.friend, process.env.KEY)
        const data = await promisify(jwt.verify)(req.cookies.jwt, process.env.KEY)
        res.render('friendData',{dataf,data})
    });
    
     app.get('/editInfo',async(req,res) => {
        const data = await promisify(jwt.verify)(req.cookies.jwt, process.env.KEY)
        res.render('editInfo',{data})
    });
};

