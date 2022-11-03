//creacion de array, para guardar el sueldo de los trabajadores
let sueldo=[]
//funcion para pedir datos
function guardarDatos(sueldo) {
    //creacion de for para pedir datos
    for(let i=0;i<5;i++){
        let sueldoTrabajador=parseInt(prompt("ingrese el sueldo del trabajador "+(i+1)))
        //condicino para que no pueda ingresar negativos
        if (sueldoTrabajador>0) {
            //guardamos datos si la condicon se cumple, con el metodo push
            sueldo.push(sueldoTrabajador)
        }else{
            //le restamos una vuleta al for si entra un dato es incorrecto
            alert("error, ingrese datos correcto")
            i--
        }
      
    }
}
//funcion para calcular el promedio de la nomina
function calculaNomina(sueldo) {
    //sumaos todos los sueldo de los empleados
   return sueldo.reduce((a,b)=>a+b)
}
//llamamos a las funciones
guardarDatos(sueldo)
console.log(`la monina total de la empresa es ${calculaNomina(sueldo)}`)

