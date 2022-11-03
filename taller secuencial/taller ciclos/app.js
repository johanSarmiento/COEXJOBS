//utilizando un dowhile y un swicht para crear el menu
//bandera para salir del menu
var salir = false
do {
    //opciones Menu
    let opciones=parseInt(prompt("1. punto\n2. punto\n3. punto\n4. punto\n5. punto\n6. punto\n7. punto\n8. punto\n9. punto\n10. punto\n11. punto\n12. punto\n0. salir"))
    //Menu
    switch (opciones) {
        //punto 1 ----------------------------------------------------------------------------------------------------------------------------
        case 1:
        //declaracion de variables
        let sumaNumeros=0,numeros=0
        //cracion de dowhile, se repite siempre que sea mayor a cero
        do {
            //pedir datos
            numeros=parseInt(prompt("ingrese numeros mayores que cero para sumarlos"))
            sumaNumeros+=numeros
        } while (numeros!=0);
            //mostrar datos
            alert("la suma de los nueros es de: "+sumaNumeros)
            break;
        //punto 2 ----------------------------------------------------------------------------------------------------------------------------
        case 2:
            alert("se muestra el resultado por consola")
            //declara variable
            let aletorio=0
            //cracion de dowhile, se repite siempre que sea mayor a cero
            do {
                //utlizando la extencion, para crear numero alaza 0 10
                aletorio = Math.floor(Math.random()*(10 - 0)) 
                console.log(aletorio);
            } while (aletorio!=0);
            break;
        //punto 3-------------------------------------------------------------------------------------------------------------------------------
        case 3:
            alert("se muestra el resultado por consola")
            //creacion de for para que se muestan 5 numeros
            for (let i=0;i<=5;i++){
                //utlizando la extencion, para crear numero alaza 0 100
                let random=Math.floor(Math.random()*(100 - 0)) 
                console.log(random);
            }
            break;
        //punto 4------------------------------------------------------------------------------------------------------------------------------
        case 4:
            alert("se muestra por consola")
            //declaracion de variable
            let numeroPositivo=0
            numeroPositivo=parseInt(prompt("ingrese un numero positivo"))
            //creacion del for para escribir los numeros impares 
            for(let i=1;i<=numeroPositivo;i+=2){
                //condicional para saber si ingresa un dijito menor que cero 
                if (numeroPositivo<=0) {
                    alert("error, ingrese un numero positivo")
                    i-2
                }else{
                    console.log(i)
                }
            }
            break;
        //punto 5 ----------------------------------------------------------------------------------------------------------------------------
        case 5:
            //vector para guardar los articulos con el precio
            let articulos = [["camisas",2000],["pantalones",4000],["zapatos",5000],["gorras",2000]]
            //creacion del for para recorrer el arreglo
            for(let i=0;i<4;i++){
                //mostramos el articulo
                console.log(articulos[i][0]+" con un presio de: "+articulos[i][1])
                //pedimos la clave
                let clave=parseInt(prompt("ingrese la calve para hacer el descuento"))
                //decisiones para saber que clave ingreso y hacer el descuento
                if (clave==1) {
                    //operaciones, se trabaja con el valor de los producto
                    let descuento=articulos[i][1]*0.10
                    let precio=articulos[i][1]-descuento
                    //mostrar datos
                    alert("el descuento del 10% es de: "+precio)
                    console.log("el descuento del 10% es de: "+precio)
                }else if (clave==2) {
                    // operaciones, se trabaja con el valor de los producto
                    let descuento=articulos[i][1]*0.20
                    let precio=articulos[i][1]-descuento
                    //mostrar datos
                    alert("el articulo"+ articulos[i][0]+" descuento del 20% es de: "+precio)
                    console.log("el descuento del 20% es de: "+precio)
                }else{
                    //mostrar el error, por si ingresa una dato mayores de las claves
                    alert("error, clave no encontrada")
                    i--
                }
            }
            break;
        //punto 6----------------------------------------------------------------------------------------------------------------------------
        case 6:
        //declarando variables
        let cantNiño=0,cantJoven=0,cantAdulto=0,cantAbuelo=0,pesoNiño=0,pesoJoven=0,pesoAdulto=0,pesoAbuelo=0,promNiño=0,promJoven=0,promAdulto=0,promAbuelo=0
        //creacion del for para pedir las 20 muestras
        for(let i=0;i<=3;i++){
            //verificacion para que no puedan ingresar 0 /edad 
            let edad=0
            do {
                //pedimos datos
                edad=parseInt(prompt("igrese la edad de la persona "+(i+1))) 
                if (edad<=0) {
                    alert("error, ingrese un valor mayor a cero")
                }
            } while (edad<=0);
                   
            let peso=0
            //verificacion para que no puedan ingresar 0 /peso
            do {
                    //pedir datos
                    peso=parseInt(prompt("igrese el peso de la persona "+(i+1))) 
                    //condicion para saber si ingreso 0 y mostrar un mensaje
                    if (peso<=0) {
                        alert("error, ingrese un valor mayor a cero")
                    }
                } while (peso<=0);
            
            //condicionales para determinar la edad y el promedio
            if (edad<=12) {
                cantNiño+=1
                pesoNiño+=peso
            }else if (edad<=29) {
                cantJoven+=1
                pesoJoven+=peso
            }else if (edad<=59) {
                cantAdulto+=1
                pesoAdulto+=peso
            }else if (edad>60) {  
                cantAbuelo+=1
                pesoAbuelo+=peso
            }
        }
         //sacar el promedio de las edades
         promNiño=pesoNiño/cantNiño
         promJoven=pesoJoven/cantJoven
         promAdulto=pesoAdulto/cantAdulto
         promAbuelo=pesoAbuelo/cantAbuelo
         alert("el promedio del peso de los niños es: "+promNiño+"\nel promedio del pesos de los jovenes es: "+promJoven+"\nel promedio del peso de los adultos es: "+promAdulto+"\nel promedio de los abuelos es: "+promAbuelo)
         //comprobacino que no hallan datos NaN
         if (promNiño===0) {
            promNiño=0
         }else if (promJoven===0) {
            pesoJoven=0
         }else if (promAdulto===0) {
            promAdulto=0
         }else if (promAbuelo===0) {
            promAbuelo=0
         }
         //mostrar datos

         
            break;
        //punto 7---------------------------------------------------------------------------------------------------------------------------
        case 7:

            break;
        //punto 8---------------------------------------------------------------------------------------------------------------
        case 8:
        //declaracion de variables
        let animal="",cantmuestras=0,edadAnimal=0,uno=0,tres=0,cuatro=0,porsentajeUno=0,porsentajeCuatro=0,porsentajeTres=0
        //verificacion para saber que no puedan ingresar un 0
        do {
            animal=prompt("ingrese el nombre del animal que quieres revisar")
            if (animal==="") {
                alert("error, ingrese una dato ")
            }
        } while (animal==="");
        //verificacion para saber que no puedan ingresar un 0
        do {
            cantmuestras=parseInt(prompt("ingrese la cantidad del animal que quieres revisar"))
            //condisional para avidar que ingreso un dato negativo o 0 
            if (cantmuestras<=0) {
                alert("error, ingrese una dato mayor a 0")
            }
        } while (cantmuestras<=0);
        //creacion de for para repetir la cantidad de muestas
        for(let i=0;i<cantmuestras;i++){
            edadAnimal=parseInt(prompt("ingrese la edad de la "+animal))
            if (edadAnimal>0) {
                if (edadAnimal<=1 && edadAnimal>0) {
                    uno++
                }else if (edadAnimal<=3 && edadAnimal>0) {
                    tres++
                }else if (edadAnimal>3 && edadAnimal>0) {
                    cuatro++
                }
            }else{
                alert("error, ingrese un dato")
                i--
            }
        }
        //operaciones para sacar el prosentaje
        porsentajeUno=uno*100/cantmuestras
        porsentajeTres=tres*100/cantmuestras
        porsentajeCuatro=cuatro*100/cantmuestras
        //mostrar datos
        alert("el promedio del "+animal+"con la edad menor de un año es: "+porsentajeUno+"\nel promedio del "+animal+" con la edad de menor de 3 años es: "+porsentajeTres+"\nel promedio del "+animal+" con la edad con edad mayores de tres años es: "+porsentajeCuatro)
            break;
        //punto 9-----------------------------------------------------------------------------------------------------------------
        case 9:
            //declara variables
            let numeroTrabajadores=0,ventasTrabajador=0,sumaVentas=0,comisiones=0,sueldoTotal=0,sueldoBase=0
            //verificasion para saber que no puedan ingresar un 0
            do {
                numeroTrabajadores=parseInt(prompt("ingrese la catidad de trabajadore que se van acalcular"))
                //avisarle al usuario
                if (numeroTrabajadores<=0) {
                    alert("error, ingrese un dato mayor que cero")
                }
            } while (numeroTrabajadores==0);

            //for para calcular la cantidad de los trabajadores
            for(let i=0;i<numeroTrabajadores;i++){
            //verificasion para saber que no puedan ingresar un 0
            do {
            sueldoBase=parseInt(prompt("ingrese el sueldo del trabajador"))
            //avisarle al usuario
            if (sueldoBase<=0) {
                alert("error, ingrese un dato mayor que cero")
            }
            } while (sueldoBase==0);
            //for para calcular las 3 ventas de cada trabajador    
                for(let i=0;i<3;i++){
                    ventasTrabajador=parseInt(prompt("ingrese el valor de la venta "+(i+1)))
                    //verificador para que no puedan ingresar un  0
                    if (ventasTrabajador>0) {
                        //acumulador de la venta
                        sumaVentas+=ventasTrabajador
                    }else{
                        alert("error, ingrese una valor al trabajador")
                        i--
                    }
                }
            //operaciones
            comisiones=sumaVentas*0.10
            sueldoTotal=comisiones+sueldoBase
            //mostrar datos
            alert("el valor de la comision es: "+comisiones+"\n el sueldo total a pagar al trabajador es: "+sueldoTotal)
            } 
            break
        //punto 10----------------------------------------------------------------------------------------------------
        case 10:
            // declara variables
            let salario=950000,comision=170000,cantVentCarros=0,valorCarro=0,sumaValorCarro=0,valorComisines=0,valorVentComision=0,montoTotal=0
            //comprovacion que no puedan ingresar un dato 0(pedir cantidad de autos vendidos)
            do {
                //pedir datos
                 cantVentCarros=parseInt(prompt("ingrese la cantidad de carros vendidos"))
                 //alerta por si ingresa un dato negativo
                 if (cantVentCarros<=0) {
                    alert("error, ingrese una dato mayor que cero")
                 }
            } while (cantVentCarros<=0);
            //creacion de for para pedir el valor de la venta de los carros
            for(let i=0;i<cantVentCarros;i++){
                //pedir valor de la venta con acumulador y verificacion, que no pueden ingresar dato negativo
                valorCarro=parseInt(prompt("ingrese el valor del carro "+(i+1)))
                if (valorCarro>0) {
                    alert("si")
                    sumaValorCarro+=valorCarro
                }else{
                    alert("error, ingrese una dato mayor que 0")
                    i--
                }
            }
            //operaciones
            valorComisines=comision*cantVentCarros
            valorVentComision=sumaValorCarro*0.5
            montoTotal=salario+valorComisines+valorVentComision
            //mostrar datos
            alert("el sueldo del empleado con "+cantVentCarros+" carros ventidos en el mes. Tiene un salario total de: "+montoTotal)
            break;
        //punto 11------------------------------------------------------------------------------------------
        case 11:
            //declara variables
            let notaCuarenta=0,notaSesenta=0,nota=0,sumaCuarenta=0,sumaSesenta=0,nombreEstudiante="",promedioNotas=0
            //pedir el nombre del estudiante y verificacion, que no puedan ingresar 0
            do {
                nombreEstudiante=prompt("ingrese el nombre del estudiante")
                //mostrar la alerta si no ingresa ningun dato
                if (nombreEstudiante=="") {
                    alert("error, ingrese el nombre del estudiante")
                }
            } while (nombreEstudiante=="");
            //for para carcular las 5 notas
            for(let i=1;i<=5;i++){
                //decision para poder calcular las dos primeras notas, que valen el 40% y depues las otras 3 notas que equivalen en 60%
                if (i<=2) { 
                    nota=parseInt(prompt("ingrese las nota "+i+" que vale el 40%"))
                    sumaCuarenta+=nota
                }else{
                    nota=parseInt(prompt("ingrese las nota "+i+" que vale el 60%"))
                    sumaSesenta+=nota
                }
            }
            //operaciones
            notaCuarenta=(sumaCuarenta/2)*0.40
            notaSesenta=(sumaSesenta/3)*0.60
            promedioNotas=notaSesenta+notaCuarenta
            //mostrar datos
            alert("el promedio del estudiante es de: "+promedioNotas)
            break;
        //punto 12-------------------------------------------------------------------------------------------
        case 12:
            //declara variables 
            let cantInvitados=0,opcionRegalo=0,cantSobre=0,cantReNovios=0,cantBono=0,cantRegalo=0
            //verificador para saber si ingreso un dato negativo o cero y pedir datos
            do {
                cantInvitados=parseInt(prompt("ingrese la cantidad de invitados"))
                //alerta por si ingresa un dato negativo o cero
                if (cantInvitados<=0) {
                    alert("error, ingrese un dato mayor que cero")
                }
            } while (cantInvitados<=0);
            //for para pedir los regalos dependiendo de la cantidad de invitados
            for(let i=0;i<cantInvitados;i++){
                opcionRegalo=parseInt(prompt("1.sobre de regalo\n2.regalo de novios\n3.bono de regalo del almacen casa Bonita\n0 no trajo regalo"))
                //condicionales
                if (opcionRegalo==1) {
                    cantSobre++
                    cantRegalo++
                }else if (opcionRegalo==2) {
                    cantReNovios++
                    cantRegalo++
                }else if (opcionRegalo==3) {
                    cantBono++
                    cantRegalo++
                }else{
                    alert("no puede entrar a la fiesta, porque no trajo regalo")
                }
            }
            //mostrar datos
            alert("La cantida de personas que traen regalo es: "+cantRegalo+"\nLa cantidad de persona que no traen regalo es: "+(cantInvitados-cantRegalo)+"\nLa cantidad de sobres de regalo es: "+cantSobre+"\nLa cantidad de regalos de novios es: "+cantReNovios+"\n la cantidad de bonos de regalo del almacen casa Bonita es: "+cantBono)
            break;
        case 0:
            //cambiando el valor a la bandera
            salir = true
            break;
        default:
            break;
    }
} while (salir == false);