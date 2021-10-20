const isAuthenticated = require('../middlewares/isAuthenticated')
const jwt = require('jsonwebtoken');
const {promisify} = require('util');

module.exports = async (app) => {
    app.get('/',isAuthenticated.isAuthenticated,async(req,res) => {
        const data = await promisify(jwt.verify)(req.cookies.jwt, process.env.KEY)
        console.log(data)
        res.render('index',{data})
    });
    
     app.get('/userProfile',async(req,res) => {
        const data = await promisify(jwt.verify)(req.cookies.jwt, process.env.KEY)
        res.render('formDatos',{data})
    });
    
     app.get('/editInfo',async(req,res) => {
        const data = await promisify(jwt.verify)(req.cookies.jwt, process.env.KEY)
        res.render('editInfo',{data})
    });
};

