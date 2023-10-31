const express =require("express");
const router= express.Router();

const{
   comoComprar,
}= require('../controllers/infoCompraControlers')

router.get('/', comoComprar);




 

module.exports =router;