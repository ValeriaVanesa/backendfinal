

const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const Productos= require('../models/compraModels');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;

const mongoose = require('mongoose');

//crear compra
/*
const nuevaCompra = async(req,res)=>{


    let { Productos } = req.body;


    let nombreProductos = ""
    let precioTotal = 0

   Productos.forEach((product) =>{
        nombreProductos += product.nombre.trim() + ` $ ${product.precio} (${product.cantidad})`
        precioTotal = precioTotal + (product.precio * product.cantidad)
     });

    
    
        let infoCompra = {
          compra: nombreProductos,
           precioTotal: precioTotal

    
       };
        
         await('Productos' ).insertOne(infoCompra,(err,res)=>{
            if (err) throw err,
        console.log(`Informacion insertada en la coleccion productos:${res}`);
        db.close();
         });
    
    

    console.log(`Compra realizada... 
    ${nombreProductos}
    Precio total = $ ${precioTotal}
    `);
    
    if( productos.length > 0 ){
      res.redirect('compraRealizada.html');
    }else{ 
        console.log('Error en la compra');
       res.redirect('error.html');
    }
    
}

        
        





*/

const nuevaCompra =(req,res)=>{

    let { productos } = req.body;

    productos = JSON.parse(productos)

    let nombreProductos = ""
    let precioTotal = 0

    productos.forEach((product) =>{
        nombreProductos += product.nombre.trim() + ` $ ${product.precio} (${product.cantidad})\n`
        precioTotal = precioTotal + (product.precio * product.cantidad)
     });



    MongoClient.connect(MONGO_URL_ATLAS, async(err,db)=>{
        if (err) throw err;
       
        let dbo= db.db('TiendaOnline');

    
        let infoCompra = {
          compra: nombreProductos,
           precioTotal: precioTotal

    
       };
        
         await dbo.collection('Productos' ).insertOne(infoCompra,(err,res)=>{
            if (err) throw err,
        console.log(`Informacion insertada en la coleccion productos:${res}`);
        db.close();
         });
        });
    

    console.log(`Compra realizada... 
    ${nombreProductos}
    Precio total = $ ${precioTotal}
    `);
    
    if( productos.length > 0 ){
      res.redirect('compraRealizada.html');
    }else{ 
        console.log('Error en la compra');
       res.redirect('error.html');
    }
    
}


//actualizar compra-------------------------------------------------------------------
const actualizarCompra = async(id)=>{
    const datosCompra= await Productos.updateOne({_id:id},
      
        {
         
            $set:{
                compra: 'Zapatilla Vans $13900 (1)',
                precioTotal: '13900'
        
        

          }
        })

    }
actualizarCompra('6539cb094e67e0fe78196110');
/*
const actualizarCompra =(req,res)=>{
    let user= req.params.id;
    res.send(`<h1 style="color:green">Compra ${user} actualizada </h1>`);

    let { productos } = req.body;

    productos = JSON.parse(productos)

    let nombreProductos = ""
    let precioTotal = 0

    productos.forEach((product) =>{
        nombreProductos += product.nombre.trim() + ` $ ${product.precio} (${product.cantidad})\n`
        precioTotal = precioTotal + (product.precio * product.cantidad)
     });


MongoClient.connect(MONGO_URL_ATLAS, async(err,db)=>{
    if (err) throw err;
    
    let dbo= db.db('TiendaOnline');
    let paraActualizar ={
            compra: "Zapatilla Vans $ 13900 (1), Bota Vans $ 14900 (1) ",
           precioTotal: '28800'
    }
    
    let datoActualizado= {
        $set:{
            compra: 'Zapatilla Vans $13900 (1)',
            precioTotal: '13900'
    
        }
    };
    
    
    
     await dbo.collection('Productos').updateOne( paraActualizar,datoActualizado,(err,res)=>{
        if (err) throw err,
    console.log(`documento actualizado en la coleccion clientes`);
    db.close();
     });
    });




console.log(`Compra actualizada..
${nombreProductos}
Precio total = $ ${precioTotal}
`);

if( productos.length > 0 ){
  res.redirect('compraRealizada.html');
}else{ 
    console.log('Error al eliminar la compra');
   res.redirect('error.html');
}

}
*/

//eliminar compra-----------------------------------------------------------------------
const eliminarCompra = async(id)=>{
    const datosCompra = await Productos.deleteOne({_id:id})
    console.log(datosCompra)
    }
    eliminarCompra('6539838271d26d4ce483fde2');
    

 /*   
const eliminarCompra = (req,res)=>{
    let user = req.params.id;
    res.send(`<h1 style="color:red">Compra eliminada ${user}</h1>`);


    MongoClient.connect(MONGO_URL_ATLAS, async(err,db)=>{
        if (err) throw err;
        
        let dbo= db.db('TiendaOnline');
        let paraEliminar ={
            compra: "Zapatilla Vans $ 13900 (1), Bota Vans $ 14900 (1) ",
           precioTotal: "28800"
          
        }
        
         await dbo.collection('Productos').deleteOne( paraEliminar,(err,res)=>{
            if (err) throw err,
        console.log(`datos eliminados en la coleccion clientes`);
        db.close();
         });
        });



    }


*/








module.exports= {
    nuevaCompra,
    actualizarCompra,
    eliminarCompra
   
}
