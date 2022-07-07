import {poem} from "./../poemRememberer/poemMemoryHandler.js";

export class character
{
    constructor(){
        
        
        this.attentive = true;
        this.usedKeywords = [];
        this.recitedToToday = false;
        this.heardPoems = [];
    }
    
    AddHeardPoem(parsedPoemText,poemKey){
        
        for(const poem of this.heardPoems){
            
            if(poem.poemKey == poemKey) return
        }
        
        const $poem = new poem(parsedPoemText,poemKey)
        
        this.heardPoems.push($poem);
    }
}