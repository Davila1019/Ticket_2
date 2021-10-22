const userModel = require('../model/userModel')
const jwt = require('jsonwebtoken');
module.exports.get = async(email) => {
   
    let get = new userModel();
    let data = await get.find(email);

    if(data){
        return data
    }
    else{
        console.log("error");
    }
}

module.exports.update = async(id,user,path) => {
    let update = new userModel();
    let data = await update.update(id,user,path)
    if(data){
        return data
    }
    else{
        console.log("error")
    }
}

module.exports.find = async(id) => {
    let find = new userModel();
    let data = await find.findFriend(id)
    if(data){
        let friend = jwt.sign({data},process.env.KEY,{  
        }) 
        return friend;
    } else{
        return "Usuario no autenticado"
    }
}