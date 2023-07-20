// if y else, determina si la condición se cumple o no
// ejemplo: mostrar el nombre del profe de frontend

let nombreMateria = 'frontend';

if (nombreMateria=='frontend') {
    //mostrar nombre del profe
    console.log(`Nombre del profe: Jorge - ${nombreMateria}`);

}
else{
    console.log('No es el nombre del profe');
}

/**
 * ejemplo2: Determinar el ingreso a un bar, solo pueden ingresar los mayores de edad
 */

console.warn('ejempli2: Determinar el ingreso');

let edadPersona = 18;

if (edadPersona >= 18) {
    console.log(`Tu edad es: ${edadPersona} - puedes ingresar`);

}else{
    console.log(`Tu edad es: ${edadPersona} - no puedes ingresar`);

}