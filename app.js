var express = require("express")
global.app = express();
global.config = require("./config.js").configuracion


var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) 



require("./routes/rutas.js")


app.listen(config.puerto, function(){
    console.log("servidor funcionando por el puerto " + config.puerto )
})

//ENVIAR APIS SIN LA CARPETA NODE _MODULES

