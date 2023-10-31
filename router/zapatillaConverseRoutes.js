const express =require("express");
const router= express.Router();

const{
  zapatillaConverse
}= require('../controllers/zapatillaConverseControlers.js')

router.get('/', zapatillaConverse);




 

module.exports =router;