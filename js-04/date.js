// Date: es un objeto de JS 
// requiere ser instanciado para usarse

let date = new Date();
let c = console.log;

date.setFullYear(1980); // cambiar año en la variable date
date.setMinutes(56);
date.setHours(20);
date.setDate(21);
date.setMonth(11);

c(date);

//Ej: imprimir fecha con formato personalizada

let fecha = new Date();

c(fecha);

let dia = (day) => {
    let week = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    return week[day];
};

let mes = (number) => {
    let month = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    return month[number];
};

let horaCompleta = num => ('0'+num).slice(-2); //agrega el cero en caso de que sea necesario

let hora = (hor,min) => {
    amPm = hor >= 12 ? 'pm' : 'am';
    if( amPm === 'pm') hor -= 12;
    return `${horaCompleta(hor)}:${horaCompleta(min)} ${amPm}`;
};
let fechaFormated = `${dia(fecha.getDay())} ${fecha.getDate()} de ${mes(fecha.getMonth())} de ${fecha.getFullYear()}, ${hora(fecha.getHours(),fecha.getMinutes())}`;
c(fechaFormated);

// Definir Fechas 
//new Date(año,mes,dia,horas,monutos,segundos,milisegundos)
//new Date(string)

//Opciones
c(new Date(197,1,4,45,32));
c(new Date('6/12/1997'));
c(new Date('Jun 12 1997 15:16:13 GMT-0500'));

//Operaciones con fechas
//Se operan con milisegundos
// 1s = 1000ms
// 1m = 1000ms*60
// 1h = 1000ms*60*60
// 1d = 1000ms*60*60*24
// 1y = 1000ms*60*60*24*365

let msToDateObj = ms => {
    let seconds = Math.floor(ms / 1000), //Math.floor redondea hacia abajo
        minutes = Math.floor(ms / (1000 * 60)),
        hours = Math.floor(ms / (1000 * 60 * 60)),
        days = Math.floor(ms / (1000 * 60 * 60 * 24)),
        months = Math.floor(ms / (1000 * 60 * 60 * 24 * 30)),
        years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));

    return {seconds,minutes,hours,days,months,years}
};

let msToExpandedObj = ms => {
    let years = msToDateObj(ms).years,
        days = msToDateObj(ms).days % 30,
        hours = msToDateObj(ms).hours % 24,
        minutes = msToDateObj(ms).days % 60,
        seconds = msToDateObj(ms).days % 60;
    return{years,days,hours,minutes,seconds}
};

let date1 = new Date(),
    date2 = new Date('Jun 12 1997 15:16:13 GMT-0500');

c(date1 - date2);//Resta de fechas
c(msToExpandedObj(date1 - date2));

c('-------------------------------------');

//Horarios y fechas internacionales
//.getUTC... -> horario internacional
//.getTimezoneOffset() -> devuelve la diferencia en minutos de la hora 0 a tu zona horaria


let fecha1 = new Date();
c(fecha1.getHours());
c(fecha1.getUTCHours());
c(fecha1.getTimezoneOffset());

// 1:32:15