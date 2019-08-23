let genteAlta = 1.80

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto() {
        console.log(this.altura >= genteAlta ? true : false)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy un desarrollador`)
    }
}

// var sacha = new Persona('sacha', 'lifszyc', 1.60)
// var jonathan = new Persona('Jonathan', 'Rangel', 1.80)
// var elvia = new Persona('Elvia', 'Zarina', 1.60)

// sacha.saludar()
// sacha.soyAlto()