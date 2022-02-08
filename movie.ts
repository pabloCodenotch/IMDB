import { Professional } from "./professional";

export class Movie
{
     
    public title:string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public director:Professional;
    public writer: Professional;
    public language:string;
    public plataform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:string;
    public genre:string;

    
    constructor (title:string, releaseYear:number, nacionality:string, genre:string) 
    {
        this.title=title;
        this.releaseYear= releaseYear;
        this.actors;
        this.nacionality=nacionality;
        this.director;
        this.writer;
        this.language;
        this.plataform;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.genre= genre;
    }
    //SETTERS
    public setActors(valor: Professional[])
    {
        this.actors = valor
    } 

    public setDirector(valor:Professional)
    {
        this.director = valor
    } 

    public setWriter(valor:Professional)
    {
        this.writer  = valor
    } 

    public setLaunguage(valor:string)
    {
        this.language = valor
    } 

    public setPlataform(valor:string)
    {
        this.plataform = valor
    } 

    public setIsmcu(valor:boolean)
    {
        this.isMCU = valor
    } 

    public setmainCharacterName(valor:string)
    {
        this.mainCharacterName = valor
    } 

    public setProducer(valor :string)
    {
        this.producer = valor
    } 




    public printAll(): void
        {
            console.log(this.title);
            console.log(this.releaseYear);
            console.log(this.actors);
            console.log(this.nacionality);
            console.log(this.director);
            console.log(this.writer);
            console.log(this.language);
            console.log(this.plataform);
            console.log(this.isMCU);
            console.log(this.mainCharacterName);
            console.log(this.producer);
            console.log(this.genre);  
        }
}

// let actor1: Professional = new Professional("Dextro", 46, "male", 86, 178, "black", "brown", "caucasian", false, "spanish", 3, "actor")
// let actor2: Professional = new Professional("Macarena", 31, "female", 52, 165, "blonde", "blue", "caucasian", false, "spanish", 0, "actor")
// let actores: Professional[] = [actor1,actor2] 
// let director: Professional = new Professional("Lloyd Kaufman", 76, "male",70,170, "white", "brown", "caucasian", true, "EEUU", 0, "director")
// let guionista: Professional = new Professional("Lloyd Kaufman", 76, "male",70,170, "white", "brown", "caucasian", true, "EEUU", 0, "director")

// let pelicula1: Movie = new Movie("Toxic Avenger", 1986, "EEUU", "action")

// pelicula1.setActors(actores)
// pelicula1.setDirector(director)
// pelicula1.setIsmcu(false)
// pelicula1.setLaunguage("english")
// pelicula1.setPlataform("Netflix")
// pelicula1.setProducer("Troma Entertaiment")
// pelicula1.setWriter(guionista)
// pelicula1.setmainCharacterName("Melvin")

// // pelicula1.printAll()