// metodos para recorrer arrays sin ciclos

let estudiantes = [
    {
        nombre: 'Andres',
        nota: 4.3
    },
    {
        nombre: 'Camilo',
        nota: 2.2
    },
    {
        nombre: 'Julian',
        nota: 5
    },
    {
        nombre: 'Mariana',
        nota: 2.6
    },
    {
        nombre: 'Lucia',
        nota: 4.3
    }
];


//.map(cb) 
// transforma cada elemento del array segun el collback
// y devuelve otro array

let nombres = estudiantes.map(estudiante => estudiante.nombre);

// .filter(cb)
let ganaronSemestre = estudiantes.filter(estudiante => estudiante.nota > 3);
let nombresGanaron = ganaronSemestre.map(ganaronSemestre => ganaronSemestre.nombre);

// .reduce(cb(prev, current, i, arr), initial);
// devuelve un solo valor
let numeros = [2,4,60,8,10];
let suma = numeros.reduce((a,b) => a+b);
let maxValue = numeros.reduce((a,b) => a > b ? a : b);
// let average = numeros.reduce((a,b) => (suma)/numeros.length);
let average = numeros.reduce((a,b,i,arr) => {
    b += a;
    return i == arr.length -1 ? b / arr.length : b;
});

// devolver maxima nota, trabajando con objetos
let maxNota= estudiantes.reduce((a,b) => {
    if( a.nota > b.nota)
    {
        return {
            nombre: a.nombre,
            nota: a.nota
        }
    }else{
        return{
            nombre: b.nombre,
            nota: b.nota
        }
    }
});


