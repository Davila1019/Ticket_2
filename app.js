const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const sequileze = require('./back/db/conexion');
const cookieParser = require('cookie-parser')
const app = express();
<<<<<<< HEAD
const indexView = require('./view/indexView')
const registerUser = require('./view/registerView');
const registerView = require('./view/registerView');
=======
const loginView = require('./back/view/loginView')
const registerView = require('./back/view/registerView')
const indexView = require('./back/view/indexView')
>>>>>>> 680e2b8f9ff96bc9c04ab94231034bae7f1f358b
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
<<<<<<< HEAD
indexView(app);
registerView(app);
=======
loginView(app);
registerView(app);
indexView(app);
>>>>>>> 680e2b8f9ff96bc9c04ab94231034bae7f1f358b
