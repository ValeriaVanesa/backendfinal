const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const suscripciones = require('../models/suscripcionModels');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;
const mongoose = require('mongoose');

//NEWSLETTER , suscripcion a noticias

function Suscripciones (req,res){
res.send( '<h1> Usuarios suscritos</h1');
}

//crear suscripcion

const nuevoUsuario = async(req,res)=>{
  
    

        const { email  }  = req.body;
        console.log(`los datos recibidos son : email: ${email} `);
    
        const data = {
            email:email,
           }
    
        try{
            let datosUsuario= await suscripciones.findOne({email})
            if(datosUsuario){
                return res.json({
                    data:'gracias por suscribirte' // AGREGAR SWEET ALERT
                })
            }
            datosUsuario = new suscripciones(data);
            console.log(`${datosUsuario}`);
            
            
            await datosUsuario.save();
            }catch(error){
                return res.send('error al suscribirse');
            }
            
            
            
            
            
            res.json({
                email,
           
                
                
            })
            
            
            }
   

//actualizar

const actualizarUsuario = async(id)=>{
    const usuarios= await suscripciones.updateOne({_id:id},
        {
          $set:{
      
        email:'valetheangel95@gmail.com',
        

          }
        })
}
actualizarUsuario('6538ab77b70923af4c5bc16b');


//eliminar----------------------------------------------------------------------------

const eliminarUsuario = async(id)=>{
    const usuarios = await suscripciones.deleteOne({_id:id})
    console.log(usuarios)
    }
    eliminarUsuario('6538ab77b70923af4c5bc16b');
    



module.exports= {
    Suscripciones,
    nuevoUsuario,
   actualizarUsuario,
   eliminarUsuario

   
}
