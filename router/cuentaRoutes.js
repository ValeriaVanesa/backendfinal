<<<<<<< HEAD

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
=======
const express =require("express");
const router= express.Router();

const {
   crearCuenta,
   showUsers,
   nuevaCuenta,
   actualizarCuenta,
   eliminarCuenta
          
} = require("../controllers/crearCuentaControllers");

router.get('/', crearCuenta);
router.get('/show', showUsers);
router.post('/new', nuevaCuenta);
router.put( '/:id', actualizarCuenta);
router.delete( '/:id', eliminarCuenta);

module.exports = router;
>>>>>>> a29da6ddeb52478e873dc9ababea5ad5b4fc2aa6
