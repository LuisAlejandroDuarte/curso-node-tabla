
const { crearArchivo } =require('./helpers/multiplicar');

const argv = require('./config/yargs');
const colors = require('colors');            

console.clear();

//listar
//boolean
//default false

//const base =6;  



// const [ , , arg3='base =5']=process.argv;
// const [,base=5] = arg3.split("=");

// console.log(process.argv);
// console.log(argv);
//console.log('base:yargs',argv.b);
const base=argv.b;
const listar=argv.l;
const hasta=argv.h;



crearArchivo(base,listar,hasta)  
    .then(nombreArchivo=>console.log(nombreArchivo.rainbow,'creado'))
    .catch(err=>console.log(err));