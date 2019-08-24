const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const characterUrl = `${API_URL}${PEOPLE_URL.replace(':id',20)}` //js sabe que necesita un string asi que el 1 lo convertira automaticamente en string
const opts = { crossDomain: true } //le indica a jquery que lo que estamos solicitando esta en otra pagina, y ta,bien necesitamos ponerlo como objeto

const character = char => console.log(`Hola mi nombre es: ${char.name} y mi altura es ${char.height}`)

$.get(characterUrl, opts, character)

//lo siguiente esta comentado para propositos informativos, cuando le decimos a la funcion que nos imprima sus argumentos, nos regresara el objeto JSON el cual tiene la informacion que se le solicito a la API, asi podremos saber que tipos e argumentos nos regresa una funcion de jquery
// $.get(characterUrl, opts, function() {
//     console.log(arguments)
// })