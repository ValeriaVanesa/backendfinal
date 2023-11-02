const express =require("express");
const router= express.Router();

const{
   usuarios,
    login,
    actualizarUsuario,
    eliminarUsuario,
    loginUsuario
}= require('../controllers/usersControlers')

router.get('/', usuarios);
router.get('/',login)
router.post('/',loginUsuario);

router.put( '/:id', actualizarUsuario);
    
router.delete('/:id',eliminarUsuario);
 

module.exports =router;