const express =require("express");
const router= express.Router();

const{
    bolsos
}= require('../controllers/bolsos&CarterasControlers.js')

router.get('/', bolsos);




 

module.exports =router;