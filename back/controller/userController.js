const userModel = require('../model/userModel')

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
