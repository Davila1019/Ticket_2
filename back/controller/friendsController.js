const friendsModel = require('../model/friendsModel')


module.exports.request = async(info) => {
   
    let request = new friendsModel();
    let data = await request.addFriends(info)

    if(data){
        return "Solicitud registrada"
    }
    else{
        console.log("error");
    }
}

module.exports.getRequest = async(user) => {
   
    let request = new friendsModel();
    let data = await request.getFriendsReq(user)

    if(data){
        return data;
    }
    else{
        console.log("error");
    }
}

module.exports.acceptRequest = async(info) => {
   
    let request = new friendsModel();
    let data = await request.accept(info);
    if(data){
        return "Ahora están conectados!";
    }
    else{
        return data;
    }
}

module.exports.getMyFriends = async(user) => {
   
    let request = new friendsModel();
    let data = await request.getMyFriends(user)

    if(data){
        return data;
    }
    else{
        console.log("error");
    }
}

module.exports.getAllFriends = async() => {
   
    let request = new friendsModel();
    let data = await request.getAllFriends()

    if(data){
        return data;
    }
    else{
        console.log("error");
    }
}