// Formulario de contacto
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const contactos = require('../models/contactoModels');
const mongoose = require("mongoose");
const MONGO_URL_ATLAS = process.env.MONGO_URL_ATLAS;
const path = require('path');



function contacto (req,res){
    res.sendFile(path.resolve('public/index5.html'));
}


//crear contacto
//FALTA HACER
const nuevoContacto = async(req,res)=>{
    
    const { email, nombre, telefono, comentario  }  = req.body;
    console.log(`los datos recibidos son : email: ${email} , nombre: ${nombre}, telefono: ${telefono} y comentario: ${comentario}`);

    const data = {
        email:email,
        nombre: nombre,
        telefono:telefono,
        comentario:comentario
    }
    
    try{
        let datosContacto = await contactos.findOne({email,nombre,telefono,comentario})
        if(datosContacto){
            return res.json({
                data:'mensaje enviado' //AGREGAR SWEET ALERT
            })
        }
        datosContacto = new contactos(data);
        console.log(`${datosContacto}`);
        await datosContacto.save();
    }catch(error){
        return res.send('No se pudo enviar tu mensaje');
    }
        
    res.json({
        email,
        nombre,
        telefono,
        comentario
    })
}
        

//actualizar--------------------------------------------------------------------------
//FALTA HACER
const actualizarContacto = async(id)=>{
    const usuarios= await contactos.updateOne({_id:id},
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
actualizarContacto('6538a5a3ad6e395ef7f8b500');


//eliminar----------------------------------------------------------------------------
//FALTA HACER
const eliminarContacto = async(id)=>{
    const usuarios = await contactos.deleteOne({_id:id})
    console.log(usuarios)
    }
    eliminarContacto('6538a5a3ad6e395ef7f8b500');

module.exports={
    contacto,
    nuevoContacto,
    actualizarContacto,
    eliminarContacto
}
 