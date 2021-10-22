const { error } = require('console');
const sequelize = require('../db/conexion');

module.exports = class registerModel{

    async addFriends(info){
        let newreqFriend = [
           info.id_friend,
           info.id_user,
           info.status,
           info.name
        ]
    console.log("data", newreqFriend)
       try{
            await sequelize.query(`INSERT INTO connect_friends (id_friend, id_user, [status], names) VALUES (?,?,?,?)`,
            {replacements: newreqFriend, type: sequelize.QueryTypes.SELECT});
            return "Solicitud registrada"
       }
       catch{
          
            return false;
        }
    }

    async getFriendsReq(iduser){
        
        try{
            let result = await sequelize.query("SELECT id_user, names FROM connect_friends WHERE '"+ iduser +"' = connect_friends.id_friend AND [status] = 0" );
            return result;
        }
        catch{
            return false;
        }
    }

    
    async getMyFriends(iduser){
        
        try{
            let result = await sequelize.query("SELECT id_friend, names, id_user FROM connect_friends WHERE '"+ iduser +"' = connect_friends.id_friend AND [status] = '1'");
            return result;
        }
        catch{
            return false;
        }
    }

    async getAllFriends(){
        
        try{
            let result = await sequelize.query("SELECT id_user, names FROM users ");
            return result;
        }
        catch{
            return false;
        }
    }

    async accept(info){
        if(info != undefined){
            try{
                //Agregar registro para id_friend
                console.log(info)
                await sequelize.query("UPDATE connect_friends SET [status]= '1' WHERE id_user= '" +info.id_friend +"' AND  id_friend = '" + info.id_user+"'" );
                let res = await sequelize.query("SELECT names FROM users WHERE id_user = '" + info.id_user + "'" );
            
                let data = await sequelize.query(`INSERT INTO connect_friends (id_friend, id_user, [status], names) VALUES ('`+info.id_friend+`','`+info.id_user+`','1','`+res[0][0].names+`')`)
                return data;
            }
            catch{
                return new error;
            }
        } 
    }
}
