import { Professional } from "./professional";
import { Movie } from "./movie";
import { Imdb } from "./imdb";
const fs = require('fs')
const readlineSync = require('readline-sync')

let actor1: Professional = new Professional("Dextro", 46, "male", 86, 178, "black", "brown", "caucasian", false, "spanish", 3, "actor")
let actor2: Professional = new Professional("Macarena", 31, "female", 52, 165, "blonde", "blue", "caucasian", false, "spanish", 0, "actor")
let actores: Professional[] = [actor1,actor2] 

let director: Professional = new Professional("Lloyd Kaufman", 76, "male",70,170, "white", "brown", "caucasian", true, "EEUU", 0, "director")

let guionista: Professional = new Professional("Lloyd Kaufman", 76, "male",70,170, "white", "brown", "caucasian", true, "EEUU", 0, "director")

let pelicula1: Movie = new Movie("Toxic Avenger", 1986, "EEUU", "action")

let pelicula2: Movie = new Movie("Toxic Avenger", 1989, "EEUU", "action")


let peliculaNombre = readlineSync.question('Inserte el nombre de la pelicula ');
console.log('Información actualizada.');

let anyoEstreno = readlineSync.question('Inserte el año de estreno de la pelicula ');
console.log('Información actualizada.');

let nacionalidad = readlineSync.question('Inserte la nacionalidad de la pelicula ');
console.log('Información actualizada.');

let genero = readlineSync.question('Inserte el genero de la pelicula ');
console.log('Información actualizada.');

let idioma = readlineSync.question('Inserte el idioma de la pelicula ');
console.log('Información actualizada.');

let plataforma = readlineSync.question('Inserte la plataforma en la que se encuentra la pelicula ');
console.log('Información actualizada.');

let mcu= readlineSync.question('Forma esta pelicula parte del Universo Cinematografico de Marvel? ')
{
    mcu = mcu.toUpperCase()
    if(mcu== "SI")
    {
        mcu = true;
    }    
    
}
let productora = readlineSync.question('Cual es la productora de esta pelicula? ');
console.log('Información actualizada.');

let protagonista = readlineSync.question('¿Como se llama el o la protagonista de la pelicula? ');
console.log('Información actualizada.');

let tomates: Movie = new Movie(peliculaNombre,anyoEstreno,nacionalidad,genero)

tomates.setIsmcu(mcu)
tomates.setLaunguage(idioma)
tomates.setPlataform(plataforma)
tomates.setmainCharacterName(protagonista)
tomates.setProducer(productora)

let peliculas: Movie[] = [pelicula1, pelicula2, tomates]

let videoclub: Imdb = new Imdb(peliculas)

videoclub.escribirEnFicheroJSON('imdbBBDD.json')


// let videoclub: Imdb = new Imdb(tomates,pelicula1)





console.log(tomates)



// console.log(genero)
// console.log(peliculaNombre)
// console.log(productora)
// console.log(protagonista)
// console.log(mcu)
// console.log(plataforma)
// console.log(anyoEstreno)
// console.log(idioma)
// console.log(nacionalidad)