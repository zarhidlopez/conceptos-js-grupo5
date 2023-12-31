// sintaxis de un objeto {} arreglo []
let libros = {
    nombre: 'Crimen y castigo',
    nombre2: 'El principito',
    precio1: 60000,
    precio2: 120000,
    stock: true,
}

//muestra todas las propiedades del objeto libros
console.table(libros);

//muestra el libro crimen y castigo
console.log('El libro es: ', libros.nombre);
//muestra el libro el principito
console.log('El libro es: ', libros.nombre2);
//consultar el elemento precio1 del objeto
const p1 = precio1;
console.log('El precio 1 es: ', libros[p1]);

//agregar una nueva propiedad al objeto libros
libros.nuevoLibro = 'Una mujer de cuatro en conducta';
console.log(libros);

//eliminar una propiedad del objeto libros
delete libros.nombre;
console.log(libros);

//combinar un objeto con arreglos
let autos = {
    marca1: 'Ferrari',
    marca2: 'Toyota',
    marca3: 'Mercedes',
    paisMarca: ['Italia', 'Japon', 'Alemania'],
}

//mostrar los paises
console.log(autos.paisMarca);



