import { Professional } from "./professional";
import { Movie } from "./movie";
let fs = require('fs')

export class Imdb
{
    public peliculas: Movie[]

    constructor(array: Movie[])
    {
        this.peliculas = array;
    }

    public escribirEnFicheroJSON(fichero: string)
    {
       let momoa = JSON.stringify(this)
       fs.writeFileSync(fichero, momoa)
       
    }

    public obtenerInstanciaIMDB(fichero: string):Imdb
    {
        let res = fs.readFileSync(fichero,'utf-8');
        return JSON.parse(res)
    }
}

// let actor1: Professional = new Professional("Dextro", 46, "male", 86, 178, "black", "brown", "caucasian", false, "spanish", 3, "actor")
// let actor2: Professional = new Professional("Macarena", 31, "female", 52, 165, "blonde", "blue", "caucasian", false, "spanish", 0, "actor")
// let actores: Professional[] = [actor1,actor2] 

// let director: Professional = new Professional("Lloyd Kaufman", 76, "male",70,170, "white", "brown", "caucasian", true, "EEUU", 0, "director")

// let guionista: Professional = new Professional("Lloyd Kaufman", 76, "male",70,170, "white", "brown", "caucasian", true, "EEUU", 0, "director")

// let pelicula1: Movie = new Movie("Toxic Avenger", 1986, "EEUU", "action")

// let pelicula2: Movie = new Movie("Toxic Avenger", 1989, "EEUU", "action")

// pelicula1.setActors(actores)
// pelicula1.setDirector(director)
// pelicula1.setIsmcu(false)
// pelicula1.setLaunguage("english")
// pelicula1.setPlataform("Netflix")
// pelicula1.setProducer("Troma Entertaiment")
// pelicula1.setWriter(guionista)
// pelicula1.setmainCharacterName("Melvin")

// pelicula2.setActors(actores)
// pelicula2.setDirector(director)
// pelicula2.setIsmcu(false)
// pelicula2.setLaunguage("english")
// pelicula2.setPlataform("Netflix")
// pelicula2.setProducer("Troma Entertaiment")
// pelicula2.setWriter(guionista)
// pelicula2.setmainCharacterName("Melvin")




// let peliculas: Movie[] = [pelicula1, pelicula2] 

// let imedebe: Imdb = new Imdb(peliculas)

