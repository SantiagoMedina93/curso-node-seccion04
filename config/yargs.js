const argv = require("yargs")
                .options("b",{
                    alias: "base",
                    type: "number",
                    demandOption: true,
                    description: "Base de la tabla de multiplicación"
                })
                .check ((argv, options)=>{
                    if(isNaN(argv.b)){
                        throw "La base tiene que ser un numero"
                    }
                    return true; 
                })
                .options("h",{
                    alias: "hasta",
                    type: "number",
                    demandOption: true,
                    description: "Hasta que valor multiplicar"
                })
                .options("l",{
                    alias: "listar",
                    type: "boolean",
                    default: false,
                    description: "Listar la tabla en la consola"
                })
                .argv; 

module.exports = argv;