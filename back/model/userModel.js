const sequelize = require('../db/conexion');



module.exports = class userModel {

    async find (email){
        let result = await sequelize.query("SELECT names, f_last_name, s_last_name, email,  cast(datediff(dd,date_of_birth,GETDATE()) / 365.25 as int) as age  FROM users WHERE email = '" + email + "'");
        if (result[0].length > 0) {
            
                return result[0][0]
        } else {
            return false;
        }
    };

    async findFriend (id){
        let result = await sequelize.query("SELECT names, f_last_name, s_last_name, email,  cast(datediff(dd,date_of_birth,GETDATE()) / 365.25 as int) as age  FROM users WHERE id_user = '" + id + "'");
        if (result[0].length > 0) {
                return result[0][0];
        } else {
            return false;
        }
    };

    async update(id,user,path){
        let img = path
        let newData = [
            user.city,
            user.pais,
            user.linkedin,
            user.git,
            id,
            img
        ]
        let date = new Date(user.date);
        console.log(date)
        await sequelize.query("UPDATE users SET names='" + user.username + "', f_last_name='" + user.lastname + "', s_last_name='" + user.s_lastname + "', email='" + user.email + "',  date_of_birth= CAST('" + user.date + "' AS DATETIME)  WHERE id_user = '" + id + "'");
        let data = await sequelize.query("SELECT * FROM data_users WHERE id_us_da = '" + id + "'");
        
           if(data[0].length == 0){
            await sequelize.query(`INSERT INTO data_users (city, country, linkedin, github, id_us_da, image) VALUES (?,?,?,?,?,?)`,
            {replacements: newData, type: sequelize.QueryTypes.SELECT});
           }
           else{
            await sequelize.query("UPDATE data_users SET city='" + user.city + "', country='" + user.pais + "', linkedin='" + user.linkedin + "', github='" + user.git + "',  image= '" + img + "'  WHERE id_user = '" + id + "'");
   
           }
        
    }
}