// Parametros y argumentos

let c = console.log;


function sumar(a,b,d){
    c(arguments); // guarda los argumentos en un objeto
    return a+b+d;
}

c(sumar(2,3)); //2 y 3 son argumentos
//  c(miSuma);

// Si hay mas parametros que argumentos, los argumentos faltantes
// son undefined


// si hay mas argumentos que parametros, no devuelve error
// los otros argumentos son ignorados


// funcion que sume todos los argumentos q se le pasen
function addAll(){
    c(arguments);

    let sum = 0;
    for(var i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}

c(addAll(1,2,3,4,5,6,7,8,9));

c('----------------------------');
// otra forma

// operador propagador

function sumarTodo(){
     c(...arguments);
    // para verlo en Array
     c([...arguments]);
    return [...arguments].reduce((a,b) => a+b);
}
c(sumarTodo(1,2,3,4));

c('----------------------------');

// sumar los argumentos de un array sin usar apply()

function sumar(a,b){
    return a+b;
}

let numeros = [2,3];

c(sumar(...numeros));

c('----------------------------');

// Parametros por defecto
// se puede poner un  valor por paramatro para que se use
// en caso de que no se le mande alguno
function add(a, b = 2){
    return a+b;
}
c(add(1,3));
c(add(1));

c('----------------------------');

// Parametros rest
// si no se tiene claro cuantos argumentos se va a pasar, suar el rest
// tambien se le pueden pasar otros argumentos ademas del ...elements
function addTodos(...elements){
    return elements.reduce((a,b) => a+b);
}

c(addTodos(1,2,44,3,22,44,80));

