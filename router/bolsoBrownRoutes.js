const express =require("express");
const router= express.Router();

const{
    bolsoBrown
}= require('../controllers/bolsoBrownControlers.js')

router.get('/', bolsoBrown);




 

module.exports =router;