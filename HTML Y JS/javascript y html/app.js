//EJEMPLO 1 CREANDO LISTA HTML
const opciones=[`modulo 1`,`modulo 2`,`modulo 3`,`modulo 4`]
function generarListaOrdenada(vec) {
    let s= ``; 
    function comienzo() {
        s=`<ol>`    
    }
    function fin() {
        s= s+`</ol>`
    }
    //EJERCUTAR JUNCION COMIENZO
    comienzo();
    //LLENAR LA LISTA <OL>
    for(let f=0;f<vec.length;f++){
        s= s+'<li>'+vec[f]+'</li>'
    }
    //EJERCUTAR FIN
    fin();
    return s 
}
document.getElementById('div1').innerHTML=
generarListaOrdenada(opciones)
//EJEMPLO 2 
const numPrueba=[2,4,6,8,10,12]

function generarDiv(Elemento,arr) {
    arr.forEach((valor,i) => {
        document.getElementById(Elemento).innerHTML+=`<div> ${valor} </div>`;
    });
}
generarDiv('array1',numPrueba)

// SUMAR DOS NUMEROS
function calcular() {
    let numUno= parseFloat(document.getElementById("n1").value),
    numDos=parseFloat(document.getElementById("n2").value);
    let resul = numUno+numDos;
    verificar(numUno,numDos,"rtaSuma",resul)
} 
// CALCULADORA
//funcion verificar
function verificar(numV1,numV2,Elemento,resultado) {
    if (isNaN(numV1) || isNaN(numV2)) {
        alert(`ingrese los numeros`)
        resultado = "no ingreso numeros"
        document.getElementById(Elemento).value=resultado
    }else{
        document.getElementById(Elemento).value=resultado
    }
}

function sumar() {
    let num1=parseInt(document.getElementById("num1").value),
    num2=parseInt(document.getElementById("num2").value)
    btncalculadora.addEventListener("click",function () {
        let resulS=num1+num2;
        verificar(num1,num2,"FormRes",resulS)
    })
}
function resta() {
    let num1=parseInt(document.getElementById("num1").value),
    num2=parseInt(document.getElementById("num2").value)
    btncalculadora.addEventListener("click",function () {
        let resulR=num1-num2;
        verificar(num1,num2,"FormRes",resulR)        
    })
    
}
function mul() {
    let num1=parseInt(document.getElementById("num1").value),
    num2=parseInt(document.getElementById("num2").value)
    btncalculadora.addEventListener("click",function () {
        let resulM=num1*num2;
        verificar(num1,num2,"FormRes",resulM)      
    })

}
function div() {
    let num1=parseInt(document.getElementById("num1").value),
    num2=parseInt(document.getElementById("num2").value)
    if (num1==0 || num2==0) {
        alert("no se puede dividir por cero")
    }else{
        btncalculadora.addEventListener("click",function () {
            btncalculadora.addEventListener("click",function () {
                let resulM=num1/num2;
                verificar(num1,num2,"FormRes",resulM)      
            })    
        })
    }
}



function hola() {
    let numCont=parseInt(document.getElementById("cont").value)
    let miTiempo=setTimeout(hola,numCont)
    if (numCont>=0) {
        
    }
    console.log(numCont)
    // document.getElementById("salidaCont").value=numCont
}
