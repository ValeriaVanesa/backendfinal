const express =require("express");
const router= express.Router();

const{
   carteraWhite
}= require('../../controllers/productos/carteraWhiteControlers.js')

router.get('/', carteraWhite);




 

module.exports =router;