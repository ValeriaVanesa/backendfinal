const express =require("express");
const router= express.Router();

const{
   condiciones
}= require('../controllers/condicionesControlers.js')

router.get('/', condiciones);




 

module.exports =router;