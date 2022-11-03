//creacion de de menu para los ejercicios
do {
    let opciones=parseInt(prompt("1. punto\n2. punto\n3.punto\n4. punto\n5. punto\n 6. punto\n7. punto\n8.punto\n0. salir"))
    var salir=false
    switch (opciones) {
        case 1:
            //declaracion, pedir datos y formaulas para los ejercicios
            let A=2,B=5,C=1;
            let punto1=3*A-4*B/Math.pow(A,2)
            let punto2=(((B+C)/2*A+10)*3*B)-6
            console.log("el punto uno es:"+punto1+"\n el punto dos es: "+punto2)
            alert("el punto uno es: ${punto1}\n el punto dos es:${punto2}")
            break;
        case 2:
                  //declaracion, pedir datos y formular para ejercicios
            let individuo=parseInt(prompt("ingrese la capital que quiere ingresar en el banco"))
            let ganara=individuo*1.2/100;
            //mostrar datos
            console.log("la cantidad que ganara el usuario es de:"+ganara)
            alert("la cantidad que ganara el usuario es de:"+ganara)
            break;
        case 3:
            let base=parseInt(prompt("ingrese la base del triangulo que quieres calcular"))
            let altura=parseInt(prompt("ingrese la altura del triangulo que quieres calcular"))
            let area=base*altura/2
            //mostrar datos
            console.log("el area del triguangulo es de: "+area)
            alert("el area del triguangulo es de: "+area)
            break;
        case 4:
            //creacion de variables constantes
            const vComision =170000
            const sueldoEmpleado=980000
            let monTotal
            //pedir datos
            let carrosVend=parseInt(prompt("ingrese la cantidad vendidas de carros"))
            //for para que se repitas los carros vendidos
            for(let i=0;i<carrosVend;i++){
                let valorCarro=parseInt(prompt("ingrese el valor del carro vendido"))
                let comision=vComision*carrosVend
                let valorVenta=valorCarro*0.5
                monTotal=sueldoEmpleado+comision+valorVenta
            }
            //mostrar datos
            console.log("el salari total del vendedor es: "+monTotal)
            alert("el salari total del vendedor es: "+monTotal)
            break;
        case 5:
            //creacion de funcion para las operaciones
            function promedioEstudiantes(n1,n2,n3,n4) {
                let prom40=((n1*0.20)+(n2*0.20))
                let prom60=((n3*0.30)+(n4*0.30))
                let promedio= prom40+prom60
                alert("el promedio del 40% es: "+prom40+"\nel promedio del 60% es: "+prom60+"\nel promedio total es del: "+promedio)
                console.log("el promedio del 40% es: "+prom40+"\nel promedio del 60% es: "+prom60+"\nel promedio total es del: "+promedio)
            }
            
            let n1,n2,n3,n4;
            //pedir datos
            n1=parseFloat(prompt("ingrese la nota 1, que la vale 20%"))
            n2=parseFloat(prompt("ingrese la nota 2, que vale 20%"))
            n3=parseFloat(prompt("ingrese la nota 3, que vale el 30%"))
            n4=parseFloat(prompt("ingres la nota 4, que vale "))
            //utilizacion de funcion
            promedioEstudiantes(n1,n2,n3,n4)
            break;
        case 6:
            //pedir datos y operaciones
            let edad=parseInt(prompt("ingrese la edad de la persona"))
            let pulsaciones=(220-edad)/10
            //mostrar datos
            console.log("el numero de pulsaciones es de: "+pulsaciones)
            alert("el numero de pulsaciones es de: "+pulsaciones)
            break;
        case 7:
            //valor de la comision
            let promComicion=0.10
            let sumaValor=0
            //pedir datos
            let sueldo=parseInt(prompt("ingrese el sueldo del empleado"))
            //for para que se repitar cuando ingrese el valor del carro
            for(let i=0;i<3;i++){
                let valorV=parseInt(prompt("ingrese el valor de la venta "+(i+1)))
                sumaValor=+valorV
            }
            //operaciones
            let comiciones=sumaValor*promComicion
            let montototal=sueldo+comiciones
             //mostrar datos
             console.log("el sueldo del empleado es de: "+montototal)
             alert("el sueldo del empleado es de: "+montototal)
            break;
        case 8:
            //declaracion de variables y nota de la examen
            let examenMA=parseInt(prompt("ingrese la nota del examen del matematicas (que vale el 90%)"))
            //pedir notas de los talleres
            let nota1Ma=parseInt(prompt("ingrese la nota del primer taller"))
            let nota2Ma=parseInt(prompt("ingrese la nota del segundo taller"))
            let nota3Ma=parseInt(prompt("ingrese la nota del tercer taller"))
            //operaciones
            let matematicasEx=examenMA*0.90
            let matematicasTa=(nota1Ma+nota2Ma+nota3Ma/3)*0.10
            let matematicas=matematicasEx+matematicasTa
            //mostrar datos
            console.log("el promedio en matematicas es de: "+matematicas);
            alert("el promedio en matematicas es de: "+matematicas);
            //declaracion de variables y nota de la examen
            let examenFi=parseInt(prompt("ingrese la nota del examen del fisica (que vale el 80%)"))
            //pedir notas de los talleres
            let nota1Fi=parseInt(prompt("ingrese la nota del primer taller"))
            let nota2Fi=parseInt(prompt("ingrese la nota del segundo taller"))
            let nota3Fi=parseInt(prompt("ingrese la nota del tercer taller"))
            //operacoiones
            let FisicaEx=examenFi*0.80
            let FisicaTa=(nota1Fi+nota2Fi+nota3Fi/3)*0.20
            let Fisica=FisicaEx+FisicaTa
            //mostrar datos
            console.log("el promedio que saco en fisica fue de: "+Fisica);
            alert("el promedio que saco en fisica fue de: "+Fisica);

            //declaracion de variables y nota de la examen
            let examenQui=parseInt(prompt("ingrese la nota del examen del fisica (que vale el 85%)"))
            //pedir notas de los talleres
            let nota1Qi=parseInt(prompt("ingrese la nota del primer taller"))
            let nota2Qi=parseInt(prompt("ingrese la nota del segundo taller"))
            let nota3Qi=parseInt(prompt("ingrese la nota del tercer taller"))
            //operaciones
            let QuimicaEx=examenQui*0.85
            let QuimicaTa=(nota1Qi+nota2Qi+nota3Qi/3)*0.15
            let Quimica=QuimicaEx+QuimicaTa
            console.log("el promedio de quimica es de: "+Quimica);
            alert("el promedio de quimica es de: "+Quimica);
            break;
        case 0:
            salir=true
            break;
        default:
            alert("error, opcion no encontrada")
            break;
    }
} while (salir==false);  