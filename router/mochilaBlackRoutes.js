const express =require("express");
const router= express.Router();

const{
    mochilaBlack
}= require('../controllers/mochilaBlackControlers');

router.get('/', mochilaBlack);




 

module.exports =router;