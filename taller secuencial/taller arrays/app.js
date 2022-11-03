//creacion dowhile y siwcht para el menu
let salir=false,opciones=0
do {
    //menu
    opciones=parseInt(prompt("1. punto\n2. punto\n3. punto\n4. punto\n5. punto\n6. punto\n0. salir"))
    switch (opciones) {
        case 1:
        //declara vector y variables
        let numeros=0,tamañoArreglo=0
        const numeroPositivos = []
        //verificar que no puedan ingresar dato negativos o ceros
        do {
            tamañoArreglo=parseInt(prompt("ingrese la cantidad de numeros que quieres ingresar"))
            //mostrar alerta, por si ingresa un numero igual o menor que cero
            if (tamañoArreglo<=0 ) {
                alert("error, ingrese un dato mayor que cero")
            }
        } while (tamañoArreglo<=0);
        //for para pedir los datos
        for(let i=0;i<tamañoArreglo;i++){
            //pedimos datos y lo almacenamos con el metodo push
            numeros=parseInt(prompt("ingrese numero en el arreglo"))
            //guardar datos en el array con push
            numeroPositivos.push(numeros)
        }
        //saber cuantos numero son mayores que cero y guardarlos en un nuevo arreglo 
        const aux=numeroPositivos.filter(x => x > 0) 
        //mostramos los datos, dependiendo de la longitud de arreglo aux
        alert("hay "+aux.length+" numeros positivos")
            break;
        //punto 2-------------------------------------------------------------------------------------------------------------------
        case 2:
            //definir variables y Array
            let nota=0,sumaPromedio=0,promedio=0
            const notas = []
            //for para llenar el arreglo
            for (let i=0;i<5;i++){
                //pedir la nota
                nota=parseInt(prompt("ingrese la nota "+(i+1)))
                //verificacion para no meter negativo o cero
                if (nota>0) {
                    //llenar el arreglo con push
                    notas.push(nota)
                }else{
                    //le retamos una vuelta al for
                    alert("error, ingrese una dato mayor que cero ")
                    i--
                }
            }
            // operacion realizadas por reduce del array notas
            sumaPromedio=notas.reduce((a,b) => a+b)
            //sacando promedio 
            promedio=sumaPromedio/notas.length
            alert("el promedio del estudiante es de: "+promedio);
            break;
        // punto 3----------------------------------------------------------------------------------------------
        case 3:
            //definir variables 
            let numero=0,buscar=0,salir=false,index=0
            const numericas=[]
            //llenar el arreglo 
            for(let i=0;i<10;i++){
                //pidiendo los datos y llenando el arreglo con el metodo push
                numero=parseInt(prompt("ingrese un numero para llenar el arreglo "+(i+1)))
                numericas.push(numero)
            }
            // mostrando los datos del arreglo
            numericas.forEach((x)=>console.log("el numero es: "+x))
            // buscando el numero ingresado
            buscar=parseInt(prompt("ingrese el numero que quiere buscar"))
            //utilizando el forEach para mirar el arreglo y saber si el numero que ingreso esta en el arreglo 
            salir=numericas.some(x=>x===buscar)
            //guardar el indice con el metodo findIndex 
            index=numericas.findIndex(x=>x===buscar)
            //miramos si la banderita es verdadera, para decir que el numero fue encontrado
            if (salir==true) {
                alert("el numero fue encontrado en la posicion "+index+" del arreglo")
            }else{
                alert("el numero no fue encontrado")
            }
            break;
        //punto 4-------------------------------------------------------------------------------------------------
        case 4:
            //declara variables y array
            let num =0,monto=0,sumaDeposito=0,cantUsuarios=0
            const deposito=[]
            //guardar datos en el arreglo con un ciclo do while 
            do {
                num=parseInt(prompt("ingrese el numero del cliente"))
                monto=parseInt(prompt("ingrese el monto del cliente"))
                //dicision para poder guardar los datos
                if (num>0 && monto>0) {
                    deposito[num]=monto
                    cantUsuarios++
                }
            } while (num!=0 && monto!=0);
            //haciendo la operacion de la suma de los montos
            sumaDeposito=deposito.reduce((a,b)=> a+b)
            // mostrando datos 
            alert("los resultados se muestran por consola")
            console.log("la cantidad de usuarion que ingresaron fueron "+cantUsuarios);
            console.log("la valor total del monto es de: "+sumaDeposito);
            break;
        //punto 5-------------------------------------------------------------------------------------------------
        case 5:
            //declara variables y array
            let numTeclado=0,i=0
            const almacenador=[]
            //llenar el arreglo con el metodo do while
            do {
                numTeclado=parseInt(prompt("ingrese un numero "+i++))
                //condicion para saber si el numero que ingreso en manor de 100 y guardarlo al inicio del arreglo
                if (numTeclado<100) {
                    almacenador.unshift(numTeclado)
                //condicion para saber si el numero que ingreso en mayor o igaul que 100
                }else if (numTeclado>=100) {
                    almacenador.push(numTeclado)
                }
            //mostrar el arreglo con el metodo forEach
            } while (numTeclado!==0); 
            alert("los resultados se muestran por la pagina")
            almacenador.forEach((x)=> document.write(" el numero es : "+x+"<br/>"))
            break;
        //punto 6--------------------------------------------------------------------------------------------------
        case 6:
            //declara variables y array
            let elementos=0
            const numPares=[]
            let numImpares=[]
            // for para llenar el arreglo 
            for(let i=0;i<10;i++){
                //condicion para que ingrese un numero mayor que cero
                elementos=parseInt(prompt("ingrese un numero "+(i+1)))
                if (elementos>0) {
                    numPares.push(elementos)
                }else{
                    alert("error, ingrese un")
                    i--
                }
            }
            //decion para saber los numero pares y eliminarlo
            numImpares = numPares.filter((x)=>x%2!==0)
            // mostrar datos con el metodo forEach
            alert("los resultados se muestran por consola")
            console.log("arreglo antes de eliminar los pares");
            numPares.forEach((x)=> console.log("el numero es: "+x))
            console.log("arreglo despues de eliminar los pares");
            numImpares.forEach((x)=> console.log("el numero es: "+x))
            break;
        case 0:
            //cambiando banderita
            salir=true
            break;
        default:
            alert("error, dato no encontrado")
            break;
    }
} while (salir==false);