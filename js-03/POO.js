// clase -> plantilla a partir de la cual se crean objetos
// instancia -> es cada objeto creado a partir de una clase
// construnctor -> funcion que se ejecuta automaticamente al
//                 instanciar la clase
// propiedad -> valores
// metodos -> funcionesHola

let c = console.log;

class People {
    constructor(name, lastname, country){
        this.name = name;
        this.lastname = lastname;
        this.country = country;
        this.totalName = `${name} ${lastname}`;
    }

    saludar(){
        return `Hi, i'm ${this.totalName} and my home is ${this.country}`;
    }
}

const andres = new People('Andres','Alcaraz','Colombia');
const sebas = new People('Sebastian','Alcaraz','Africa');
c(andres.saludar());
c(sebas.saludar());

// Herencia

class Player extends People {
    constructor(name, lastname, country, soilder, level){
        super(name,lastname,country);
        this.soilder = soilder;
        this.level = level;
    }
    message(){
        return `Hi, i'm ${this.totalName}, i play battlefield 1, and my level is ${this.level}`
    }
}

const andres_2d = new Player('Andres','Alcaraz','Colombia','Assault','92');

c(andres_2d.message());

// sigue 5.4










// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// // Complete the diagonalDifference function below.
// function diagonalDifference(arr) {
//     let a = 0; //Diagonal ppal
//     let b = 0; //Diagonal segundaria

//     let arr1 = [];
//     let arr2 = [];


//     for (let i = 0; i < arr.length; i++){
//         if (arr[i][i] == arr[i][i]) {
//             arr1[i] = arr[i][i];
//         }
//     }

//     let j = arr[0].length-1;
//     for (let i = 0; i < arr.length; i++) {
//         arr2[i] = arr[j][i];
//         j--;
//     }


//     a = arr1.reduce((a, b) => a + b);
//     b = arr2.reduce((a, b) => a + b);

//     return b-a;


// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine(), 10);

//     let arr = Array(n);

//     for (let i = 0; i < n; i++) {
//         arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
//     }

//     const result = diagonalDifference(arr);

//     ws.write(result + '\n');

//     ws.end();
// }