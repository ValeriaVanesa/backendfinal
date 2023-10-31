
const express =require("express");
const router= express.Router();

const { crearCuenta,
        showUsers,
        nuevaCuenta,
        actualizarCuenta,
        eliminarCuenta
    
     
         
} = require("../controllers/cuentaControllers");



router.get('/',crearCuenta);
router.post('/show',showUsers)
router.post('/new',nuevaCuenta);
router.put( '/:id', actualizarCuenta);
router.delete( '/:id', eliminarCuenta);


    

module.exports =router;