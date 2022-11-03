
//array asociativo
const arrTalentos={"uno":"juan","dos":"pedro","tres":"cata"}

Object.keys(arrTalentos)
Object.values(arrTalentos)

//array con objeto
let Talentos =[]

Talentos["uno"]="juan"
Talentos["dos"]="pedro"
Talentos["tres"]="cata"

// OBJETOS LITERALES
const talento={
    "uno":"max",
    "nivel":"principiante",
    "concomiento":"FrontEnd"
}

const cotizacion={
    "nombre":"juan",
    "telefono":344234234,
    "descripcion":"la descripcion",
    "correo":"juan@ gmail.com",
    "ciudad":"bucaramanga"
}
// let personaUno= new cotizacion("johan",3172195207,"construccion de casa","johansarmiento@gmail.com","cali")
// let personaDos = new cotizacion("andrea",3176677207,"construccion de edificio","andrea@gmail.com","medellin")

class casas {
    constructor(habitacion,puerta,ventanas){
        this.habitacion=habitacion
        this.puerta=puerta
        this.ventanas=ventanas
    }    
}
let personaUno = new casas(5,2,6)
let personaDos = new casas(2,2,2)



// EJERCICIO DE SUMAR LAS EDADES
cotizacion["departamento"]="floridablanca"
const Estudiantes = [
    {
        nombre : "Dam Lee",
        edad : 34
    },
    {
        nombre: "Chum Lee",
        edad: 36
    },
    {
        nombre:"Yun Lee",
        edad: 26
    }
]
Estudiantes.forEach(datos=>console.log(datos))
let edades
Estudiantes.forEach(edade=>{
   edades += Estudiantes.edad
   console.log(Estudiantes.edad);
})
console.log(edades);

let talent = new Object();
talent.name = "max"
talent.level = "beginner"
talent.knowledge = "FrontEnd"

console.log(talent);
Object.values(talent)
Object.getOwnPropertyNames(talent)

function fnTalento(){
    this.nombre="max"
    this.nivel="principiante"
    this.method= function () {}
}
let UNTalentoi= new fnTalento();

// PATONN DE DISEÑOL sINGLETON
let talentoCoex = new function () {
    this.nombre="manx"
    this.nivel="Principiante"
    this.method=function () {}
}
const tal = new talentoCoex()
console.log(talentoCoex);

// EJEMPLO
// Objet o literal - mala practica para crear nuevos ovjetos
// const Animal={
//     nombre:"kyra",
//     raza:"beagle",
//     ladrar(){
//         console.log("Wuao Wuao")
//     }
// }
// console.log(Animal);
// Animal.ladrar()
// const perro= new Animal("Tobby","schnauzer")
// const gato = new Animal ("Salome","Siamés")
// Animal.ladrar=function () {
//     console.log("miau miau");
// }

// FORMA CORRECTA DE CREAR FUNCION CONTRUCTORA
// function Animal (nombre,raza) {
//     this.nombre= nombre
//     this.raza=raza
// }
// Prototype:
Animal.prototype.ladrar=function () {
    console.log("Wuao Wuao");
}

// Instacia Animal 1 
const perro = new Animal("Tobby","Schnauzer")
Animal.prototype.gruhin=function () {
    console.log("Rrrrrrrr");
}
// INSTACIA 2 ANIMAL
const perroDos= new Animal("kyra","Beagles")
Animal.prototype

// INSTANCIA 3 ANIMAL + NUEVA PROPIEDAD
Animal.prototype.edad=10
const perroTres = new Animal("bato","pitbull")
perroTres.edad

DESTRUCTURACION
let {nombre,raza} = perroTres
console.log(nombre);
console.log(raza);

// COMVERTIR EN UNA CLASE
 class Animal{
    constructor(nombre,raza,edad){
        this.name=nombre
        this.breed=raza
        this. age=edad
    }
    obtenerInfo(){
        return  `el nombre del animal es${this.name} y la raza es ${this.breed}`
    }   
 }

// CREAR INSTANCIA DE CLASE
const nuevoPerro= new Animal("kyra","reagle","6")

// class dog extends Animal{
//     constructor(nombre,raza,edad,color){
//         super(nombre,raza, edad)
//         this.color=color
//     }
// }
// // INSTACIA CLASE DOG 
// const mydog=new dog("luna","Criolla",2,"blanca")
// console.log(mydog.age);
// console.log(mydog.color);
// console.log(mydog.obtenerInfo());

class Dog extends Animal{
    #raza
    constructor(nombre,edad,color,raza){
        super(nombre,raza,edad)
        this.color=color;
        this.#raza=this.#raza
    }
    getRaza(){
        return this.#raza;
    }
    setRaza(){
        this.#raza=raza
    }
}