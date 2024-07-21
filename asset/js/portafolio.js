$("#enviar").click(function(){
    var nombre = $("#nombre").val();
    var correo = $("#email").val();
    
    alert("Gracias por contactarme, " + nombre + ", pronto le respondere a: " + correo);
})