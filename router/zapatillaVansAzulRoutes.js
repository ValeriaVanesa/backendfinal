const express =require("express");
const router= express.Router();

const{
 vansAzul
}= require('../controllers/zapatillaVansAzulControlers.js')

router.get('/', vansAzul);




 

module.exports =router;