let genteAlta = 1.80

//esta es la clase persona, pero en realidad es un prototipo en JS
function Persona(nombre, apellido, altura) {
    this.nombre = nombre /* los this. se refieren a que dentro del prototipo se creara esa variable */
    this.apellido = apellido
    this.altura = altura
}

/*  aqui se definen las funciones asignadas al prototipo/clase
    y se definen de la siguiente manera:
    <CLASE/PROTOTIPO>.prototype.<METODO> = function(...args){}
*/
Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    console.log(this.altura >= genteAlta ? true : false)
}


var sacha = new Persona('sacha', 'lifszyc', 1.60)
sacha.saludar()
sacha.soyAlto()
var jonathan = new Persona('Jonathan', 'Rangel', 1.80)
var elvia = new Persona('Elvia', 'Zarina', 1.60)