
const express =require("express");
const router= express.Router();

const { cuentaUsuario,
        registroUsuario,
        nuevaCuenta,
        actualizarCuenta,
        eliminarCuenta
     
         
} = require("../controllers/crearCuentaControllers");



router.get('/',cuentaUsuario);
router.get('/',registroUsuario)
router.post('/crearcuenta',nuevaCuenta);
router.put( '/:id', actualizarCuenta);
router.delete( '/:id', eliminarCuenta);


    

module.exports =router;