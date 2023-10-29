const express = require('express');
const app = express();
const dotenv= require('dotenv');
dotenv.config();
const cors = require('cors');

const bcrypt=require('bcrypt');
const path= require('path');
const usersRoutes = require('./router/userRouter');
const jwt=require('./jwt');
const suscripcionRoutes = require('./router/suscripcionRoutes');
const compraRoutes = require('./router/compraRoutes');
const contactoRoutes = require('./router/contactoRoutes');

const crearCuentaRoutes = require('./router/crearCuentaRoutes');
const { fork } = require('child_process');


const PORT = process.env.PORT;
/*
let corsoption ={
    "origin" :'http://localhost:5000',
    "methods": "GET,HEAD,PUT,POST,DELETE",
    
}*/
require('./database/conexion');



const clientes=[];




app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));







app.use('/users', usersRoutes);

app.use('/suscripcion',suscripcionRoutes);
app.use('/compra',compraRoutes);
app.use('/contacto',contactoRoutes);
app.use('/crearcuenta', crearCuentaRoutes);








app.get('/',(req,res)=>{


res.sendFile('index.html');
});







app.post('/users',(req,res)=>{
    const {email, password} = req.body;
    console.log(`Los datos recibidos son ${email} y ${password}`);

    let cliente= clientes.find(cliente => cliente.email == email);
    console.log(`cliente:${cliente}`);

    try{
        if(cliente){

            let login = cliente.password == password && cliente.email == email;
            console.log(`login:${login}`);
            if(login){
                const token = jwt.crearToken(email)
                console.log(`el token generado es ${token}`);
                res.header('auth-token',token).send({email });
            }else{
               return res.json({
                    mensaje:"error en el login"
                })
            }
            }else{
             return   res.json({
                    mensaje:"usted no esta registrado"
                })
            }
    }catch(error){
       return res.json({
            mensaje:"Hay un problema "
        })
    }
    
        
   
});


app.post('/crearcuenta',(req,res)=>{
    const {email,password}= req.body
    clientes.push({
        email:email, password:password
        });
        
        
        for (let i = 0 ; i < clientes.lengt; i++) {
            console.log(clientes[i]);
            
        }
        res.send('los datos han sido registrados');
})

app.get('/datos',jwt.auth,(req,res)=>{
    res.json({
        datos:"Tenemos tu token"
    })
})











app.listen(PORT,(err)=>{
    if(err) {throw err}
    console.log(`servidor corriendo en el puerto:  ${PORT}`);
});