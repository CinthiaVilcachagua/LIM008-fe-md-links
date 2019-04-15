"use strict";

var _path = require("./path.js");

var mdLinks = function mdLinks(path, option) {
  if ((0, _path.validateToPath)(path) === true) {
    var newPathAbs = '';

    if ((0, _path.pathIsAbs)(path) === false) {
      newPathAbs = (0, _path.convertToAbs)(path);
      console.log(newPathAbs);
    } else {
      newPathAbs = path;
      console.log(newPathAbs);
    }

    return option(newPathAbs);
  } else {
    return 'La ruta no existe';
  }
};

console.log(mdLinks("C:\\Users\\Laboratoria\\Documents\\Laboratoria\\Proyecto 4\\LIM008-fe-md-links\\test\\Prueba\\nodo 1\\nodo 2", _path.extractionMdFiles)); //FUNCION LEER ARCHIVOS
//const readFile = file => fs.readFileSync(file);