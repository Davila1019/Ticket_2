const sequelize = require('../db/conexion');



module.exports = class userModel {

    async find (email){
        let result = await sequelize.query("SELECT names, f_last_name, s_last_name, email,  cast(datediff(dd,date_of_birth,GETDATE()) / 365.25 as int) as age  FROM users WHERE email = '" + email + "'");
        if (result[0].length > 0) {
            
                return result[0][0]
        } else {
            return false;
        }
    }
}