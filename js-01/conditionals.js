// Condicionales

//&&=y ||=o == -> igual
//elseif(){} poner una segunda condicion
if (5 != 3 && 5 < 10) {
    console.log('Se cumplió la condicion')
}else{
    console.log('No se cumplió');
}

let edad = 21;//prompt('Edad: ');


// condiciones anidadas
if (edad < 12) {
    console.log('niño');
    if (edad < 2) {
        console.log('Baby');
    }
} else if ( edad >=12 && edad < 18) {
    console.log('adolecente');
} else if (edad >= 18 && edad < 60){
    console.log('adulto');
}else{
    console.log('aciano');
}

// Truthy: Strings no vacios, [], {}, numeros diferentes de cero
//Falsy 0, String vacio, undefined, null, NaN
    if(edad){
        console.log('Ingresaste un truthy');
    }else{
        console.log('Ingresaste un falsy')
    }

// Switch

let color = prompt( `Choose a color:
1: Red
2: Greed
3: Blue
4: Black
5: Yellow`);

switch (color) {
    case '1':
    console.log('Youre Romantic');
        break;
    case '2':
    console.log('You Love Weed');
        break;

    default:
    console.log('Escoge un color Valido');
        break;
}

//Operador Ternario: Es una forma abreviada
//  De escribir un if
// condicion ? valorTrue : valorFalse
    let nombre = prompt('Escribe tu nombre');
    nombre.length > 5 ? console.log('Nombre Largo') : console.log('Nombre Corto');
