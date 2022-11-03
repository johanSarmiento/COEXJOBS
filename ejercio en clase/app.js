//creamos array 
let notas=[]
//creacion de funcion para guardar datos
function pedirNotas(notas) {
    for(let i=0;i<3;i++){
        let pedirNotas
        pedirNotas=parseInt(prompt("ingrese la nota "+(i+1)))
        if (pedirNotas>0 && pedirNotas<=5) {
            notas.push(pedirNotas)
        }else{
            alert(`error, ingrese bien las notas `)
            i--
        }
    }
}
//creacion de funcion para sacar el promedio
function mostrarNotas(notas) {
    let sumaPromedio,promedio
    sumaPromedio=notas.reduce((a,b)=>a+b)
    promedio=sumaPromedio/notas.length
    //condicion para saber saber si paso
    if (promedio>4) {
        alert("el estudiante aprovo ")
    }else if (promedio>=3) {
        alert("el estudiante paso con aceptable")
    }else{
        alert("el estudiante reprobo")
    }
}
//llamamos a las variables
pedirNotas(notas)
mostrarNotas(notas)