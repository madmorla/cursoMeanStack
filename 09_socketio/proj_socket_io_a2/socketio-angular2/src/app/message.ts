export class Message {
    //Crea los atirubtos y asigna los parametros a los atributos:
    //private user : string;
    //private content : string;
    //constructor(user: string, content: string){
    //     this.user = user;
    //     this.content = content;
    // }
    
    constructor(private user: string, private content: string){}

    toString(){
        return this.user+ " " + this.content;
    }
}