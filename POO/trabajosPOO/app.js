class constructora{
    constructor(Cotizacion,planos,edificacion){
        this.Cotizacion=Cotizacion
        this.planos=planos
        this.edificacion=edificacion
    }
    ingresePagina(){}
}
class Constcotizacion extends constructora{
    constructor(nombre,correo,telefono,ciudad){
        super(Cotizacion,planos,edificacion)
        this.nombre=nombre
        this.correo=correo
        this.telefono=telefono
        this.ciudad=ciudad
    }
    llenarFormulario(){}
}
const cotizacion1= new Constcotizacion("johan","johan@gmail.com","32154684","bucaramanga")

class Consplanos extends constructora{
    constructor(diseño,nombreP,forma){
        super(Cotizacion,planos,edificacion)
        this.nombreP=nombreP
        this.diseño=diseño
        this.forma=forma

    }
    llenarFormulario(){}
}

const cotizacion2= new Constcotizacion("laquepideioelcliente","juan","edificio")
