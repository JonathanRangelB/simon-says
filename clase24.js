let genteAlta = 1.80

//HERENCIA PROTOTIPAL
//esta funcion es la responsable de crear la herencia de clases
function heredaDe(protoHijo, protoPadre) {
    var fn = function() {} //necesitamos crear una funcion dummy obligatoriamente
    fn.prototype = protoPadre.prototype //asignamos el prototipo del padre a la funcion dummy
    protoHijo.prototype = new fn //asignamos una nueva instancia de fn (padre) al hijo
    protoHijo.prototype.constructor = protoHijo //le mandamos el constructor del padre al hijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    console.log(this.altura >= genteAlta ? true : false)
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

//manda generar la herencia en la clase desarrollador tomando como padre a la clase persona
heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy un desarrollador`)
}

// var sacha = new Persona('sacha', 'lifszyc', 1.60)
// var jonathan = new Persona('Jonathan', 'Rangel', 1.80)
// var elvia = new Persona('Elvia', 'Zarina', 1.60)

// sacha.saludar()
// sacha.soyAlto()