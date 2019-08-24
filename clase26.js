let genteAlta = 1.80


//ASINCRONISMO
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) { //el nuevo parametro fn (lo podemos llamar como querramos pero fn es estandar) es el que tendra la direccion de memoria de la funcion que le mandemos
        let { nombre, apellido } = this // esto es igual que: nombre = this.nombre; apellido = this.apellido
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) { //evalua si existe una funcion que fue mandada como parametro, si fue mandada, entrara en este bloque
            fn(nombre, apellido)
        }
    }

    soyAlto() {
        console.log(this.altura >= genteAlta ? true : false)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        let { nombre, apellido } = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy un desarrollador`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mira no sabia que eras desarrollador`)
    }
}

var sacha = new Persona('sacha', 'lifszyc', 1.60)
var jonathan = new Desarrollador('Jonathan', 'Rangel', 1.80)
var elvia = new Persona('Elvia', 'Zarina', 1.60)

sacha.saludar()
jonathan.saludar(responderSaludo)
elvia.saludar(responderSaludo)