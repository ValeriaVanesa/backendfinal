const express =require("express");
const router= express.Router();

const{
    mochilaBlack
}= require('../../controllers/productos/mochilaBlackControlers');

router.get('/', mochilaBlack);




 

module.exports =router;