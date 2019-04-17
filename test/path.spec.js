import {pathIsAbs,convertToAbs, validateAFile, validateADirectory, isAFileMd, extractionMdFiles} from '../src/path.js';

const output = [ 'C:\\Users\\Laboratoria\\Documents\\Laboratoria\\Proyecto 4\\LIM008-fe-md-links\\test\\Prueba\\nodo 1\\archive2.md',
'C:\\Users\\Laboratoria\\Documents\\Laboratoria\\Proyecto 4\\LIM008-fe-md-links\\test\\Prueba\\nodo 1\\nodo 2\\archive.md' ];

describe('pathIsAbs',() => {
    it('deberia ser una función', () => {
        expect(typeof pathIsAbs).toBe('function');
    })
    it('Deberia retornarme true si es una ruta Absoluta', () => {
        expect(pathIsAbs("C:\\Users\\Laboratoria\\Documents\\Laboratoria\\Proyecto 4\\LIM008-fe-md-links\\test\\demo_path.js")).toBe(true)
    })
    it('deberia retornarme false si es una relativa', () => {
        expect(pathIsAbs('test//demo_path.js')).toBe(false)
    })
});

describe('convertToAbs', () => {
    it('deberia ser una función', () => {
        expect(typeof convertToAbs).toBe('function');
    })
    it('Deberia retornarme la ruta convertida a Absoluta', () => {
        expect(convertToAbs('test//demo_path.js')).toBe("C:\\Users\\Laboratoria\\Documents\\Laboratoria\\Proyecto 4\\LIM008-fe-md-links\\test\\demo_path.js")
    })
});

describe('validateAFile', () => {
    it('deberia ser una función', () => {
        expect(typeof validateAFile).toBe('function')
    })
    it('deberia ser un archivo', () => {
        expect(validateAFile("C:\\Users\\Laboratoria\\Documents\\Laboratoria\\Proyecto 4\\LIM008-fe-md-links\\test\\Prueba\\nodo 1\\nodo 2\\index.log")).toBe(true)
    })
});

describe('validateADirectory', () => {
    it('deberia ser una función', () => {
        expect(typeof validateADirectory).toBe('function')
    })
    it('deberia ser un directorio', () => {
        expect(validateADirectory("C:\\Users\\Laboratoria\\Documents\\Laboratoria\\Proyecto 4\\LIM008-fe-md-links\\test\\Prueba\\nodo 1")).toBe(true)
    })
})

describe('isAFileMd', () => {
    it('deberia ser una función', () => {
        expect(typeof isAFileMd).toBe('function')
    })
    it('deberia retornar true si tiene la extension md', () => {
        expect(isAFileMd("C:\\Users\\Laboratoria\\Documents\\Laboratoria\\Proyecto 4\\LIM008-fe-md-links\\test\\Prueba\\nodo 1\\nodo 2\\archive.md")).toBe(true)
    })
});

describe('extractionMdFiles', () => {
    it('deberia ser una función', () => {
        expect(typeof extractionMdFiles).toBe('function')
    })
    it('deberia retornarme un array con los archivos con extensión .md', () => {
        expect(extractionMdFiles("C:\\Users\\Laboratoria\\Documents\\Laboratoria\\Proyecto 4\\LIM008-fe-md-links\\test\\Prueba\\nodo 1")).toEqual(output)
    })
})