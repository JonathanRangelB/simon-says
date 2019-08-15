/*
al comparar tipos de datos primitivos, el operaor e comparacion == compara solo el valor, y el operador === compara valor junto con el tipo, es por eso que en el 99.99% de los coasos, para comparaciones debemos de usar el operador === para evitar problemas
*/
var x = 4,
    y = '4'


/*
al comparar objetos es difereten, porque lo que se compara es si los objetos a evaluar apuntan a la misma ireccion de memoria y no la estructura.
*/
var sacha = {
    nombre: 'sacha'
}

var otraPersona = {
    nombre: 'sacha'
}

var terceraPersona = sacha

var cuartaPersona = {...sacha }