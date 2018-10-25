
let c = console.log;

let myObj = {
    nombre: 'Andres',
    saludar(){
        c(`Hola ${this.nombre}`) // this = este objeto
    }
};

myObj.saludar();

'use strict';

function checkthis(){
    c(this);
}

checkthis();

c('--------------------------');

function Boy(edad){
    this.edad = 0;
    // let _t = this;
    // setInterval(function(){
    //     _t.edad++;
    // },1000);
    setInterval(() => { this.edad++},1000)

}

let sebastian = new Boy();