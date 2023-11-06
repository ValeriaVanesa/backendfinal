const express = require('express');
const app = express();
const dotenv= require('dotenv');
dotenv.config();
const cors = require('cors');

const path= require('path');

require('./database/conexion');
const cliente= require('./models/usersModels');
const session= require('express-session');
const FileStore = require('session-file-store')(session);


const infoCompraRoutes= require('./router/usuario/infoCompraRoutes');
const condicionesRoutes = require('./router/usuario/condicionesRoutes');
const calzadosRoutes = require('./router/productos/calzadosRoutes');
const politicaPrivacidadRoutes = require('./router/usuario/politicaPrivacidadRoutes');
const bolsosRoutes = require('./router/productos/bolsosRoutes');
const perfumesRoutes = require('./router/productos/perfumesRoutes');
const bolsoCoralRoutes = require('./router/productos/bolsoCoralRoutes');
const bolsoBrownRoutes = require('./router/productos/bolsoBrownRoutes');
const mochilaBlackRoutes = require('./router/productos/mochilaBlackRoutes');
const zapatillaConverseRoutes = require('./router/productos/zapatillaConverseRoutes');
const shoesvansblackRoutes = require('./router/productos/shoesvansblackRoutes');
const zapatillaVansBordoRoutes = require('./router/productos/zapatillaVansBordoRoutes');
const botaVansRoutes = require('./router/productos/botaVansRoutes');
const zapatillaVansAzulRoutes = require('./router/productos/zapatillaVansAzulRoutes');
const mochilaLVRoutes = require('./router/productos/mochilaLVRoutes');
const mochilaPinkRoutes = require('./router/productos/mochilaPinkRoutes');
const carteraWhiteRoutes = require('./router/productos/carteraWhiteRoutes');
const perfumeTeaseRoutes = require('./router/productos/perfumeTeaseRoutes');
const perfumeBomshellRoutes = require('./router/productos/perfumeBombshellRoutes');
const perfumeBlushRoutes=require('./router/productos/perfumeBlushRoutes');
const perfumeLancomeRoutes=require('./router/productos/perfumeLancomeRoutes');
const perfumeMomParisRoutes=require('./router/productos/perfumeMomParisRoutes');
const perfumeMarcJacobsRoutes=require('./router/productos/perfumeMarcJacobsRoutes');


const usersRoutes = require('./router/usuario/userRouter');

const compraRoutes = require('./router/usuario/compraRoutes');
const contactoRoutes = require('./router/usuario/contactoRoutes');
const cuentaRoutes = require('./router/usuario/cuentaRoutes');
const indexRoutes = require('./router/usuario/indexRoutes');
const loginRoutes = require('./router/usuario/loginRoutes');


const PORT = process.env.PORT;



app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));



/*
 //UTILIZAMOS EL MIDELWARE DE LA SESSION
 app.use(session({
     secret: 'misession_secreta',
    saveUninitialized:false,
    name:'secret-name',
    resave:false,
    //store: new FileStore({path:'./sessions',ttl:60}),
    cookie:{
       expires:600000
    }
 }))


app.get('/ruta-protegida',(req,res)=>{
res.json(req.session.usuario || "Sin sesión de usuario")

});

app.get("/crear-session",(req, res)=>{
    req.session.usuario = "bluuweb";
    res.redirect("/ruta-protegida");
})

app.get('/destruir-session',(req,res)=>{
    req.session.destroy();
    res.redirect('/ruta-protegida')
})
*/






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
app.use('/',loginRoutes)
app.use('/inicio',indexRoutes);
app.use('/compra',compraRoutes);
app.use('/contacto',contactoRoutes);
app.use('/cuenta', cuentaRoutes);


/*
app.get('/',(req,res)=>{
res.sendFile('index.html')
})*/



app.listen(PORT,(err)=>{
    if(err) {throw err}
    console.log(`servidor corriendo en el puerto:  ${PORT}`);
});
