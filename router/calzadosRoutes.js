const express =require("express");
const router= express.Router();

const{
  calzados
}= require('../controllers/calzadosControlers.js')

router.get('/', calzados);




 

module.exports =router;