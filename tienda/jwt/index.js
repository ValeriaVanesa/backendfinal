const clientes = [];
app.post('/users',(req,res)=>{
    const {email, password}=req.body
    console.log(`Los datos recibidos son email: ${email} y contraseña: ${password}`);
    let cliente = clientes.find(cliente => cliente.email== email);
    console.log(`cliente:${cliente}`);

try{


    if (cliente){
        let login = cliente.password == password && cliente.email == email;
        console.log(`login: ${login}`);
        if(login){
          const token = jwt.crearToken(email, password)
           console.log( `token generado es : ${token}`)



           
          res.header('auth-token',token).send({
              email:email
          });



        }else{
          return res.json({
          mensaje:"error en el login"
          })
        }
    }else{
        return res.json ({
            mensaje:'usted no esta registrado'
        })
    }
}catch(err){
   return res.json({
        mensaje: "estamos trabajando en solucionar el problema"
    })
}



})

app.post('/',(req,res)=>{
    const {email, password}=req.body
    clientes.push({
        email:email,
        password:password


     })
     for (let i = 0; i < clientes.length; i++) {
        console.log(clientes[i]);
        
    }
});

app.get('/datos',jwt.auth,(req,res)=>{
res.json({
    datos:'tenemos tu token'
})
})
