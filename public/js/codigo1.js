
//suscripcion 
/*
let form=document.querySelector("form")
let input=document.querySelector("input")
let eventoRemover= document.getElementById("btn-suscripcion")

let remover= function(e){
    eventoRemover.removeEventListener("click", remover);
    eventoRemover.disabled=true;
}


form.addEventListener("submit", (e)=>{
e.preventDefault()
let valor=input.value
let valor_trim=valor.trim()
let longitud=valor_trim.length
console.log(encodeURIComponent(valor_trim))

if(longitud>10){
    Swal.fire({
        title:"Bienvenido!",
        text:"Gracias por suscribirte a las noticias",
        icon:"success",
        confirmButtonText:"Aceptar",
        confirmButtonColor:"#FD5D9D",
     });

remover();
}
else{
    Swal.fire({
      
        text:"Aun hay campos sin completar y /o no validos",
         icon:"error",
         confirmButtonText:"Aceptar",
        confirmButtonColor:"#FD5D9D",
     });
}

})

*/

