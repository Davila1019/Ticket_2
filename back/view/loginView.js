const loginController = require('../controller/loginController')

module.exports = async (app) => {
    app.get('/login',async(req,res) => {
        res.render('login')
    });

    app.post('/login',async(req,res) => {
        login = await(loginController.login(req.body));
       if(login != "Usuario no autenticado"){
            const cookieOptions = {
            expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 1000),
            httpOnly: true
            }
            res.cookie('jwt', login, cookieOptions)
            res.redirect('/')
       }
       else{
           res.send("Login incorrecto")
       }
    })
};