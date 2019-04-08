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


var mdLinks = function mdLinks(ruta) {
  if (path.isAbsolute(ruta) === false) {
    return console.log(path.resolve(ruta));
  }
};

mdLinks('test/demo_path.js'); // -- FUNCIONES (Reconociendo archivos o directorios) --

var validateAFile = function validateAFile(ruta) {
  fs.lstatSync(ruta).isFile();
}; //return boolean


var validateAdirectory = function validateAdirectory(ruta) {
  fs.lstatSync(ruta).isDirectory();
}; //return boolean