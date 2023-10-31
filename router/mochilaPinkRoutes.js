const express =require("express");
const router= express.Router();

const{
mochilaPink
}= require('../controllers/mochilaPinkControlers.js')

router.get('/', mochilaPink);




 

module.exports =router;