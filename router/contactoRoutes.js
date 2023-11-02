const express =require("express");
const router= express.Router();


const{
    contacto,
    mostrarConsultas,
    nuevoContacto,
    actualizarContacto,
    eliminarContacto
}= require('../controllers/contactoControllers');

router.get('/',contacto);
router.get('/mostrarConsultas', mostrarConsultas)
router.post('/nuevoContacto',nuevoContacto);
router.put( '/update', actualizarContacto);
router.delete( '/delete', eliminarContacto);


module.exports= router;