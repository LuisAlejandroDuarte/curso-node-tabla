const argv = require('yargs')
        .options({
            'b':{
                alias:'base',
                type:'number',
                demandOption:true,
                describe:'Es la base de la tabla multiplicar'
            },
            'l':{
                alias:'listar',
                type:'boolean',               
                describe:'Muestra en consola  la tabla ',
                default:false
            },
            'h':{
                alias:'hasta',
                type:'number',               
                describe:'Hasta que número va la tabla',
                default:10
            }
         })
           .check((argv,options)=>{
            if (isNaN(argv.b)) {
                throw 'La base debe der un número';
                }
                 return true;
           })                
        .argv;


module.exports = argv;