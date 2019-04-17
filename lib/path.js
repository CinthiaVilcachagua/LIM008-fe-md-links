"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractionMdFiles = exports.isAFileMd = exports.validateADirectory = exports.validateAFile = exports.convertToAbs = exports.pathIsAbs = exports.validateToPath = void 0;

var path = require('path');

var fs = require('fs'); // --- VALIDANDO UNA RUTA(existe o no) ---


var validateToPath = function validateToPath(paths) {
  return fs.existsSync(paths);
}; //return boolean
// -- ARMANDO LAS FUNCIONES (reconocer y convertir) --


exports.validateToPath = validateToPath;

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
  var arrayPaths = [];

  if (validateADirectory(paths) === true) {
    var arrayNameFiles = fs.readdirSync(paths); //me devuleve solo la parte del nombre del archivo

    arrayNameFiles.forEach(function (element) {
      var pathToFile = path.join(paths, element); //une la parte inicial de la ruta con el nombre del archivo;

      if (validateAFile(pathToFile) === true && isAFileMd(pathToFile) === true) {
        arrayPaths.push(pathToFile);
      } else if (validateADirectory(pathToFile) === true) {
        arrayPaths = arrayPaths.concat(extractionMdFiles(pathToFile));
      }
    });
  }

  return arrayPaths;
}; //console.log(extractionMdFiles("C:\\Users\\Laboratoria\\Documents\\Laboratoria\\Proyecto 4\\LIM008-fe-md-links\\test\\Prueba\\nodo 1"))


exports.extractionMdFiles = extractionMdFiles;