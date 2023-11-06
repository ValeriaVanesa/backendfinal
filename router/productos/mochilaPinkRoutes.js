const express =require("express");
const router= express.Router();

const{
mochilaPink
}= require('../../controllers/productos/mochilaPinkControlers.js')

router.get('/', mochilaPink);




 

module.exports =router;