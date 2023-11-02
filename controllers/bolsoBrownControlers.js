const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const clientes= require('../models/usersModels');
const bcrypt = require('bcrypt');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;
const mongoose = require('mongoose');
const path = require('path');
require('../database/conexion');


function bolsoBrown(req,res){

    res.sendFile(path.resolve('public/index13.html'));


    
}



module.exports= {
   bolsoBrown

 }