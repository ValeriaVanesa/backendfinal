const express = require('express');
const app = express();
require ('dotenv').config;
const path = require('path');
const cors = require('cors');
const bcrypt=require('bcrypt');


const userRouter = require('./router/userRouter');
const crearCuentaRoutes = require('./router/crearCuentaRoutes');

require('./database/conexion');

const PORT = process.env.PORT

app.use('/users', userRouter);
app.use('/crearcuenta', crearCuentaRoutes);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));




app.get('/',(req,res)=>{
    res.sendFile('index.html');
})
app.listen (PORT,(err)=>{
    if(err) throw err;
    console.log(`Server ir running on port ${process.env.PORT}`);
})











