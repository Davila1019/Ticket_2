const registerModel = require('../model/registerModel')


module.exports.register = async(user) => {
   
    let register = new registerModel();
    let data = await register.register(user);

    if(data){
        return "usuario registrado"
    }
    else{
        console.log("error");
    }
}