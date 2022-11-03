function validarVacios() {
    let nombre=document.getElementById("Nombre").value
    let apellido=document.getElementById("Apellido").value
    let correo=document.getElementById("Email").value
    let numero=document.getElementById("Numero").value
    let ValidarLetra =  /[a-zA-Z0]/
    let validarCorreo= /[a-zA-Z]@dominio.com/
    let validarNumero=/^3\d{9}$/

    if (isNaN(nombre)&&isNaN(apellido)&&isNaN(correo)&&numero.length>0) {
        document.getElementById("RTAModal").innerHTML="CORRECTO"

    }else{
        document.getElementById("RTAModal").innerHTML="llene todos los campos"
    } 

    if (ValidarLetra.test(nombre) && nombre.length<=50) {
        document.getElementById("RTANombre").innerHTML="CORRECTO"
        
    }else{
        document.getElementById("RTANombre").innerHTML="INCORRECTO"
        
    }

    if (ValidarLetra.test(apellido) && apellido.length<=50) {
        document.getElementById("RTAApellido").innerHTML="CORRECTO"
    }else{  
        document.getElementById("RTAApellido").innerHTML="INCORRECTO"
    }
    
    if (validarCorreo.test(correo)) {
        document.getElementById("RTAEmail").innerHTML="CORRECTO"
    }else{
        document.getElementById("RTAEmail").innerHTML="INCORRECTO"
    }

    if (validarNumero.test(numero)) {
        document.getElementById("RTANumero").innerHTML="CORRECTO"
    }else{
        document.getElementById("RTAMumero").innerHTML="INCORRECTO"
    }

} 
function reset() {
    document.getElementById("miFrom").reset()
}