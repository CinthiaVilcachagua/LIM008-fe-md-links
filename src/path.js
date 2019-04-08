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
const mdLinks = (path) => {  
    if(pathIsAbs(path) === false){
        return console.log(convertToAbs(path));
    }
}
mdLinks('test/demo_path.js');

// -- FUNCIONES (Reconociendo archivos o directorios y extension '.md') --
const validateAFile = (ruta) => {fs.lstatSync(ruta).isFile ()} //return boolean
const validateADirectory = (ruta) => {fs.lstatSync(ruta).isDirectory()} //return boolean
const isAFileMd = (paths) => {path.extname (paths) === '.md'} //return boolean

const pathsExtractionDirectory = (ruta) => {
    if(validateADirectory(ruta) === 'true'){
        //codigo
    } else {
        pathsExtractionFile(ruta)
    }
} 

const pathsExtractionFile = (path) => {
    if(validateAFile(path) === 'true'){
        if(isAFileMd === 'true'){
            //codigo
        }
        else {
            END //remplazar por terminar.
        }
    } else {
        END //remplazar por terminar.
    }
}