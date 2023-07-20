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

console.warn('ejemplo2: Determinar el ingreso');

let edadPersona = 18;

if (edadPersona >= 18) {
    console.log(`Tu edad es: ${edadPersona} - puedes ingresar`);

}else{
    console.log(`Tu edad es: ${edadPersona} - no puedes ingresar`);

}
/**
 * ejemplo 3: Determinar los profes de ingles y frontend, el día miercoles.
 */
console.warn('ejemplo3: Mostrar profes');

const materia1 = 'frontend';
const materia2 = 'inglés';
let diaMateria = 'jueves';

if (materia1 ==='frontend' && materia2==='inglés' && diaMateria ==='jueves') {
    console.log('Los profes son: Jorge' + ' - ' + 'Fabiola');
}else{
    console.log('No son los profes');
}

// condicional switch, también se basa por una condicion y se utiliza varios case
// ejemplo4: Mostrar las actividades que realizan dependiendo del día 
const diaActividad = 'lunes';

switch (diaActividad) {
    case 'lunes':
        console.log('Estudio');
        console.log('Trabajo');
        console.log('Doy clases');
        
        break;
    case 'martes':
        console.log('Estudio');
        console.log('Trabajo');
        console.log('Doy clases');
        console.log('Ensayo con la banda');
        
        break;
    case 'miercoles':
        console.log('Estudio');
        console.log('Trabajo');
        console.log('Doy clases: grupo 2 y grupo 5');
        console.log('Ensayo con la banda');
        
        break;
        
        case 'jueves':
            console.log('Estudio');
            console.log('Trabajo');
            console.log('Doy clases: grupo 2 y grupo 5');
            console.log('Ensayo con la banda');
            
            break;
        case 'viernes':
            console.log('Estudio');
            console.log('Trabajo');
            
            break;
        case 'sabado':
            console.log('Estudio');
            console.log('Trabajo');
            console.log('En la noche me tomo unas politas');
            
            break;
        case 'domingo':
            console.log('Estudio');
            console.log('Voy a la ciclovia');
            console.log('voy a cine');
            
            break;
    default:
        console.log('Error en sintaxis del día');
        break;
}