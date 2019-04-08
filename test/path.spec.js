import {pathIsAbs,convertToAbs, validateAFile, validateADirectory, isAFileMd} from '../src/path.js';


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
