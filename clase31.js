const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    console.log(id)
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opts, callback)
}

//al ejecutar esta funcion, no ejecutaremos la siguiente sino hasta qu la primera haya sido ejecutada satisfactoriamente, esto se puede anidar hasta el infinito y se le conoce como el "Callback Hell", y en la siguiente clase veremos como solucionar esto
obtenerPersonaje(1, function(char) {
    console.log(`Hola mi nombre es: ${char.name} y mi altura es ${char.height}`)
    obtenerPersonaje(2, function(char) {
        console.log(`Hola mi nombre es: ${char.name} y mi altura es ${char.height}`)
        obtenerPersonaje(3, function(char) {
            console.log(`Hola mi nombre es: ${char.name} y mi altura es ${char.height}`)
            obtenerPersonaje(4, function(char) {
                console.log(`Hola mi nombre es: ${char.name} y mi altura es ${char.height}`)
                obtenerPersonaje(5, function(char) {
                    console.log(`Hola mi nombre es: ${char.name} y mi altura es ${char.height}`)
                    obtenerPersonaje(6, function(char) {
                        console.log(`Hola mi nombre es: ${char.name} y mi altura es ${char.height}`)
                    })
                })
            })
        })
    })
})