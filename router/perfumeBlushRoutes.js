const express =require("express");
const router= express.Router();

const{
perfumeBlush
}= require('../controllers/perfumeBlushControlers.js')

router.get('/', perfumeBlush);




 

module.exports =router;