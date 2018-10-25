//for

    let teachers = ['Juan','Adolfo','Ekin'];

    for (let i = 0; i < teachers.length ; i++){//i+=2, para sumar de 2
        if(teachers[i].toLocaleUpperCase().indexOf('A') == 0){
            console.log(teachers[i]);
        }    
    }
    console.log('--------------');

// break: salir del ciclo
// continue: saltarse una iteracion del ciclo

    for (let i = 0; i < teachers.length ; i++){//i+=2, para sumar de 2
        if(teachers[i].toLocaleUpperCase().indexOf('A') == 0){
            continue;
        }    
        console.log(teachers[i]); // imprime todo lo que no tenga A
    }

    console.log('--------------');

    for (let i = 0; i < teachers.length ; i++){//i+=2, para sumar de 2
        if(teachers[i].toLocaleUpperCase().indexOf('A') == 0){
            break;
        }    
        console.log(teachers[i]); // imprime hasta encontrar un nombre con la letra A
    }

console.log('--------------');
//While

    let i = 100;
    while (i > 0) {
        console.log('numero'+i);
        i--;
    }
    /* tambien funciona así:
    while (i--) {
        console.log('numero'+i);
        i--;
    }
    */

console.log('--------------');

//Do While
    let password = 'ED';
    let pass;
    do {
        pass = prompt('Password: ');
    } while (pass != password);

// for of (ES6)

    for (let teacher of teachers){
        console.log(teacher);
    }

    console.log('--------------');

    let nombre = 'Andres';
    for (let value of nombre) {
        console.log(value);
    }

//Change colors of links
/*let link = document.links;
for (let links of links){
    links.style.color = 'red';
}*/
