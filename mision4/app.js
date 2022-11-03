//declara varialbes y array
let opcion,arrayNumeros
let Ranking=["leydi",55,"andrea",63,"valentina",55,"sergio",42,"ronal",38,"luis",30]
let nuevoRanking=[]
//creacion de do while y switch para el menu
do {
    //pedimos las opciones al usuiario 
    opcion=parseInt(prompt("1. Ranking inicial \n2.Ranking actualizado \n3.Posiciones en forma inversa \n4.Promediar el puntaje de todos los participantes \n5. Rankin mayores de 50 puntos \n 6 mostrar nuevo poscion,con los puntos que gano ronal \n 0. salir"))
    switch (opcion) {
        case 1:
            //mostramos el ranking inicial de ejercio con un for, que va aumentando de dos en dos
            alert("El ranking inicial es")
            console.log("ranking inicial");
            for(let i=0;i<Ranking.length;i+=2){
                console.log("el jugador "+Ranking[i]+" tiene una cantidad de puntos de: "+Ranking[i+1])
            }
            break;
        case 2:
            //modificamos el array, con los nuevosdatos
            nuevoRanking=["leydi",55,"gustavo",77,"jamile",77,"andrea",63,"sergio",57,"valentina",55,"ronal",38]
            alert("el ranking actualizado es")
            console.log("nuevo ranking");
            //mostramos el ranking inicial de ejercio con un for, que va aumentando de dos en dos
            for(let i=0;i<nuevoRanking.length;i+=2){ 
                console.log("el jugador "+nuevoRanking[i]+" tiene una cantidad de puntos de: "+nuevoRanking[i+1])
            }
            console.log("el jugador luis fue descalificado");
            break;
        case 3:
            nuevoRanking=["leydi",55,"gustavo",77,"jamile",77,"andrea",63,"sergio",57,"valentina",55,"ronal",38]
            //revertimos el arreglo
            nuevoRanking.reverse()
            //mostramos el ranking inicial de ejercio con un for, que va aumentando de dos en dos
            console.log("posicion inversa");
            for(let i=0;i<nuevoRanking.length;i+=2){
            console.log("el jugador "+nuevoRanking[i+1]+" tiene una cantidad de puntos de: "+nuevoRanking[i])
           }
            break;
        case 4:
            let sumaPromedio,promedio,arrayNumeros
            //utilizamos el filter para guardarlo en un arreglo todos los numeros
            arrayNumeros=nuevoRanking.filter((valores)=> valores>0)
            //sacamos la suma de los numeros de arreglo
            sumaPromedio=arrayNumeros.reduce((a,b)=>a+b)
            //hacemos el promedio de la suma
            promedio=sumaPromedio/arrayNumeros.length
            alert("el promedio es")
            console.log("el promedio de los puntos de los trabajadores es: "+promedio);
            break;
        case 5:
            nuevoRanking=["leydi",55,"gustavo",77,"jamile",77,"andrea",63,"sergio",57,"valentina",55,"ronal",38]
            //creamos el for para y trabajamos con el indice, para solo mostrar los mayores a 50
            console.log("mostramos los que tienen mas de 50 puntos");
            for(i=1;i<nuevoRanking.length;i+=2){
                //decision para saber cuales son mayores a 50   
                if (nuevoRanking[i]>50) {
                    console.log("el jugador "+nuevoRanking[i-1]+" tiene una cantidad de puntos de: "+nuevoRanking[i])
                }
            }
            break;
        case 6:
            let comodin=1.3
            //modificamos el arreglo y damos punto a ronal
            nuevoRanking=["leydi",55,"gustavo",77,"jamile",77,"andrea",63,"sergio",57,"valentina",55,"ronal",(42.9)]
            // y mostramos como que el arreglo
            console.log("las posiciones quedan igual");
            for(let i=0;i<nuevoRanking.length;i+=2){
                console.log("el jugador "+nuevoRanking[i]+" tiene una cantidad de puntos de: "+nuevoRanking[i+1])
            }
            break;
        default:
            alert("error, opcion no encontrada")
            alert("johan sarmiento")
            break;
    }
} while (opcion!==0);

//ronal
//porque no va esto AHHHH 
// QUE RABIA

 