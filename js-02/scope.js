// Scope es el ambito o contexto donde se ejecuta una function
// y existen sus variables

let c = console.log;

let hola;


function holaMundo(){
    hola = 'Hola Mundo';
}

holaMundo();
c(hola);

function holaDeNuevo(){
    hola = 'Hi again';
}

holaDeNuevo();
c(hola);


c('----------------------------');

function sumar(a){
    return function(b){
        return a+b;
    }
}

let miSuma = sumar(4)(5);
c(miSuma);


c('----------------------------');

// CLOSURES
//acceder a parametros fuera de la funcion

function saludar(){
    let saludo = 'Hola';
    return function saludarInterno(amigo){
        c(saludo + ' ' + amigo);
    }
}

saludar()();

let miSaludo = saludar();
miSaludo('Andres');
miSaludo('Alcaraz');


c('----------------------------');


function afuera(){
    let numero = 1;
    return function(){
        numero++;
        c(numero);
    }
}

let sum = afuera();
sum();
sum();
sum();
sum();
sum();
afuera()();