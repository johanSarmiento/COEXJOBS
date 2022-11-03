let fichas =[0,1,2,3,4,5,6,7,8];
let num_click=0;
let primerClic=0;
// CREACION DE LA FUNCION SELECIONAR, LA CUAL SE ACTIVA AL TOCAR LA IMAGEN 
function selecionar(casilla) {
    // CONTADOR DE CLIC
    num_click++
    // LLEVAR EL CONTROL DE LOS CLICK
    if (num_click==1) {
        primerClic = casilla
    }
    if (num_click==2) {
        // VARIABLE PARA TRABAJAR DENTRO DEL IF, YA QUE NO ES NECESITA EL VALOR AFUERA
        let segundoClic=casilla
        // INTERCAMBIAR LOS VALORES DE LAS CASILLAS, CON LA POSICINES DE ARRAY
        let intercambio = fichas[primerClic]
        fichas[primerClic] = fichas[segundoClic]
        // UBICO EL CONTENIDO DEL PRIME CLIC EN LA CASILLA DES SEGUNDO CLIC
        fichas[segundoClic]=intercambio 

        // REINICAR EL NUM_CLICK PARA VOLVER A UTLIZIZARLO
        num_click=0
        moverFichas()
    }
}