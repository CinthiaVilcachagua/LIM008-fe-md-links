const path = require('path');
console.log(path.isAbsolute('/test/demo_path.js'));
console.log(path.isAbsolute('test/demo_path.js'));
console.log(path.resolve('test/demo_path.js'));

const mdLinks = (ruta) => {  
    if(path.isAbsolute(ruta) === false){
        return console.log(path.resolve(ruta));
    }
}
mdLinks('test/demo_path.js');