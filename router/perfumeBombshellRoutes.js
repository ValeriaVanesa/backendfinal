const express =require("express");
const router= express.Router();

const{
perfumeBombshell
}= require('../controllers/perfumeBombchellControlers.js')

router.get('/', perfumeBombshell);




 

module.exports =router;