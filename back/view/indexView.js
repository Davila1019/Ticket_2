module.exports = async (app) => {
    app.get('/',async(req,res) => {
        res.render('index')
    });
};