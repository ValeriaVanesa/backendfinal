const express =require("express");
const router= express.Router();

const{
perfumeMarcJacobs
}= require('../controllers/perfumeMarcJacobsControlers.js')

router.get('/', perfumeMarcJacobs);




 

module.exports =router;