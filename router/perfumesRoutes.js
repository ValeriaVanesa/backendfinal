const express =require("express");
const router= express.Router();

const{
perfumes
}= require('../controllers/perfumesControlers.js')

router.get('/', perfumes);




 

module.exports =router;