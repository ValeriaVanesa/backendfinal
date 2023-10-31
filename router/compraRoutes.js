
//RUTA NEWSLETTER

const express =require("express");
const router= express.Router();

const { 
    compra,
    nuevaCompra,
        actualizarCompra,
        eliminarCompra
} = require("../controllers/compraControllers");

router.get('/',compra);
router.post('/',nuevaCompra);
router.put( '/:id', actualizarCompra);
router.delete( '/:id', eliminarCompra);

module.exports =router;
 