//declarando variables y array
/*let valorVenta=0,valorTotalVentas,ValorMaximo,ValorMinimo
const filiales=[]
//for para repetir los 12 meses de la semana
for(let i=0;i<12;i++){
    //pedir datos
    valorVenta=parseInt(prompt("ingrese el valor de la venta del mes "+(i+1)))
    //condicion para que no puedan ingresar un negativo
    if (valorVenta>0) {
        filiales.push(valorVenta)
    }else{
        alert("error, ingrese una dato mayor que cero")
        i--
    }
}
//hallamos el valor total de las ventas
valorTotalVentas=filiales.reduce((a,b)=> a+b)
//hallar el mes que mas se vendio
for(let i=0;i<12;i++){
    mayor=filiales[0]
    if (filiales[i]>mayor) {
        mayor=filiales[i]
        ValorMaximo=i+1
    }
}
//haller el mes que mes qu mesnos se vendio
for(let i=0;i<12;i++){
    menor=filiales[0]
    if (filiales[i]<menor) {
        menor=filiales[i]
        ValorMinimo=i+1

    }
}
//mostrando datos
filiales.forEach((x,i)=>console.log("el mes "+i+" tuvo un valor de "+x))
console.log("el mes que mas tuvo ventas fue el "+ValorMaximo);
console.log("el mes que menos tuvo ventas fue el "+ValorMinimo);
console.log("el valor total de las ventas es: "+valorTotalVentas);

*/
/*let opt, num1=0,num2=0,suma=0,resta=0,mul=0,div=0,salir=false
do {
    opt=parseInt(prompt("1. sumar \n 2. restas \n3. multiplicacion \n4. dividir"))
    switch (opt) {
        case 1:
            num1=parseInt(prompt("Ingrese un el primer numero para sumar"))
            num2=parseInt(prompt("Ingrese un el segundo numero para sumar"))
            suma=num1+num2;
            alert("la suma es: "+suma)
            break;
        case 2:
            num1=parseInt(prompt("Ingrese un el primer numero para restar"))
            num2=parseInt(prompt("Ingrese un el segundo numero para restar"))
            resta=num1-num2;
            alert("la suma es: "+resta)
            break;
        case 3:
            num1=parseInt(prompt("Ingrese un el primer numero para multiplicar"))
            num2=parseInt(prompt("Ingrese un el segundo numero para multiplicar"))
            mul=num1*num2;
            alert("la suma es: "+mul)
            break;
        case 4:
            num1=parseInt(prompt("Ingrese un el primer numero para dividir"))
            num2=parseInt(prompt("Ingrese un el segundo numero para dividir"))
            if (num2>0 && num1>0) {
                div=num1/num2;
                alert("la suma es: "+div)
            }else{
                alert("error, no se puede dividir po cero")
            }
        break;
        case 0:
            salir=true
            break;
        default:
            alert("error, opcion no encontrada")
            break;
    }
} while (opt!==0);*/
//declaramos variables
/*let array1=[],array2=[],array3=[]
//llenar el primer arreglo
for(let i=0;i<10;i++){
    array1[i]=Math.floor((Math.random()*(9-0)+0))
}
//llenar el segundo arreglo
for(let a=0;a<10;a++){
    array2[a]=Math.floor((Math.random()*(99-10)+10))
}
//llenar el tercer arreglo
for(let b=0;b<10;b++){
    array3[b]=Math.floor((Math.random()*(999-100)+100))
}
console.log(array1);
console.log(array2);
console.log(array3);*/

/*let max,min,array1=[]
max=parseInt(prompt("ingrese el el limite de los numero"))
min=parseInt(prompt("ingrese el el inicio de los numero"))

function llenarArray(array,max,min) {
    for(let i=0;i<10;i++){
        array.push(Math.floor(Math.random()*(max-min)+min))
    }
    console.log(array);
}

llenarArray(array1,max,min)*/
/*let array=[1,2,3,4,5],salir=false
let buscar=parseInt(prompt("ingrese el numero que quieres iliminar"))
for(let x of array){
    if (buscar==x) {
        delete array[buscar]
        salir=true
        break;
    }
}
if (salir==true) {
    console.log("el numero eliminado es: "+buscar);
    console.log(array);
}else{
    alert("error, el numero que quieres borrar, no se encuentra en el arreglo")
}*/





/*let numeros=[1,2,3,4,5],salir2=false,indice
let buscar=parseInt(prompt("ingrese el numero que quieres iliminar"))
indice=numeros.findIndex((x)=>buscar==x)
for(let i=0;i<5;i++){
    if (buscar==numeros[i]) {
        delete numeros[indice]
        salir2=true
    }
}
if (salir2==true) {
    console.log("el numero eliminado es: "+buscar);
    console.log(numeros);
}else{
    alert("error, el numero que quieres borrar, no se encuentra en el arreglo")
}*/

let salpinco=[1,2,3,["a","b","c"],4]
