const registerController = require('../controller/registerController')

module.exports = async (app) => {
    app.get('/registerUser',async(req,res) => {
        res.render('register')
    });

    app.post('/registerUser',async(req,res) => {
        let data = await registerController.register(req.body);
        if(data == "usuario registrado")
        {
            res.redirect('/')
        }
    });
};



