
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const clientes= require('../models/usersModels');

const MONGO_URL_LOCAL= process.env.MONGO_URL_LOCAL;

function cuentaUsuario(req,res){
    res.send('<h1>Nuevas cuentas de usuarios</h1>');
}


const registroUsuario=(req,res)=>{
res.sendFile('index6.html')
}



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
        data:'Esta cuenta ya existe'
    })
}
datosUsuario = new clientes(datos);
console.log(`${datosUsuario}`);


await datosUsuario.save();
}catch(error){
    return res.sendFile('error.html');
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





























/*
const nuevaCuenta =(req,res)=>{
    


    const {  nombre, apellido, fechaNacimiento, dni , email, contraseña}  = req.body;
 console.log(`los datos recibidos son : nombre: ${nombre} , apellido: ${apellido}, fechaNacimiento: ${fechaNacimiento} , dni: ${dni}, email: ${email} y password: ${contraseña}` );

 MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
    if (err) throw err;
   
    let dbo= db.db('TiendaOnline');
   

    let infoUsuario = {
        nombre: nombre,
        apellido:apellido,
        Nacimiento:fechaNacimiento,
        dni:dni,
        email:email,
        contraseña:contraseña

   };
    
     await dbo.collection('clientes' ).insertOne(infoUsuario,(err,res)=>{
        if (err) throw err,
    console.log(`Informacion insertada en la coleccion clientes:${res}`);
    db.close();
     });
    });



if(nombre == ''|| apellido == '' || fechaNacimiento == '' || dni == '' || email == '' || contraseña == '' ){
    res.redirect ('error.html');
}else {
    res.redirect ('ok.html');
}


}
*/

//actualizar------------------------------------------------------------------------------------

const actualizarCuenta =(req,res)=>{
    let user= req.params.id;
    res.send(`<h1 style="color:green">Usuario ${user} actualizado </h1>`);
 

MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
    if (err) throw err;
    
    let dbo= db.db('TiendaOnline');
    let paraActualizar ={
        nombre: 'Valeria',
        apellido:'Klos',
        Nacimiento:'2023-09-12T20:48',
        dni:'38998001',
        email:'valetheangel95@gmail.com',
        contraseña:'1228'
        
    }
    
    let datoActualizado= {
        $set:{
            nombre: 'Marcos',
            apellido:'Perez',
            Nacimiento:'2023-09-12T20:48',
            dni:'35432235',
            email:'nombre_apellido@gmail.com',
            contraseña:'1228'
            
    
        }
    };
    
    
    
     await dbo.collection('clientes').updateOne( paraActualizar,datoActualizado,(err,res)=>{
        if (err) throw err,
    console.log(`documento actualizado en la coleccion clientes`);
    db.close();
     });
    });


}




//eliminar---------------------------------------------------------------------------------------

const eliminarCuenta = (req,res)=>{
    let user = req.params.id;
    res.send(`<h1 style="color:red">Cuenta eliminada ${user}</h1>`);


    MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
        if (err) throw err;
        
        let dbo= db.db('TiendaOnline');
        let paraEliminar ={
            nombre: 'nombre',
            apellido:'apellido',
            Nacimiento:'fechaNacimiento',
            dni:'dni',
            email:'email',
            contraseña:'contraseña'
    
          
        }
        
         await dbo.collection('clientes').deleteOne( paraEliminar,(err,res)=>{
            if (err) throw err,
        console.log(`datos eliminados en la coleccion clientes`);
        db.close();
         });
        });



    }





module.exports={
    cuentaUsuario,
    registroUsuario,
    nuevaCuenta,
    actualizarCuenta,
    eliminarCuenta

  
    
    
}