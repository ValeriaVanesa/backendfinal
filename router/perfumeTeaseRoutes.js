const express =require("express");
const router= express.Router();

const{
  perfumeTease
}= require('../controllers/perfumeTeaseControlers.js')

router.get('/', perfumeTease);




 

module.exports =router;