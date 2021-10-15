const sequelize = require('../db/conexion');
const bcryptjs = require('bcryptjs');


module.exports = class loginModel {

    async find (user){
        let result = await sequelize.query("SELECT * FROM users WHERE email = '" + user.email + "'");
        if (result[0].length > 0 && (await bcryptjs.compare(user.password, result[0][0].password))) {
            if (user.user == result[0][0].user) {
                return result[0][0];
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}