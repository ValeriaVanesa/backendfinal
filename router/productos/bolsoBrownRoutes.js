const express =require("express");
const router= express.Router();

const{
    bolsoBrown
}= require('../../controllers/productos/bolsoBrownControlers.js')

router.get('/', bolsoBrown);




 

module.exports =router;