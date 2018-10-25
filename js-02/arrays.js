let arr = ['1',2,3,'true',4,5];
        // 0 1 2 3 4 -> Elementos  
console.log(arr[0]);
console.log(arr.length);

// sumar elementos del array omitiendo los que no sean numeros
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        if (typeof element == 'number') {
            sum += element;
        } 
    }
console.log(sum);
// tambien con: if (typeof element == 'number') continue;

// modificar el prototipo del array 
    Array.prototype.saludo = 'Hi';
    console.log(arr.saludo);


//indexOf()
    console.log(arr.indexOf('true'));

//Agregar elemetos con:
// .push(el1,el2,el3) -> añade al final
// .unshift(el1,el2,el3) -> añade al inicio

    arr.push('JavaScript','desde','cero');
    console.log(arr);

    arr.unshift('agregar','desde','principio');
    console.log(arr);

// Eliminar un elemento del array (sin parametros):
//Estos metodos devuelven el elemento eliminado
//.pop() -> al final
//.shift() -> al inicio

    let deleted = arr.pop();
    console.log(arr);
    console.log(deleted);

    let deletedprin = arr.shift();
    console.log(arr);
    console.log(deletedprin);

// .join('separador') -> convierte una array a un String
// 'separador' -> es por defecto una coma
    console.log(arr.join());
    console.log(arr.join(''));
    console.log(arr.join(' '));

// splice(a,b,items)
//añade o quita elementos
// a -> indice donde va a comenzar a hacer la operacion
// b -> numero de elementos que va a tomar 
// c -> items que se van a añadir 

    arr.splice(2,1,'andres'); // empieze en el 2 y elimine un elemento y reemplacelo por andres
    console.log(arr);

// slice() -> crea un nuevo array
    let arr2 = arr.slice(1,3); // nuevo array desde el elemento 1 hasta el elemento 3
    console.log(arr2);
    // si no le paso un parametro, crea una copia del array original

// ES6 new things

// Array.find() y Array.findIndex()
// devuelve el primer elemento que cumpla con una condicion

    let array = [1,2,3,4,5];
    let num = arr.find(el => el > 3); // devuelva el primer elemento que sea mayor a 3
    let numIndex = array.findIndex(el => el > 3);
    console.log(num);
    console.log(numIndex);

// Iteradores: guarda la posicion de recorrido de una array
// son objetos que contienen un metodo next()
// ese metodo next, devuelve otro objeto con 2 propiedades
// value, done = boolean, devuelve false cuando no puede recorrer mas el objeto

// metodos que permiten recuperar un iterador
// .keys() .values() .entries()

    let arreglo = [1,2,3,4,5];

    let iterador1 = arreglo.keys(); // devuelve el valor y un boolean
    console.log(iterador1.next());
    console.log('Salto'); // luego de esto, sigue recorriendo donde iba
    console.log(iterador1.next());
    console.log(iterador1.next());
    console.log(iterador1.next());
    console.log(iterador1.next());
    console.log(iterador1.next());

    let iterador2 = arreglo.entries(); // devuelve un array con el indice y el valor
    console.log(iterador2.next());
    console.log(iterador2.next());
    console.log(iterador2.next());
    console.log(iterador2.next());
    console.log(iterador2.next());
    console.log(iterador2.next());




