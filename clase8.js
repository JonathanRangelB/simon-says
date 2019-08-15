var persona = {
    nombre: 'Jonathan',
    apellio: 'Rangel',
    edad: 28
}

//los objetos se pasan por referencia, en esta funcion si moificamos atributos del objeto, el objeto va a cambiar
function cumpleanos(persona) {
    persona.edad++
}

//si no queremos modificar el objeto que mandamos por referencia, podemos devolver un nuevo objeto con la misma estructura del recibido pero con los atributos que queramos, cambiados.
function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}