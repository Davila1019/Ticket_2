const isAuthenticated = require('../middlewares/isAuthenticated')
const jwt = require('jsonwebtoken');
const {promisify} = require('util');

module.exports = async (app) => {
    app.get('/',isAuthenticated.isAuthenticated,async(req,res) => {
        const data = await promisify(jwt.verify)(req.cookies.jwt, process.env.KEY)
        console.log(data)
        res.render('formDatos',{data})
    });
    
     app.get('/agregarInfo',async(req,res) => {
        res.render('formDatos')
    });
    
     app.get('/editInfo',async(req,res) => {
        res.render('editInfo')
    });
};

