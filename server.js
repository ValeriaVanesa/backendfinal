const express = require('express');
const app = express();
const dotenv= require('dotenv');
dotenv.config();
const cors = require('cors');
const bcrypt=require('bcrypt');
const path= require('path');
const jwt=require('./jwt');
const jsonwtoken = require ('jsonwebtoken');
require('./database/conexion');
const cliente= require('./models/usersModels');
//const session= require('express-session');
//const FileStore = require('session-file-store')(session);
const clave = process.env.SESSION_SECRET;

const infoCompraRoutes= require('./router/infoCompraRoutes');
const condicionesRoutes = require('./router/condicionesRoutes');
const calzadosRoutes = require('./router/calzadosRoutes');
const politicaPrivacidadRoutes = require('./router/politicaPrivacidadRoutes');
const bolsosRoutes = require('./router/bolsosRoutes');
const perfumesRoutes = require('./router/perfumesRoutes');
const bolsoCoralRoutes = require('./router/bolsoCoralRoutes');
const bolsoBrownRoutes = require('./router/bolsoBrownRoutes');
const mochilaBlackRoutes = require('./router/mochilaBlackRoutes');
const zapatillaConverseRoutes = require('./router/zapatillaConverseRoutes');
const shoesvansblackRoutes = require('./router/shoesvansblackRoutes');
const zapatillaVansBordoRoutes = require('./router/zapatillaVansBordoRoutes');
const botaVansRoutes = require('./router/botaVansRoutes');
const zapatillaVansAzulRoutes = require('./router/zapatillaVansAzulRoutes');
const mochilaLVRoutes = require('./router/mochilaLVRoutes');
const mochilaPinkRoutes = require('./router/mochilaPinkRoutes');
const carteraWhiteRoutes = require('./router/carteraWhiteRoutes');
const perfumeTeaseRoutes = require('./router/perfumeTeaseRoutes');
const perfumeBomshellRoutes = require('./router/perfumeBombshellRoutes');
const perfumeBlushRoutes=require('./router/perfumeBlushRoutes');
const perfumeLancomeRoutes=require('./router/perfumeLancomeRoutes');
const perfumeMomParisRoutes=require('./router/perfumeMomParisRoutes');
const perfumeMarcJacobsRoutes=require('./router/perfumeMarcJacobsRoutes');




const usersRoutes = require('./router/userRouter');

const compraRoutes = require('./router/compraRoutes');
const contactoRoutes = require('./router/contactoRoutes');
const cuentaRoutes = require('./router/cuentaRoutes');
const indexRoutes = require('./router/indexRoutes');



const PORT = process.env.PORT;



app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));


/*

 //UTILIZAMOS EL MIDELWARE DE LA SESSION
 app.use(session({
    store: new FileStore({path:'./sessions',ttl:60}),
    secret: clave,
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:60
    }
 }))


app.get('/',(req,res)=>{
   if(req.session){
return res.json({
    session:req.session,

});
} 
});

//destroy de la session

app.get('/borrar',(req,res)=>{
    req.session.destroy(err =>{
        if (err) return res.json({mensaje:'error'})
        else return res.json({mensaje:'Adios'})
    })
})






app.use('/infoCompra',infoCompraRoutes);
app.use('/politicaPrivacidad',politicaPrivacidadRoutes)
app.use('/condiciones',condicionesRoutes)
app.use('/calzados',calzadosRoutes);
app.use('/bolsos',bolsosRoutes);
app.use('/perfumes',perfumesRoutes);
app.use('/carteraCoral',bolsoCoralRoutes);
app.use('/bolsoBrown',bolsoBrownRoutes);
app.use ('/mochilaBlack',mochilaBlackRoutes);
app.use('/zapatillaConverse',zapatillaConverseRoutes);
app.use('/zapatillanegraVans',shoesvansblackRoutes);
app.use('/vansBordo',zapatillaVansBordoRoutes);
app.use('/botaVans',botaVansRoutes);
app.use('/vansAzul',zapatillaVansAzulRoutes);
app.use('/mochilaLV',mochilaLVRoutes);
app.use('/mochilaPink',mochilaPinkRoutes);
app.use('/carteraWhite',carteraWhiteRoutes);
app.use('/perfumeTease',perfumeTeaseRoutes);
app.use('/perfumeBombshell',perfumeBomshellRoutes);
app.use('/perfumeBlush',perfumeBlushRoutes);
app.use('/perfumeLancome',perfumeLancomeRoutes);
app.use('/perfumeMomParis',perfumeMomParisRoutes);
app.use('/perfumeMarcJacobs',perfumeMarcJacobsRoutes);




app.use('/users', usersRoutes);
app.use('/inicio',indexRoutes);
app.use('/compra',compraRoutes);
app.use('/contacto',contactoRoutes);
app.use('/cuenta', cuentaRoutes);











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





app.post('/cuenta',(req,res)=>{
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



*/

app.listen(PORT,(err)=>{
    if(err) {throw err}
    console.log(`servidor corriendo en el puerto:  ${PORT}`);
});
