

$(document).ready(function(){
    $("#btn-suscripcion").click (async function (e){
        e.preventDefault();
    
   const email = document.getElementById('email');

   const regexEmail = new RegExp("[^@\s]+@[^@\s]+\.[^@\s]+");

 let validacion;
 validacion = validar(email, regexEmail);
      if (!validacion) return false;

      let data = {
   
        email: email.value
     };

     let url = '/index.html/nuevoSuscriptor';

let response = await inicio (url,data);

if(response.error == true){
    if(response.code == 1){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: response.message
         });
    }
}else if (response.error == false) {
    Swal.fire({
       position: 'center',
       icon: 'success',
       title: response.message,
       showConfirmButton: false,
       timer: 2500
    });

}
});
});
const validar = (input, expreg) => { 

    let resultado = expreg.test(input.value)  
    console.log(input);
    
    if (!resultado) {
       input.classList.remove('inputSuccess');
       input.classList.add('inputError');
       input.focus();
       Swal.fire({
          title: "Error",
          text: `El campo ${input.id.toUpperCase()} no tiene un formato válido`,
          icon: "error",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#FD5D9D",
       })
       return false;
    } else {
       input.classList.remove('inputError');
       input.classList.add('inputSuccess');
       return true;
    }
 }
 
 const crearCuenta = async (url, data) => {
 
    const response = await fetch(url, {
       method: 'POST',
       cache: 'no-cache',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data)
    });
    const responseJson = await response.json();
    return responseJson;
  }