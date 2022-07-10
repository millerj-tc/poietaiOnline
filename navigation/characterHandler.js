import {character} from "./character.js";

export class characterHandler{
    
    constructor(){
        
        this.characters = [];
    }
    
    AddCharacter(id,name,pronouns){
        
        const $char = new character(id,name,pronouns);
        
        this.characters.push($char);
        
        return $char
    }
}