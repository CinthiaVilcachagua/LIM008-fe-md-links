"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAFileMd = exports.validateADirectory = exports.validateAFile = exports.convertToAbs = exports.pathIsAbs = void 0;

var path = require('path');

var fs = require('fs'); // -- ARMANDO LAS FUNCIONES (reconocer y convertir) --


var pathIsAbs = function pathIsAbs(paths) {
  return path.isAbsolute(paths);
}; //return boolean


exports.pathIsAbs = pathIsAbs;

var convertToAbs = function convertToAbs(paths) {
  return path.resolve(paths);
}; //return path Absolut

/*
//una condicional
const mdLinks = (path) => {  
    if(pathIsAbs(path) === false){
        return console.log(convertToAbs(path));
    }
}
mdLinks('test/demo_path.js'); */
// -- FUNCIONES (Reconociendo archivos o directorios y extension '.md') --


exports.convertToAbs = convertToAbs;

var validateAFile = function validateAFile(ruta) {
  return fs.statSync(ruta).isFile();
}; //return boolean


exports.validateAFile = validateAFile;

var validateADirectory = function validateADirectory(ruta) {
  return fs.statSync(ruta).isDirectory();
}; //return boolean


exports.validateADirectory = validateADirectory;

var isAFileMd = function isAFileMd(paths) {
  return path.extname(paths) === '.md';
}; //return boolean

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


exports.isAFileMd = isAFileMd;