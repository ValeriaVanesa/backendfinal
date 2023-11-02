const express =require("express");
const router= express.Router();

const{
   usuarios,
   loginUsuario
}= require('../controllers/usersControlers')

router.get('/', usuarios);

router.post('/login',loginUsuario);


 

module.exports =router;