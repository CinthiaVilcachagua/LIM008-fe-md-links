import {mdLinks} from "../src/link.js"
import {extractionMdFiles} from"../src/path.js"

const output = [ 'C:\\Users\\Laboratoria\\Documents\\Laboratoria\\Proyecto 4\\LIM008-fe-md-links\\test\\Prueba\\nodo 1\\archive2.md',
'C:\\Users\\Laboratoria\\Documents\\Laboratoria\\Proyecto 4\\LIM008-fe-md-links\\test\\Prueba\\nodo 1\\nodo 2\\archive.md' ];

describe('mdLinks', () => {
    it('deberia ser una función', () => {
        expect(typeof mdLinks).toBe('function')
    })
    it('deberia retornarme un array con los archivos con extensión .md solo si paso una ruta absoluta', () => {
        expect(mdLinks("C:\\Users\\Laboratoria\\Documents\\Laboratoria\\Proyecto 4\\LIM008-fe-md-links\\test\\Prueba\\nodo 1", extractionMdFiles)).toEqual(output)
    })
});