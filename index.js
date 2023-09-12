function ValidateForm(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

    if(name == ""){
      alert("Nombre es Requerido")
      return false;
    }

    if(email == ""){
      alert("Correo es Requerido")
      return false;
    }
    elseif(!email.inludes("@")){
      alert("Direccion invalida");
      return false;
    }

}

