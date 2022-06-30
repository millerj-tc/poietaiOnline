import {CreateElement} from "./../ui.js";

class poem
{
    constructor(parsedPoemText){
        
        this.parsedPoemText = parsedPoemText;
    }
}

export class poemMemoryHandler
{
    constructor(){
        
        this.poems = [];
    }
    
    AddPoemToMemory(parsedPoemText){
        
        const $poem = new poem(parsedPoemText)
        
        this.poems.push($poem);
    }
    
    ConvertAllPoemsToButtonDivs(){
        
        let $returnArr = [];
        
        for(const poem of this.poems){
            
            $returnArr.push(this._ConvertPoemToButtonDiv(poem));
        }
        
        return $returnArr
    }
    
    _ConvertPoemToButtonDiv(poem){
        
        const $poemButton = CreateElement("button");
        
        $poemButton.classList.add("poemRemembererPoemButton");
        
        $poemButton.innerHTML = poem.parsedPoemText;
    
        return $poemButton;
    }
}