const path = require('path');
const fs = require('fs');

// -- ARMANDO LAS FUNCIONES (reconocer y convertir) --
export const pathIsAbs = paths => path.isAbsolute(paths) //return boolean
export const convertToAbs = paths => path.resolve(paths) //return path Absolut

/*
//una condicional
const mdLinks = (path) => {  
    if(pathIsAbs(path) === false){
        return console.log(convertToAbs(path));
    }
}
mdLinks('test/demo_path.js'); */

// -- FUNCIONES (Reconociendo archivos o directorios y extension '.md') --
export const validateAFile = ruta => fs.statSync(ruta).isFile() //return boolean
export const validateADirectory = ruta => fs.statSync(ruta).isDirectory() //return boolean
export const isAFileMd = paths => path.extname (paths) === '.md' //return boolean
/*
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
} */