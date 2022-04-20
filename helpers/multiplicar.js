const fs = require('fs');
const { resolve } = require('path');
require('colors');    

const id=3;

const crearArchivo= async(base=5,listar=false,hasta=10) =>{

    try {
        console.log("==============================".green);
        console.log(`Tabla del ${base}`.blue);
        console.log("==============================".green);
    
        let salida='';
        for (let index = 1; index <=hasta ; index++) {
            salida +=`${base} x ${index} = ${base*index}\n`;           
        }

        if (listar==true) console.log(salida);
        
        fs.writeFileSync(`./salida/tabla-${base}.txt` ,salida,(err)=>{
            if (err) throw err;      
        });
    
         return (`tabla-${base}.txt`);        
    } catch (error) {
        throw err;   
    }

    
}

module.exports = {
    crearArchivo
}