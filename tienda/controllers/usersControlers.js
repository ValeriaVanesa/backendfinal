const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const clientes= require('../models/usersModels');

const MONGO_URL_LOCAL= process.env.MONGO_URL_LOCAL;






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
    console.log(` Los datos del usuario son: ${email},${password}`);
    try{
        let loginUser = await clientes.findOne({email});
        console.log(`${loginUser}` )
        if(!loginUser){
            return res.send('El usuario no existe');
           
        }
        const validacionContraseña = bcrypt.compareSyn(password,loginUser.password);
        console.log(`${validacionContraseña}`);
        if(validacionContraseña){
            return res.send('INDEX');
        }


        }catch{
            return res.send('error en el sistema');
        }

         

/*
    if(req.body.email == 'email' && req.body.pass == 'password'){
        const payload = {
            check:true
        };
        const token = jwt.sign(payload,app.get('key'),{
            expiresIn:'7d'
        });
        res.json({
            message:'Autenticacion exitosa',
            token:token
        });
    }else{
        res.json({
            message:'Usuario y/o password son incorrectas'
        })
    }*/

}








//------------------------------------------------------------------------------------------------------------------------------------------





//actualizar usuario

 
  const actualizarUsuario =(req,res)=>{
    let user= req.params.id;
    res.send('<h1 style="color:red">Usuario ${user} actualizado </h1>');
 

MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
    if (err) throw err;
    
    let dbo= db.db('TiendaOnline');
    let paraActualizar ={
        email: 'valetheangel95@gmail.com',
        password:'1228'
    }
    
    let datoActualizado= {
        $set:{
            email:'nombre_apellido@gmail.com',
            password:'1653'
    
        }
    };
    
    
    
     await dbo.collection('clientes').updateOne( paraActualizar,datoActualizado,(err,res)=>{
        if (err) throw err,
    console.log(`documento actualizado en la coleccion clientes`);
    db.close();
     });
    });


}
//--------------------------------------------------------------------------------------------------------------------------------------------

//eliminar usuario




const eliminarUsuario = (req,res)=>{
    let user = req.params.id;
    res.send(`<h1 style="color:red">Usuario eliminado ${user}</h1>`);


    MongoClient.connect(MONGO_URL_LOCAL, async(err,db)=>{
        if (err) throw err;
        
        let dbo= db.db('TiendaOnline');
        let paraEliminar ={
            email: 'valetheangel95@gmail.com',
            password:'1228'
        }
        
         await dbo.collection('clientes').deleteOne( paraEliminar,(err,res)=>{
            if (err) throw err,
        console.log(`datos eliminados en la coleccion clientes`);
        db.close();
         });
        });
    
}










module.exports= {
    usuarios,
    login,
    loginUsuario,
    actualizarUsuario,
    eliminarUsuario
}
  