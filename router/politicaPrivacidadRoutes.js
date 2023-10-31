const express =require("express");
const router= express.Router();

const{
   politicaPrivacidad
}= require('../controllers/politicaPrivacidadControlers.js')

router.get('/', politicaPrivacidad);




 

module.exports =router;