const path = require('path');
const fs = require('fs');
//ejemplos unitarios
console.log(path.isAbsolute('/test/demo_path.js'));
console.log(path.isAbsolute('test/demo_path.js'));
console.log(path.resolve('test/demo_path.js'));


// -- ARMANDO LAS FUNCIONES (reconocer y convertir) --
const pathIsAbs = (paths) => {
    path.isAbsolute(paths) //return boolean
}
const convertToAbs = (paths) => {
    path.resolve(paths) //return path Absolut
}

//una condicional
const mdLinks = (ruta) => {  
    if(path.isAbsolute(ruta) === false){
        return console.log(path.resolve(ruta));
    }
}
mdLinks('test/demo_path.js');

// -- FUNCIONES (Reconociendo archivos o directorios) --
const validateAFile = (ruta) => {fs.lstatSync(ruta).isFile ()} //return boolean
const validateAdirectory = (ruta) => {fs.lstatSync(ruta).isDirectory()} //return boolean