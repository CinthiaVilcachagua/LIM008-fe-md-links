const path = require('path');
const fs = require('fs');
// --- VALIDANDO UNA RUTA(existe o no) ---
export const validateToPath = paths => fs.existsSync(paths); //return boolean

// -- ARMANDO LAS FUNCIONES (reconocer y convertir) --
export const pathIsAbs = paths => path.isAbsolute(paths) //return boolean
export const convertToAbs = paths => path.resolve(paths) //return path Absolut

// -- FUNCIONES (Reconociendo archivos o directorios y extension '.md') --
export const validateAFile = ruta => fs.statSync(ruta).isFile() //return boolean
export const validateADirectory = ruta => fs.statSync(ruta).isDirectory() //return boolean
export const isAFileMd = paths => path.extname (paths) === '.md' //return boolean

export const extractionMdFiles = (paths) => {
    let arrayPaths = [];
    //if(validateADirectory(paths) === true){
        const arrayNameFiles = fs.readdirSync(paths);
        console.log(arrayNameFiles)
        arrayNameFiles.forEach(element => {
            let pathToFile = path.join(paths, element);
            console.log(pathToFile);
            if (validateAFile(pathToFile) === true && isAFileMd(pathToFile) === true) {
            arrayPaths.push(pathToFile);
            } else if (validateADirectory(pathToFile) === true) {  //validateADirectory(pathToFile) === true
                arrayPaths = arrayPaths.concat(extractionMdFiles(pathToFile));
                console.log(arrayPaths)
            }
        })
    return arrayPaths;
  } 
  console.log(extractionMdFiles("C:\\Users\\Laboratoria\\Documents\\Laboratoria\\Proyecto 4\\LIM008-fe-md-links\\test\\Prueba\\nodo 1\\nodo 2"))
