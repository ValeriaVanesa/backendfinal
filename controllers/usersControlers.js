const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const clientes= require('../models/usersModels');
const bcrypt = require('bcrypt');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;
const mongoose = require('mongoose');




function usuarios(req,res){

    res.sendFile('index4.html')


    
}

function login(req,res){
    res.sendFile('index4.html')
}

//-----------------------------------------------------------------------------------------------------------------------------------------






//LoginUsuario

const loginUsuario= async(req,res)=>{


    const {email, password} = req.body;
    console.log(` Los datos del usuario son email: ${email} y contraseña:${password}`);
    try{
        let loginUser = await clientes.findOne({email});
        console.log(`${loginUser}` )

        if(!loginUser){
            return res.send('El usuario no existe');
           
        }
   

        const validacionContraseña = bcrypt.compareSync(password, loginUser.password);
        console.log(`${validacionContraseña}`);
        if(loginUser){
        return  res.send(`usuario logueado `)
    }
            
        }catch{
            return res.send('error en el sistema');
        }
 
       
        
    }
    
  
 



module.exports= {
    usuarios,
    login,
    loginUsuario
    
}
  