module.exports = async (app) => {
    app.get('/registerUser',async(req,res) => {
        res.render('register')
    });
};