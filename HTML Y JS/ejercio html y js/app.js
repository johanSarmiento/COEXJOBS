//declara variables y array
let numUno,NumDos,sumaNums=[]
//funcion que captura datos de texto 
captura = () => {
//for para que pedir diferente areas
    numUno=document.getElementById("numUno");
    NumDos=document.getElementById("numDos");
    if (numUno.value>0 && NumDos.value>0) {
        calcular(numUno,NumDos)
    }else{
        alert("error, ingrese un dato")
        document.getElementById("numUno").focus();
    }
}
//funcion para hacer la suma de los numeros
calcular = (numUno,numDos) => {
    let suma= parseFloat(numUno.value) + parseFloat(numDos.value) 
    //guardamos las sumas en un array
    sumaNums.push(suma)
    //mostrando en el html
    let mostrar=document.getElementById(`opcion`)
    mostrar.innerHTML= `la suma de los numeros es: ${sumaNums}`
    // console.log(suma);
}



