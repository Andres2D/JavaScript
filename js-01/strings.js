let saludo = 'Wellcome to machine';

//Propiedades:
    let longitud = saludo.length;
    console.log(saludo);

//Métodos:
//1] quitar espacios
    console.log(saludo.trim());
//2] todo en mayusculas y todo a minusculas
    console.log(saludo.trim().toUpperCase());
    console.log(saludo.trim().toLowerCase());

//3]indexOf(string[,i]); buscar una letra del string
    //i = buscar letra apartir del indice x
    console.log(saludo[1]);
    console.log(saludo.indexOf('e',2));
    console.log(saludo.indexOf('ome',2));
    // si no lo encuentra, devuelve -1
    console.log(saludo.indexOf('skdjf'))
    // buscar desde atras cuenta en reversa
    console.log(saludo.lastIndexOf('e'));
    console.log(saludo.lastIndexOf('e',2));
//4] replace(oldString,newString); remplazar string
    let newSaludo = saludo.replace('to machine','the jungle');
    console.log(newSaludo);
    // no modifica el String original
    console.log(saludo);
    //5] split('separador',N); convierte un string en un array
    let arrayFromSaludo = saludo.split(' ');// separando por espacios en blanco
    // separando por espacios en blanco
    console.log(arrayFromSaludo);
    //separando por letra y escogiendo numero de elementos del array
    let arrayFromSaludo2 = saludo.split('e',3);
    console.log(arrayFromSaludo2);
//5] substring(a,b); substr(a,b); slice(a,b);
    let substring,substring2,substr,slice;
    //muestra string a partir del indice que se le mande
    substring = saludo.substring(4);
    console.log(substring);
    //muestra string entre los index que se le mande
    substring2 = saludo.substring(4,11);
    console.log(substring2);
    // tambien se le puede mandar numeros 

    //muestra a partir del indice 4 y solo muestra 5 letras
    substr = saludo.substr(4,5);
    console.log(substr);
    //tambien se le pueden mandar negativos en el indice
    //para empezar a contar desde el final


    // es parecido al substring solo que se le puede mandar negativos
    // en los dos parametros
    slice = saludo.slice(-1,-7);
    console.log(slice);
//6] .startsWith(), .endsWith(), .includes()
    //devuelven un boolean

    console.log(saludo.startsWith('W'));//empieza con W?
    console.log(saludo.endsWith('e'));// termina con e?
    console.log(saludo.includes('to'));// contiene to?




