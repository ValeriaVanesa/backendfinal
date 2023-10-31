const express =require("express");
const router= express.Router();

const{
perfumeMomParis
}= require('../controllers/perfumeMomParisControlers.js')

router.get('/', perfumeMomParis);




 

module.exports =router;