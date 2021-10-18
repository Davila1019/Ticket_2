const friendsController = require('../controller/friendsController')
const jwt = require('jsonwebtoken');
const {promisify} = require('util');

module.exports = async (app) => {

    app.post('/friends',async(req,res) => {
        let friend = req.body;
        console.log(friend);
        let data = await friendsController.request(req.body);
        
        console.log('Data',data)
        res.send(data)
    });

    app.get('/friendsRequest/:id',async(req,res) => {
        let id = req.params.id;
        let response = await friendsController.getRequest(id);
        let data = response[0];
        res.send(data)
    });

    app.post('/friendsAccept',async(req,res) => {
        let info = req.body;
        console.log(info);
        let data = await friendsController.acceptRequest(info);
        res.send(data)
    });

    app.get('/myFriends/:id',async(req,res) => {
        let id = req.params.id;
        let response = await friendsController.getMyFriends(id);
        let dataf = response[0];
        console.log(dataf);
        const data = await promisify(jwt.verify)(req.cookies.jwt, process.env.KEY)
        console.log(data);
        res.render('myfriends',{dataf,data})
       
    });

    app.get('/allFriends',async(req,res) => {
        let response = await friendsController.getAllFriends();
        let data = response[0];
        res.send(data)
    });
};