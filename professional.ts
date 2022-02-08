export class Professional
{


    public name:string;
    public age: number;
    public genre: string;
    public weight: number;
    public height:number;
    public hairColor: string;
    public eyeColor:string;
    public race:string;
    public isRetired:boolean;
    public nationality:string;
    public oscarsNumber:number;
    public profession:string;


    constructor (name:string, age: number, genre: string, weight: number, height:number, hairColor: string, eyeColor:string, race:string, isRetired:boolean,
                nationality:string, oscarsNumber:number, profession:string) 
    {
        this.name= name;
        this.age= age;
        this.genre= genre;
        this.weight= weight;
        this.height= height;
        this.hairColor= hairColor;
        this.eyeColor= eyeColor;
        this.race= race;
        this.isRetired= isRetired;
        this.nationality= nationality;
        this.oscarsNumber= oscarsNumber;
        this.profession=profession;  
    }
    //METODOS
    printAll(): void
        {
            console.log(this.name);
            console.log(this.age);
            console.log(this.genre);
            console.log(this.weight);
            console.log(this.height);
            console.log(this.hairColor);
            console.log(this.eyeColor);
            console.log(this.race);
            console.log(this.isRetired);
            console.log(this.nationality);
            console.log(this.oscarsNumber);
            console.log(this.profession);  
        }
}

// let actor: Professional = new Professional("Dextro", 46, "male", 86, 178, "black", "brown", "caucasian", false, "spanish", 3, "actor")

// actor.printAll()