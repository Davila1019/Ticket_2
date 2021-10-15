const sequelize = require('../db/conexion');
const {promisify} = require('util');
const jwt = require('jsonwebtoken');

module.exports.isAuthenticated = async (req,res,next) =>{
    if(req.cookies.jwt){
        try{
            
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.KEY)
            const data = decodificada.data;
            let result = await sequelize.query("SELECT email FROM users WHERE email ='"+ data.email+"'");
            
            if(result){
                req.user = data
                return next()
            }
            
                
            
            
        }
        catch(error){
            console.log(error)
            res.redirect('/login')
        }
    }
    else{
        res.redirect('/login')
    }
}