const express =require("express");
const router= express.Router();


const{
    inicio
}= require('../controllers/indexControllers');

router.get('/', inicio);
module.exports= router;