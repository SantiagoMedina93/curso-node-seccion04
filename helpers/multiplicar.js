const fs = require("fs"); //IMPORTANTE NO ES UNA DEPENDENCIA, ES UNA PROPIEDAD PROPIA DE NODE
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 5) => {
    try {
        let salidaConsola = "";
        let salidaArchivo = "";

        for (let i = 1; i <= hasta; i++) {
            salidaConsola += `${base} ${"x".green} ${i} ${"=".green} ${base*i}\n`
            salidaArchivo += `${base} x ${i} = ${base*i}\n`
        }
        

        if(listar){
            console.log("=================".yellow);
            console.log("   Tabla del".green,colors.green(base));
            console.log("=================".yellow);
            console.log(salidaConsola);
        }else{
            console.log("No se introdujo el parametro de listar".red);
        }


        //IMPORTANTE
        fs.writeFileSync(`./salida/tabla-${base}.text`,salidaArchivo);
        return `tabla-${base}.text`;         
    
    }catch (err) {
        throw err;
    }
}



module.exports = {
    crearArchivo
}