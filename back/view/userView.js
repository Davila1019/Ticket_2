const userController = require('../controller/userController')
const fs = require('fs');
module.exports = async (app) => {
    app.get('/user/:email',async(req,res) => {
        let email = req.params.email
        let data = await userController.get(email);
        res.send(data)
    });


    app.post('/editUser',async(req,res) => {    
        let image = req.body.image
        let base64 = image.toString('base64')
        console.log(base64)
    })

    
};



