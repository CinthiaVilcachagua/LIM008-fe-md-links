"use strict";

var path = require('path');

var fs = require('fs'); //ejemplos unitarios


console.log(path.isAbsolute('/test/demo_path.js'));
console.log(path.isAbsolute('test/demo_path.js'));
console.log(path.resolve('test/demo_path.js')); // -- ARMANDO LAS FUNCIONES (reconocer y convertir) --

var pathIsAbs = function pathIsAbs(paths) {
  path.isAbsolute(paths); //return boolean
};

var convertToAbs = function convertToAbs(paths) {
  path.resolve(paths); //return path Absolut
}; //una condicional


var mdLinks = function mdLinks(path) {
  if (pathIsAbs(path) === false) {
    return console.log(convertToAbs(path));
  }
};

mdLinks('test/demo_path.js'); // -- FUNCIONES (Reconociendo archivos o directorios y extension '.md') --

var validateAFile = function validateAFile(ruta) {
  fs.lstatSync(ruta).isFile();
}; //return boolean


var validateADirectory = function validateADirectory(ruta) {
  fs.lstatSync(ruta).isDirectory();
}; //return boolean


var isAFileMd = function isAFileMd(paths) {
  path.extname(paths) === '.md';
}; //return boolean


var pathsExtractionDirectory = function pathsExtractionDirectory(ruta) {
  if (validateADirectory(ruta) === 'true') {//codigo
  } else {
    pathsExtractionFile(ruta);
  }
};

var pathsExtractionFile = function pathsExtractionFile(path) {
  if (validateAFile(path) === 'true') {
    if (isAFileMd === 'true') {//codigo
    } else {
        END; //remplazar por terminar.
      }
  } else {
      END; //remplazar por terminar.
    }
};