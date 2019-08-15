let nombre = 'Jonathan',
    edad = 28

function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad)
imprimirEdad('Pedro', 15)
imprimirEdad('Elvia', 26)
    //si no mandamos parametros los valores que tomaran por defecto las variables internas seran 'undefined'