import {passage} from "./passage.js";

export class passageHandler
{
    constructor(){
        
        this.passages = [];
        this.currentPassage;
    }
    
    AddPassage(id){
        
        const $passage = new passage(id);
        
        this.passages.push($passage);
        
        if(this.passages.length == 1) this.currentPassage = $passage;
        
        return $passage
    }
}