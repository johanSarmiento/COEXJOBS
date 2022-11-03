//creacion de menu
do {
    //bandera creada para salir del dowhile
    var salir=false
    //pedir datos en el menu
    let opciones=parseInt(prompt("1. punto\n2. punto\n3. punto\n4. punto\n5. punto\n6. punto\n7. punto\n8. punto\n9. punto\n0. salir"))
    switch (opciones) {
        //punto 1 ----------------------------------------------------------------------------------------------------------------------------
        case 1:
            //declarar y pedir datos
            let num1=parseInt(prompt("ingrese el primer numero"))
            let num2=parseInt(prompt("ingrese el primer numero"))
            //condicional, para escribir de forma ascendente 
            if (num1<num2) {
                //mostrar datos
                alert(num1+" "+num2)
                console.log(num1+" "+num2)
            }else if(num1==num2){
                //mostrar datos
                alert("los numeros son iguales")
                console.log("los numeros son iguales");
            }else{
                //mostrar datos
                alert(num2+" "+num1)
                console.log(num2+" "+num1);
            }
            break;
        //punto 2 --------------------------------------------------------------------------------------------------------------------------
        case 2:
            //creacion del switch para los numeros
            let numeros=parseInt(prompt("ingrese un numero"))
            switch (numeros) {
                //muneros impares
                case 1:
                case 3:
                case 5:
                case 7:
                case 9:
                    //mostrar datos
                    alert ("el numero que ingreso es impar")
                    console.log("el numero que ingreso es impar");
                    break;
                //numeros pares
                case 2:
                case 4:
                case 6:
                case 8:
                case 10:
                    //mostrar datos
                    alert("el numero que ingreso es par")
                    log("el numero que ingreso es par")
                    break;
                default:
                    //mostrar datos
                    alert("opcion incorrecta, vuelva a ingresar el numero")
                    break;
            }
            break;
        //punto 3 --------------------------------------------------------------------------------------------------------------------------
        case 3:
            //creacion del switch para los numeros
            let numEntero=parseInt(prompt("ingrese un numero"))
            switch (numEntero) {
                //mostrar los numeros
                case 1:
                    alert("1 = uno")
                    break;
                case 2:
                    alert("2 = dos")
                    break;
                case 3:
                    alert("3 = tres")
                    break;
                case 4:
                    alert("4 = cuatro")
                case 5:
                    alert("5 = cinco")
                    break;
                case 6:
                    alert("6 = seis")
                    break;
                case 7:
                    alert("7 = siete")
                    break;
                case 8:
                    alert("8 = ocho")
                    break;
                case 9:
                    alert("9 = nueve")
                    break
                case 10:
                    alert("10 = diez")
                    break;
                default:
                    //mostrar datos
                    alert("opcion incorrecta, vuelva a ingresar el numero")
                    break;
            }
            break;
        //punto 4 ---------------------------------------------------------------------------------------------------------------------------
        case 4:
             //comprobacion si entran un dijito negativo o menor que cero
            do {
                //declaracion de variables y pedir datos 
                var llamada=parseFloat(prompt("ingrese el tiempo de la llamada"))
                if (llamada<=0) {
                    alert("error, ingrese un dato mayor a cero")
                }
            } while (llamada==0);
            if(llamada<=3){
                //mostrar datos
                alert("el costo de su llamada es de 200 pesos")
            }else{
                //operaciones
                let minutosEx=llamada-3;
                let valorLlamada=minutosEx*100;
                let costoLlamada=200+valorLlamada
                //mostrar datos
                alert("el valor de tu llamada es: "+costoLlamada)
            }
            break;
        //punto 5 -------------------------------------------------------------------------------------------------------------------------
        case 5:
            //declara variables y pedir la cantidad de los conejos, que hay en la graja
            //comprobacion, que no deje ingresar un dijito negativo
            do {
                var C1=parseInt(prompt("ingres la cantidad de conejos blancos"))
                if (C1<=0) {
                    alert("error, ingrese un dato mayor a cero")
                }
            } while (C1==0);
            //comprobacion, que no deje ingresar un dijito negativo
            do {
                var C2=parseInt(prompt("ingres la cantidad de conejos negros"))
                if (C2<=0) {
                    alert("error, ingrese un dato mayor a cero")
                }
            } while (C2==0);
            //pedir cantidad que conejos vendidos
            //bandera para salir de dowhile
            var salirConejo = false
            //comprobacion para saber si hay la cantidad suficiente de conejos blancos
            do {
                var Xx=parseInt(prompt("ingres la cantidad de conejos blancos que quieres comprar"))
                if (Xx<C1) {
                    salirConejo=true
                    do {
                      //comprobacion, que no deje ingresar un dijito negativo
                        if (Xx<=0) {
                            alert("error, ingrese un dato mayor a cero")
                        }
                    } while (Xx==0);
                }else{
                    alert ("error, se pasa de la cantida de conejos que hay en la granja")
                }
            } while (salirConejo==false);
            
            //reutilizando la bandera
            salirConejo = false
            //comprobacion para saber si hay la cantidad suficiente de conejos negros
             do {
                 var Yy=parseInt(prompt("ingres la cantidad de conejos negros que quieres comprar"))
                 if (Yy<C2) {
                     salirConejo=true
                     do {
                        //comprobacion, que no deje ingresar un dijito negativo
                        if (Yy<=0) {
                            alert("error, ingrese un dato mayor a cero")
                        }
                    } while (Yy==0);
                 }else{
                     alert ("error, se pasa de la cantida de conejos que hay en la granja")
                 }
             } while (salirConejo==false);
             //pedir precio de los conejos blancos
             //comprobacion, para que no pueda ingresar 0 
             do {
                var P1=parseInt(prompt("ingrese el preci de los conejos blancos"))
                if (P1<=0) {
                    alert("error, ingrese un valor mayor a cero")
                }
             } while (P1==0);
            //pedir precio de los conejos negros
            //comprobacion, para que no pueda ingresar 0 
             do {
                var P2=parseInt(prompt("ingrese el preci de los conejos negros"))
                if (P2<=0) {
                    alert("error, ingrese un valor mayor a cero")
                }
             } while (P2==0);
             //operaciones
             let cantConejosVendidos=Xx+Yy;
             let valorConejosBlancos=Xx*P1;
             let valorConejosNegros=Yy*P2;
             let montoTotal=valorConejosBlancos+valorConejosNegros;

             //mostrar datos
             alert("la cantidad de conejos vendidos fue de: "+cantConejosVendidos)
             console.log("la cantidad de conejos vendidos fue de: "+cantConejosVendidos);

             //monto total
             alert("el monto total de la venta es de: "+montoTotal)
             console.log("el monto total de la venta es de: "+montoTotal);

            //condicional para saber cual fue el conejo mas vendido
            if (Xx>Yy) {
                alert("los conejos blancos fueron los mas vendidos")
                console.log("los conejos blancos fueron los mas vendidos");
                }else{
                alert("los conejos negros fueron los mas vendidos")
                console.log("los conejos negros fueron los mas vendidos");
                }
            break
        // punto 6 --------------------------------------------------------------------------------------------------------------------
        case 6:
            let sumaNotasPrevios=0
            //for para repetir las 3 evaluaciones
            for(let i=0;i<3;i++){
            let notasPrevios=parseFloat(prompt("ingrese la nota del previo "+(i+1)))
             //condicional para saber si ingrese una nota minimo de 1 o maximo 5
             if (notasPrevios<=5) {
                if (notasPrevios>1) {
                    //acumulador de la nota
                    sumaNotasPrevios+=notasPrevios
                }else{
                    // si no cumple la condicion se reta una vuelta del for
                    alert("error, la nota minima es 1 y la nota maxima es 5")
                    i--
                }
             }else{
                alert("error, la nota minima es 1 y la nota maxima es 5")
                i--
             }
            }
            let sumaNotasTrabajos=0
            //for para repetir los 2 trabajos
            for(let i=0;i<2;i++){
                let notasTrabajos=parseFloat(prompt("ingrese la nota del trabajo "+(i+1)))
                 //condicional para saber si ingrese una nota minimo de 1 o maximo 5
                 if (notasTrabajos<=5) {
                    if (notasTrabajos>1) {
                        //acumulador de la nota
                        sumaNotasTrabajos+=notasTrabajos
                    }else{
                        // si no cumple la condicion se reta una vuelta del for
                        alert("error, la nota minima es 1 y la nota maxima es 5")
                        i--
                    }
                 }else{
                    alert("error, la nota minima es 1 y la nota maxima es 5")
                    i--
                 }
                }
            //sacar el promedio 
            let promedioPrevios = (sumaNotasPrevios/3)*0.60
            let promedioTrabajos = (sumaNotasTrabajos/2)*0.40
            let notasFinal = promedioPrevios+promedioTrabajos
            // mostrar datos
            alert("el promedio del estudiante es de: "+notasFinal)
            console.log("el promedio del estudiante es de: "+notasFinal)
            break;
        //punto 7 ------------------------------------------------------------------------------------------------------------------
        case 7:
            //declara de los producto
            let articulo = "camisa"
            let precioOriginal = 50000
            let cantidad = 10
            let clave = parseInt(prompt("ingrese la clave del producto"))
            //condicionales para las claves de los productos
            if (clave==1) {
                let precio = precioOriginal*cantidad
                let descuento=precio*0.10
                alert("el articulo: "+articulo+"\ntiene un precio original de: "+precioOriginal+"\ncon clave: "+clave+"\ncon una cantidad de: "+cantidad+"\n su precio con descuento es de: "+descuento)
                console.log("el articulo: "+articulo+"\ntiene un precio original de: "+precioOriginal+"\ncon clave: "+clave+"\ncon una cantidad de: "+cantidad+"\n su precio con descuento es de: "+descuento)
            }else if (clave==2) {
                let precio = precioOriginal*cantidad
                let descuento=precio*0.20
                alert("el articulo: "+articulo+"\ntiene un precio original de: "+precioOriginal+"\ncon clave: "+clave+"\ncon una cantidad de: "+cantidad+"\n su precio con descuento es de: "+descuento)
                console.log("el articulo: "+articulo+"\ntiene un precio original de: "+precioOriginal+"\ncon clave: "+clave+"\ncon una cantidad de: "+cantidad+"\n su precio con descuento es de: "+descuento)
            }else{
                alert("error, calve no encontrada")
            }
            break;
        //punto 8 -------------------------------------------------------------------------------------------------------------------------
        case 8:
            //comprobacin que no puedan ingresa datos menore a iguales a 0
            do {
                var presupuestoAnuel = parseInt(prompt("ingrese le presupuesto anuel del hospital"))
                if (presupuestoAnuel<=0) {
                    alert("eror, ingrese un dato mayor a 0")
                }
            } while (presupuestoAnuel==0);
            //pedir el presupuesto a psiquiatria
            do {
                var Psiquiatria = parseInt(prompt("ingrese le presupuesto de Psiquiatria"))
                if (Psiquiatria<=0) {
                    alert("eror, ingrese un dato mayor a 0")
                }
            } while (Psiquiatria==0);

             //pedir el presupuesto a pediatria
             do {
                var Pediatria = parseInt(prompt("ingrese le presupuesto de Pediatria"))
                if (Pediatria<=0) {
                    alert("eror, ingrese un dato mayor a 0")
                }
            } while (Pediatria==0);

            //pedir el presupuesto a Traumatologia
            do {
                var Traumatologia = parseInt(prompt("ingrese le presupuesto de Traumatologia"))
                if (Traumatologia<=0) {
                    alert("eror, ingrese un dato mayor a 0")
            }
            }while (Traumatologia==0);

            //operaciones
            presupuestoPsiquiatria=Psiquiatria*3/100
            presupuestoPediatria=Pediatria*3/100
            presupuestoTraumatologia=Traumatologia*3/100
            presupuesto=presupuestoPediatria+presupuestoPsiquiatria+presupuestoTraumatologia
            //condional para saber si se pasa del 100%
            if (presupuesto==100) {
                alert("el porcentaje de Psiquiatria es de: "+presupuestoPsiquiatria+" tuvo un presupuesto de: "+Psiquiatria+"\nel porcentaje de Pediatria es de: "+presupuestoPediatria+" tuvo un presupuesto de :"+Pediatria+"\nel porcentaje de Traumatologia es de: "+presupuestoTraumatologia+" tuvo un presupuesto de: "+Traumatologia)
                alert("todas la ares dieron correctamente sus presupuesto")
            }else{
                alert("el porcentaje de Psiquiatria es de: "+presupuestoPsiquiatria+" tuvo un presupuesto de: "+Psiquiatria+"\nel porcentaje de Pediatria es de: "+presupuestoPediatria+" tuvo un presupuesto de :"+Pediatria+"\nel porcentaje de Traumatologia es de: "+presupuestoTraumatologia+" tuvo un presupuesto de: "+Traumatologia)
                alert("error, las areas no dieron bien sus presupuestos")
            }
            break;
        //punto 9 --------------------------------------------------------------------------------------------------------------------------
        case 9:
            //comprobacion que no puedan ingresar datos menores o iguales a 0
            //pedir datos de la distancia del vuelo
            do {
                var distancia=parseFloat(prompt("ingrese la distancia del viaje"))
                if (distancia<=0) {
                    alert("error, ingrese un dato mayor a 0")
                }
            } while (distancia==0);
             //comprobacion que no puedan ingresar datos menores o iguales a 0
             //pedir datos de los dias del vuelo
             do {
                var dias=parseFloat(prompt("ingrese los dias de vuelo"))
                if (dias<=0) {
                    alert("error, ingrese un dato mayor a 0")
                }
            } while (dias==0);
            //condicionales para saber si se aplica el decuento
            if (dias>=7) {
                if (distancia>800) {
                    //operacion con el descuento
                    let precio=distancia*2.5
                    let descuento = precio*0.30
                    alert("el valor de su tiquete con el descuento del 30% es de: "+descuento)
                    console.log("el valor de su tiquete con el descuento del 30% es de: "+descuento)
                }
                else{
                    //operaciones
                    let precioVuelo=distancia*2.5
                    alert("el valor de su tiquete es de: "+precioVuelo)
                    console.log("el valor de su tiquete es de: "+precioVuelo)
                }
            }else{
                //operaciones
                let precioVuelo=distancia*2.5
                alert("el valor de su tiquete es de: "+precioVuelo)
                console.log("el valor de su tiquete es de: "+precioVuelo)
            }
            break;
        case 0:
            salir=true
            break;
        default:
            break;
    }
} while (salir==false);