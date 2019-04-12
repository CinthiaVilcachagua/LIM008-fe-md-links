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


exports.isAFileMd = isAFileMd;

var extractionMdFiles = function extractionMdFiles(paths) {
  var arrayPaths = []; //if(validateADirectory(paths) === true){

  var arrayNameFiles = fs.readdirSync(paths);
  console.log(arrayNameFiles);
  arrayNameFiles.forEach(function (element) {
    var pathToFile = path.join(paths, element);
    console.log(pathToFile);

    if (validateAFile(pathToFile) === true && isAFileMd(pathToFile) === true) {
      arrayPaths.push(pathToFile);
    } else if (validateADirectory(pathToFile) === true) {
      //validateADirectory(pathToFile) === true
      arrayPaths = arrayPaths.concat(extractionMdFiles(pathToFile));
      console.log(arrayPaths);
    }
  });
  return arrayPaths;
};

console.log(extractionMdFiles("C:\\Users\\Laboratoria\\Documents\\Laboratoria\\Proyecto 4\\LIM008-fe-md-links\\test\\Prueba\\nodo 2"));