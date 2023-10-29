
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const clientes= require('../models/usersModels');

const mongoose = require('mongoose');

const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;

function cuentaUsuario(req,res){
    res.sendFile('index6.html');
}


const registroUsuario=(req,res)=>{
res.sendFile('index6.html')
}

//CRUD


//Mostrar--------------------------------------------------------------------------------------------------------------------





const monstrar = async()=>{
    const usuarios = await clientes.find()
    
        
        
        console.log(usuarios);
    }
        
    
  

monstrar();



//crear cuenta---------------------------------------------------------------------------------------------------------------


const nuevaCuenta = async (req,res)=>{
    


    const {  nombre, apellido, fechaNacimiento, dni , email, password}  = req.body;
    const datos = {
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento:fechaNacimiento,
      dni:dni,
      email:email,
      password:password
    }
 console.log(`los datos recibidos son : nombre: ${nombre} , apellido: ${apellido}, fechaNacimiento: ${fechaNacimiento} , dni: ${dni}, email: ${email} y password: ${password}` );

 

try{
let datosUsuario = await clientes.findOne({email});
console.log(`${datosUsuario}`);
if(datosUsuario){
    return res.json({
        data:'Esta cuenta ya existe'//AGREGAR SWEET ALERT
    })
}
datosUsuario = new clientes(datos);
console.log(`${datosUsuario}`);


await datosUsuario.save();

return res.send('se ha registrado con éxito');//('Se ha registrado con éxito'); //AGREGAR SWEET ALERT
}catch(error){
    return res.send('Error en el registro'); // AGREGAR SWEET ALERT
}





res.json({
    nombre,
    apellido,
    fechaNacimiento,
    dni,
    email,
    password

})


}





//actualizar------------------------------------------------------------------------------------

const actualizarCuenta = async(id)=>{
    const usuarios= await clientes.updateOne({_id:id},
        {
          $set:{
        nombre: 'Valeria',
        apellido:'Klos',
        fechaNacimiento:'2023-10-13T20:48',
        dni:'38998001',
        email:'valetheangel95@gmail.com',
        password:'Valeria'
        

          }
        })
}
actualizarCuenta('65332b587e610f24fd86e85d');




//eliminar---------------------------------------------------------------------------------------

const eliminarCuenta = async(id)=>{
const usuarios = await clientes.deleteOne({_id:id})
console.log(usuarios)
}
eliminarCuenta('65330330fd4f141e5d418477');




module.exports={
    cuentaUsuario,
    registroUsuario,
    nuevaCuenta,
    actualizarCuenta,
    eliminarCuenta

  
    
    
}