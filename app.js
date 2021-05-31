const {crearArchivo} = require("./helpers/multiplicar")//IMPORTANTE
const argv = require("./config/yargs");



console.clear();

/*  //console.log(process.argv); Importante
const[ , ,arg3 = "Base = 5"] = process.argv; 
const[,base = 5] = arg3.split("="); */


crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.cyan,"creado".cyan))
    .catch(err => console.log(err));   

