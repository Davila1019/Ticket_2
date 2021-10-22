const userController = require('../controller/userController')
const jwt = require('jsonwebtoken');
const {promisify} = require('util');
const upload = require('../middlewares/storage')
const isAuthenticated = require('../middlewares/isAuthenticated')
module.exports = async (app) => {
    
    app.get('/user/:email',isAuthenticated.isAuthenticated,async(req,res) => {
        let email = req.params.email
        let data = await userController.get(email);
        res.send(data)
    });

    app.get('/userf/:id',isAuthenticated.isAuthenticated,async(req,res) => {
        let id = req.params.id
        let data = await userController.find(id);
        const cookieOptions = {
            expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 1000),
            }
        res.cookie('friend', data, cookieOptions)
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



