const express =require("express");
const router= express.Router();

const{
 vansBordo
}= require('../controllers/zapatillaVansBordoControlers.js')

router.get('/', vansBordo);




 

module.exports =router;