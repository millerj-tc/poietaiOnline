import {character} from "./character.js";

export class characterHandler{
    
    constructor(){
        
        this.characters = [];
    }
    
    AddCharacter(id){
        
        const $char = new character(id);
        
        this.characters.push($char);
        
        return $char
    }
}