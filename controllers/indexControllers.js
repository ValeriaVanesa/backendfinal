const dotenv = require("dotenv");
dotenv.config();
const path = require('path');



function inicio(req, res) {
    //crear sesion del usuario
    res.sendFile(path.resolve('public/index.html'));
}

module.exports={

   inicio
}