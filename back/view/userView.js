const userController = require('../controller/userController')
const jwt = require('jsonwebtoken');
const {promisify} = require('util');
const upload = require('../middlewares/storage')
module.exports = async (app) => {
    app.get('/user/:email',async(req,res) => {
        let email = req.params.email
        let data = await userController.get(email);
        res.send(data)
    });


    app.post('/editUser',upload.single('image'),async(req,res) => {    
        let data = await promisify(jwt.verify)(req.cookies.jwt, process.env.KEY)
        id = data.data.id_user;
        let path = "'"+ req.file.path + "'"
        console.log(path)
        let response = await userController.update(id,req.body,path)
        console.log(req.body)
        res.redirect('/')
    })

    
};



