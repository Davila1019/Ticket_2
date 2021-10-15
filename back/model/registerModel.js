const sequelize = require('../db/conexion');
const bcryptjs = require('bcryptjs');

module.exports = class registerModel{
    
    async register(user){
        let passHash = await bcryptjs.hash(user.password, 8);
        let date = new Date(user.date);
        let newUser = [
            user.name,
            user.lastname,
            user.slastname,
            user.email,
            passHash,
            date
            
        ]
        console.log(newUser)
       try{

            await sequelize.query(`INSERT INTO users (names, f_last_name, s_last_name, email, [password], date_of_birth) VALUES (?,?,?,?,?,?)`,
            {replacements: newUser, type: sequelize.QueryTypes.SELECT});
            return "Usuario registrado"
       }
       catch{
            console.log("error");
        }

    }
}