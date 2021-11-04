
var UsuariosC = require("../controladores/usuariosController.js").usuarios



app.post("/sumar" ,function(request,response){    
    
    var x = parseInt(request.body.x);
    var y = parseInt(request.body.y);
    var z = x+y

    response.json(x+y);
})

app.post("/restar" ,function(request,response){    
    
    var x = parseInt(request.body.x);
    var y = parseInt(request.body.y);
    var z = x-y

    response.json(x-y);
})

app.post("/multiplicar" ,function(request,response){    
    
    var x = parseInt(request.body.x);
    var y = parseInt(request.body.y);
    var z = x*y

    response.json(x*y);
})

app.post("/dividir" ,function(request,response){    
    
    var x = parseInt(request.body.x);
    var y = parseInt(request.body.y);
    var z = x/y

    response.json(x/y);
})