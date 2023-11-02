


/*

$("#loginSubmit").click(function (e) {
    e.preventDefault();



//Validar inputs


      const $email = document.getElementById("email");
      const $contraseña = document.getElementById("password");
    

      const regexContra = new RegExp("^[a-zA-Z]{4,16}$");
      const regexEmail = new RegExp("[^@\s]+@[^@\s]+\.[^@\s]+");


      let validacion;
      validacion = validar($email, regexEmail);
      if (!validacion) return false;
      validacion = validar($contraseña, regexContra);
      if (!validacion) return false;


      //envio el formulario
       $("#div_mensaje_enviando").show();
       $("#loading_form ").show();

       setTimeout(() => {
          $("#div_mensaje_enviando").hide();
          $("#loading_form ").hide();
          $("#form").submit();
       }, 5000);
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
      
   } 
   
   else {
      input.classList.remove('inputError');
      input.classList.add('inputSuccess');
      return true;
   }
 }
*/