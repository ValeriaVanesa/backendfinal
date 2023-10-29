const express =require("express");
const router= express.Router();

const{
   usuarios,
    login,
 
    loginUsuario
}= require('../controllers/usersControlers')

router.get('/', usuarios);
router.get('/',login)
router.post('/users',loginUsuario);


 

module.exports =router;