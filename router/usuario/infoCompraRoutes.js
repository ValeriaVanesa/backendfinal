const express =require("express");
const router= express.Router();

const{
   comoComprar,
}= require('../../controllers/usuario/infoCompraControlers')

router.get('/', comoComprar);




 

module.exports =router;