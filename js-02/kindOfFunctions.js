// Tipos de funciones

// Funciones por definicion y por expresion

// por definicion:
    function funcionPorDefinicion(){
        //Body
    }

    funcionPorDefinicion();


// Por expresion

    let funcionPorEspresion = function(){
        // body
    };

    funcionPorEspresion();

    // example
    let c = console.log;
    c('hola mundo');

// ------------------------------------------

// funciones nombradas y funciones anonimas

// callback = una funcion que es ejecutada por otra luego de un proceso


// funcion anonima
// el.addEventListener('click', function(){
    //do something
// });//se le añade a algun elemento de la pagina para que haga algo
//al darle click




// array functions = son funciones anonimas
//(param1,param2,...) => valorDeRetorno

let suma = (a,b) => a+b;
let miSuma = suma(1,2);
c(miSuma);


// EJEMPLO  
let cuadrado = (a) => (typeof a == 'number') ? a*a : undefined;

let micuadrado = cuadrado(8);
c(micuadrado);

// ----------------

// para que el array function devuelva un objeto
// se debe encerrar entre parentesis
let myObject = (a,b) => ({a,b});

let myCustomObj = myObject('hola','mundo');
c(myCustomObj);