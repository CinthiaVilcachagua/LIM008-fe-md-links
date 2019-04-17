import { validateToPath, convertToAbs, pathIsAbs } from './path.js';

export const mdLinks = (path, option) => {
  if (validateToPath(path) === true) {
    let newPathAbs = ''
    if (pathIsAbs(path) === false) {
        newPathAbs = convertToAbs(path);  
    } else {
        newPathAbs = path; 
    }
    return option(newPathAbs);
     
  } else {
    console.log('La ruta no existe');
  }
}

//FUNCION LEER ARCHIVOS
//const readFile = file => fs.readFileSync(file);
