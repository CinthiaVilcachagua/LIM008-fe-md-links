import { validateToPath, convertToAbs, pathIsAbs, extractionMdFiles } from './path.js';

const mdLinks = (path, option) => {
  if (validateToPath(path) === true) {
    let newPathAbs = ''
    if (pathIsAbs(path) === false) {
        newPathAbs = convertToAbs(path);
        console.log(newPathAbs)     
    } else {
        newPathAbs = path;
        console.log(newPathAbs)  
    }
    return option(newPathAbs);
     
  } else {
    return 'La ruta no existe'
  }
}
console.log(mdLinks("C:\\Users\\Laboratoria\\Documents\\Laboratoria\\Proyecto 4\\LIM008-fe-md-links\\test\\Prueba\\nodo 1\\nodo 2", extractionMdFiles))

//FUNCION LEER ARCHIVOS
//const readFile = file => fs.readFileSync(file);
