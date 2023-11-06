const mongoose = require('mongoose');
const {Schema} = require ('mongoose');
const { nuevaCompra } = require('../models/compraModels');



const compraSchema= new Schema({

nombre:{
    type:String,
    required:true
},
precio:{
    type:Number,
    required:true
},
precioTotal:{
    type:Number,
    required:false
},
timestamp:{
    type:Date,
    default:Date.now()
}


});


const Productos = mongoose.model('Productos',compraSchema);
module.exports = Productos;