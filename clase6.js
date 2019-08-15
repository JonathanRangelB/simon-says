let persona = {
    nombre: 'Jonathan',
    apellio: 'Rangel',
    edad: 28
}

function imprimirNombreEnMayusculas(persona) {
    console.log(persona.nombre.toUpperCase())
}
/*
1. la siguiente funcion con el mismo nombre pero con diferente firma se va a ejecutar cuano la manemos llamar, simplemente porque esta declaraa de ultimo, es decir, la primera no se llama y la segunda si porque js lo interpeta de que es mas 'nueva'.

2. en esta segunda funcion, se le manda un solo parametro, que es en esta caso un objeto persona, pero en la firma de la funcion solo le inicamos que necesitamos solo sus atributos nombre y edad, no todo el objeto
*/
function imprimirNombreEnMayusculas({ nombre, edad }) {
    console.log(`${nombre.toUpperCase()} ${edad}`)
}

imprimirNombreEnMayusculas(persona)

//podemos mandar llamar la funcion y crear el objeto al vuelo dentro de los parametros
imprimirNombreEnMayusculas({ nombre: 'Elvia' })

//aqui nos va a dar error porque no le mandamos ningun parametro
imprimirNombreEnMayusculas()

//aqui nos va a dar error porque no le manadmos el atributo correcto
imprimirNombreEnMayusculas({ apellio: 'rosalia' })