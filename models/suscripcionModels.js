const mongoose = require('mongoose');
const {Schema} = require ('mongoose');
const bcrypt = require ('bcrypt');


const suscripcionSchema= new Schema({

email:{
    type:String,
    required:true
},

timestamp:{
    type:Date,
    default:Date.now()
}


});


const suscripciones = mongoose.model('suscripciones',suscripcionSchema);
module.exports = suscripciones;