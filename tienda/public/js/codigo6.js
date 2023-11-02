



/*

   $("#button2").click(function (e) {
      e.preventDefault();
      //validar inputs
      
      const nombre = document.getElementById("nombre");
      const apellido = document.getElementById("apellido");
      const checkbox = document.getElementById("checkbox");
      const fechaNacimiento= document.getElementById("fechaNacimiento");
      const dni= document.getElementById("dni");
      const email =document.getElementById("email");
      const contraseña =document.getElementById("contraseña");

      const regexNombre = new RegExp("^[a-zA-Z]{4,16}$");
      const regexApellido = new RegExp("^[a-zA-Z]{4,16}$");
      const regexDni=new RegExp("^[0-9]{8,8}");
      const regexEmail=new RegExp("[^@\s]+@[^@\s]+\.[^@\s]+");
      const regexContraseña= new RegExp("^[a-zA-Z]{4,16}$");
     

      let validacion;
      validacion = validar(nombre, regexNombre);
      if (!validacion) return false;
      validacion = validar(apellido, regexApellido);
      if (!validacion) return false;
      validacion = validar(dni, regexDni);
      if (!validacion) return false;
      validacion = validar(email, regexEmail);
      if (!validacion) return false;
      validacion = validar(contraseña, regexContraseña);
      if (!validacion) return false;

      //envio el formulario
      
       $("#div_mensaje_enviando").show();
       $("#loading_form ").show();

       setTimeout(() => {
          $("#div_mensaje_enviando").hide();
          $("#loading_form ").hide();
          $(".form").submit();
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
   } else {
      input.classList.remove('inputError');
      input.classList.add('inputSuccess');
      return true;
   }
}
*/