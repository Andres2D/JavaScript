// let myObj = {
//     propiedad: valor, // propiedad puede ser un String 'propiedad'
//     propiedad2: valor2,
//     propiedad3: valor3
// }

let andres = {
    name: 'Andres',
    age: 21,
    country: 'Colombia',
    loveFootbal: true,
    teams: ['liverpool','nacional','colombia'],
    saludar(){
        return 'Welcome to the Jungle'
    }
};

console.log(andres);
console.log(andres.name);
console.log(andres.teams[1]);

//moificar propiedades despues de crearlo
    andres.country = 'España';
    console.log(andres);

//Operadores
// delete -> elimina una propiedad
// in -> devuelve true si existe la propiedad en el objeto

delete andres.country;
console.log(andres);

Object.prototype.numeroMagico = 27;
console.log('numeroMagico' in andres);
console.log(andres.numeroMagico);
// si existe porque es del prototipo


// .hasOwnPropetrty()
console.log(andres.hasOwnProperty('numeroMagico'));
// Solo busca en el objeto y no en el prototipo

// añandir propiedad

andres.nuevaProp = 'otra prop';
console.log(andres);

// ES6
// Crear copia de objeto
    let andres2 = Object.assign({},andres);
    console.log(andres2);

// Asignar vriables existentes a propiedades
    let a = 'hola', b= 'mundo'; // si se llaman igual, no hay que hacer a: a; o b: b;
    let myObject = {
        a,
        b
    }
    console.log(myObject);

// Expresiones en las propiedades
let myObject2 = {
    [a + b]: 'Hola mundo'
}
console.log(myObject2);

