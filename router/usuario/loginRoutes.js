const express =require("express");
const router= express.Router();

const{
    login
}= require('../../controllers/usuario/loginControlers');

router.get('/', login);




 

module.exports =router;