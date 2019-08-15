var nombre = 'Jonathan' //si lo declaramos como var, la ventana tendra alcance de esta variable con winows.nombre, por lo tanto podremos llamarla uasndo this.nombre, con nombre no se puede

function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase()
    console.log(nombre + ' ' + this.nombre)
}

imprimirNombreEnMayusculas(nombre)