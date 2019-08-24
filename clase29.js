const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const character = char => console.log(`Hola mi nombre es: ${char.name} y mi altura es ${char.height}`)

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opts, character)
}

//al hacer esto, no podremos garantizar que recibiremos la respuesta del servidor en el mismo orden que los solicitamos, eso es por el asincronismo y el cuanto tiempo se tarde la API en responder a nustra solicitud
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)