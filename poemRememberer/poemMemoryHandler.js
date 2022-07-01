import {CreateElement} from "./../ui.js";
import {PoemEvaluationFlow} from "./../poemEvaluation/poemEvaluationFlow.js";

class poem
{
    constructor(parsedPoemText,poemKey){
        
        this.parsedPoemText = parsedPoemText;
        
        this.poemKey = poemKey;
    }
}

export class poemMemoryHandler
{
    constructor(){
        
        this.poems = [];
    }
    
    AddPoemToMemory(parsedPoemText,poemKey){
        
        
        for(const poem of this.poems){
            
            if(poem.poemKey == poemKey) return
        }
        
        const $poem = new poem(parsedPoemText,poemKey)
        
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
        
        $poemButton.addEventListener("click",function(){PoemEvaluationFlow(poem.parsedPoemText)});
    
        return $poemButton;
    }
}