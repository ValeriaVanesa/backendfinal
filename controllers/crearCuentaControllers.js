
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const clientes= require('../models/usersModels');
const mongoose = require('mongoose');
const path = require('path');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;

function crearCuenta(req,res){
    res.sendFile(path.resolve('public/index6.html'));
}

//CRUD

//Mostrar--------------------------------------------------------------------------------------------------------------------
//REVISAR
const showUsers = async(req, res) => {
    const usuarios = await clientes.find()
    res.send(usuarios);
}

//REVISAR
//crear cuenta---------------------------------------------------------------------------------------------------------------
const nuevaCuenta = async (req,res) => {

    const {  nombre, apellido, fechaNacimiento, dni , email, password}  = req.body;
    const datos = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento:fechaNacimiento,
        dni:dni,
        email:email,
        password:password
    }

    try{
        // let datosUsuario = await clientes.findOne({ email });
        let datosUsuario = false;
        if(datosUsuario){
            res.send({error: true, code: 1, message: ''});
        }

        // datosUsuario = new clientes(datos);
        // await datosUsuario.save();

        return res.send({error: false, code: 0, message: 'Su cuenta se creo correctamente'});//('Se ha registrado con éxito'); //AGREGAR SWEET ALERT
    }catch(error){
        return res.send({error: true, code:2, message: error}); // AGREGAR SWEET ALERT
    }
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
    crearCuenta,
    showUsers,
    nuevaCuenta,
    actualizarCuenta,
    eliminarCuenta
}