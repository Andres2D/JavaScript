// Las funciones son bloques de codigo reutilizable

/*
* function nombreFuncion(parametros){
    codigo...
}
*/


let a = 5;
let b = 78;
// console.log(sumar(a,b));

function sumar(a,b){
    if (a>b) {
        return a+b;
    }else{
        return{
            //devolver objeto
            a: a+1,
            b: b+1
        }  
    }
}

// -----------------------------------

// Funcion dentro de objeto -> metodo

    let obj = {
        nombre: 'objeto',
        sumarObj(a,b){
            return a+b;
        }
    };

    let otherSum = obj.sumarObj(2,3);
    // console.log(otherSum);


// Funcion dentro de otra funcion

    function restar(a){
        return function(b){
            return a-b;
        }
    }

    let miResta = restar(5)(4);
    // console.log(miResta);

// Funciones autoinvocadas

    let miMult = (function(a,b){
        return a*b;
    })(8,8);

    // console.log("Mi mult = "+ miMult);

// Funcion constructora

    let Pais = function(nombre,moneda){
        this.nombre = nombre;
        this.moneda = moneda;
    };

    let peru = new Pais('peru','sol');
    // console.log(peru);

// apply() y call()

    function add(a,b,c){
        return a + b + c;
    }

    let numeros = [2,3,4];
    // let myAdd = add(numeros);
    // console.log(myAdd);

    let myAdd = add.apply(undefined,numeros);
    console.log(myAdd);

    let myOtherAdd = add.call(undefined,2,3,4);
    console.log(myOtherAdd);
