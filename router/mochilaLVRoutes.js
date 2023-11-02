const express =require("express");
const router= express.Router();

const{
mochilaLV
}= require('../controllers/mochilaLVControlers.js')

router.get('/', mochilaLV);




 

module.exports =router;