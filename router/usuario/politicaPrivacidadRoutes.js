const express =require("express");
const router= express.Router();

const{
   politicaPrivacidad
}= require('../../controllers/usuario/politicaPrivacidadControlers.js')

router.get('/', politicaPrivacidad);




 

module.exports =router;