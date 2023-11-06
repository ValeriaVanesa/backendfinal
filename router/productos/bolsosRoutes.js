const express =require("express");
const router= express.Router();

const{
    bolsos
}= require('../../controllers/productos/bolsos&CarterasControlers.js')

router.get('/', bolsos);




 

module.exports =router;