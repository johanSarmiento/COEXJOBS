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
        //funcion para calcular y mostrar los datos que cuantos numero positivos hay
        function contNumeros(numeroPositivos) {
            //utilizamos el metodo filter para crear un arreglo y guardarlo en aux, para saber la cantidad de numeros positivos
            let aux=numeroPositivos.filter((x)=>x>0)
            //mostramos el dato, dependiendo la longitud de array
            alert("la cantidad de numeros positivos es: "+aux.length)
        }
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
        //llamamos a la funcion para hacer los calculos
        contNumeros(numeroPositivos);
            break;
        //punto 2-------------------------------------------------------------------------------------------------------------------
        case 2:
       //definir variables y Array
        let notas = [],cantNotas=0
        //funcion para calcular y mostrar el promedio de las notas
        function pedirNotas(notas) {
            //declara variables
            let cantNotas=0,nota=0
            //pedir la cantidad de notas
            cantNotas=parseInt(prompt("ingrese el numero de notas que quieres registrar"))
            //for para llenar el arreglo
            for(let i=0;i<cantNotas;i++){
                //pedir notas
                nota=parseInt(prompt("ingrese la nota "+(i+1)))
                if (nota>0) {
                    notas.push(nota)
                }else{
                    alert("error, ingrese un dato mayor que cero")
                    i--
                }
            }
            console.log(notas);
        }
        //funcion para calcular el promedio de las notas
        function promNotas(notas) {
            //declarando variables
            let sumaNotas,promedio=0,divProm=0
            //utilizamos el metodo reduce para sumar todas las notas
            sumaNotas=notas.reduce((a,b)=> a+b)
            console.log(sumaNotas);
            divProm=notas.length
            promedio=sumaNotas/divProm
            //mostrar datos
            alert("el promedio de los estudiante es: "+promedio)
            //
        }

        //llamamos la funcion de pedir notas
        pedirNotas(notas);
        //llamamos la funcion para calcular y mostrar el promedio
        promNotas(notas)
            break;
        // punto 3----------------------------------------------------------------------------------------------
        case 3:
        //definir variables 
        let numero=0
        const numericas=[]
        //funcion para buscar un numero en el arreglo 
        function buscarNumero(numericas) {
            //declara variables
            let buscar=0,salir=false,index
            buscar=parseInt(prompt("ingrese el numero que quiers buscar"))
            //buscar el numero con findIndex
            index=numericas.findIndex((x)=> x===buscar)
            if (index>=0 && index<10) {
                alert("el numero fue encontrado en la posicion "+index+" del arreglo")
            }else{
                alert("el valor no fue encontrado")
            }
        }
        //llenar el arreglo 
        for(let i=0;i<10;i++){
            //pidiendo los datos y llenando el arreglo con el metodo push
            numero=parseInt(prompt("ingrese un numero para llenar el arreglo "+(i+1)))
            numericas.push(numero)
        }

        buscarNumero(numericas)
            break;
        //punto 4-------------------------------------------------------------------------------------------------
        case 4:
            //declara variables y array
            let num =0,monto=0,cantUsuarios=0
            const deposito=[]
            //funcion para calcular el monto total
            function caltMonto(deposito) {
                //declarar variablres
                let sumaDeposito=0
                //utlizamos el metodo reduce, para calcular
                sumaDeposito=deposito.reduce((a,b)=>a+b)
                //mostramos el dato
                alert("los "+cantUsuarios+" de usuarios tiene un monto total de: "+sumaDeposito)
            }
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
            //llamamos la funcion de calcular datos
            caltMonto(deposito)
            break;
        //punto 5-------------------------------------------------------------------------------------------------
        case 5:
            let i=0,almacenador=[]
            //funcion para meter datos
            function GuardarDatos(almacenador) {
            //declarar variables
            let numTeclado
            //dicision para saber si es menor o mayor de 100
            do {
                numTeclado=parseInt(prompt("ingrese un numero cualquiera(ingrese cero para salir)"))
            if (numTeclado<100) {
                almacenador.unshift(numTeclado)
            }else if (numTeclado>=100) {
                almacenador.push(numTeclado)
            }
            } while (numTeclado!==0);
            }
            //llamamos la funcion para pedir los datos
            GuardarDatos(almacenador)
            //mostramos datos
            
            console.log("los numeros del arreglo es: "+almacenador)
            break;
        //punto 6--------------------------------------------------------------------------------------------------
        case 6:
         //declara variables y array
        let elementos=0,numPares=[],numImpares=[]
        //funcion para eliminar los numeros pares
        function eliminarPares(numPares) {
            //utilizar el metodo filter
            numImpares=numPares.filter((x)=> x%2!==0)
        }
        // for para llenar el arreglo 
        for(let i=0;i<10;i++){
            //condicion para que ingrese un numero mayor que cero
            elementos=parseInt(prompt("ingrese un numero "+(i+1)))
            if (elementos>0) {
                numPares.push(elementos)
            }else{
                alert("error, ingrese un numero mayor que cero")
                i--
            }
        }
        //llamamos a la funcion para eliminar pares
        eliminarPares(numPares)
        //mostramos datos
        alert("los resultados se muestran por consola")
        console.log("arreglo antes de eliminar los pares");
        numPares.forEach((a)=> console.log("el numero es: "+a))
        console.log("arreglo despues de eliminar los pares");
        numImpares.forEach((b)=> console.log("el numero es: "+b))
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