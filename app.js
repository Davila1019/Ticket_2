const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const sequileze = require('./back/db/conexion');
const cookieParser = require('cookie-parser')

const indexView = require('./back/view/indexView')
const registerView = require('./back/view/registerView');
const friendView = require('./back/view/friendsView')
const loginView = require('./back/view/loginView')
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false  }))

app.use(cookieParser())

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.set('views', __dirname + '/views');
console.log()
async function serverStart() {
    try {
        await sequileze.authenticate();
        console.log("Conexión estabilizada correctamente")
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('No se pudo conectar correctamente con la Base de datos:', error);
    }
}

serverStart();

//Iniciamos vistas

indexView(app);
registerView(app);
friendView(app);
loginView(app);