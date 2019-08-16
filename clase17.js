var jonathan = {
    nombre: 'jonathan',
    apellido: 'Rangel'
}

var elvia = {
    nombre: 'Elvia',
    apellido: 'Uribe'
}

var daniel = {
    nombre: 'Daniel',
    apellido: 'Rangel'
}


var personas = [jonathan, elvia, daniel]

for (let i = 0; i < personas.length; i++) {
    const element = personas[i];
    console.log(`${element.nombre} se apellida ${element.apellido}`)
}