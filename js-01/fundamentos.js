/*console.log();
console.dir();*/

// Case Sensitive

let saludo = 'Hola mundo';
console.log(saludo); //Correct
//console.log(Saludo); //Wrong


let a;
if (1<5) a = 5;
console.log(a);


//bloques
{
    let hola="hola";
    console.log(hola); //Correct
}

//console.log(hola); //wrong                    

//--------------------------------------

//Variables
let precio = 10000;
let impuesto = precio*0.18;
let descuento = precio*0.10;
let precioFinal = precio + impuesto + descuento;
console.log(precioFinal+2);

//Constante
const edYear = 2010;
console.log(edYear);

{
	let a = 'a';
	console.log(a);
}

// Tipos de datos

	// Primitivos
	/*  string (texto)
		number (numeros)
		boolean (true, false)
		undefined
		null
	*/
	//Strings
	let nombre = "Andres \"Alcaraz\"";
	let numero = 2;
	let hola = "Hola, " + nombre;
	let hello = `Hola, ${nombre} ${numero*3} veces`;
	console.log(hello);
	console.log(hola);

	//Numeros
	// NaN = Not a Number
	let bornYear = 1997;
	let year = new Date().getFullYear();
	let edad = year - bornYear;
	console.log(edad);

	//Booleanos

	if('a' == 'b'){
		console.log("Son Iguales");
	}else{
		console.log("No son iguales")
	}

	//Undefined

	let noDefinida;
	console.log(noDefinida);

	//null

	let title = document.getElementById('title');
	console.log(title);

	/* Compuestos u objetos
		arrays
		objetos
		maps
		sets
		funciones

	*/

// Operadores aritmeticos ( + , - , * , / , %)

	// Incremento y Decremento

	let num = 5;
	num++
	console.log(num);
	
	//+=, -+, *=, /=

	let siete = 7;

	siete /= 5;

	console.log(siete);

	//operadores de comparacion

	let condicion = 5 < 10; //<=,>=,>
	// = -> asignar valor
	// == -> comparar valor
	// === -> compara valor y tipo
	console.log(condicion);

// Propiedades y métodos

	let palabra = "MetallicA";// consloa = palabra.lenght
	
	//Saber si un string empieza por una letra
	let uno = "Andres";
	let dos = "Juan";
	let tres = "Esteban";
	let cuatro = "Pablo";
	let cinco = "Andy";

	console.log(uno.toUpperCase().indexOf('A') == 0);
	console.log(dos.toUpperCase().indexOf('A') == 0);
	console.log(tres.indexOf('A') == 0);
	console.log(cuatro.toUpperCase().indexOf('A') == 0);
	console.log(cinco.toUpperCase().indexOf('A') == 0);

	





