"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _path = require("./path.js");

var mdLinks = function mdLinks(path, option) {
  if ((0, _path.validateToPath)(path) === true) {
    var newPathAbs = '';

    if ((0, _path.pathIsAbs)(path) === false) {
      newPathAbs = (0, _path.convertToAbs)(path);
    } else {
      newPathAbs = path;
    }

    return option(newPathAbs);
  } else {
    console.log('La ruta no existe');
  }
}; //FUNCION LEER ARCHIVOS
//const readFile = file => fs.readFileSync(file);


exports.mdLinks = mdLinks;