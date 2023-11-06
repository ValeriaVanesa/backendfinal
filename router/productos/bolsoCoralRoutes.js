const express =require("express");
const router= express.Router();

const{
    carteraCoral
}= require('../../controllers/productos/bolsoCoralControlers.js')

router.get('/', carteraCoral);




 

module.exports =router;