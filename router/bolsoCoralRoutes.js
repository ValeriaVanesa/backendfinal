const express =require("express");
const router= express.Router();

const{
    carteraCoral
}= require('../controllers/bolsoCoralControlers.js')

router.get('/', carteraCoral);




 

module.exports =router;