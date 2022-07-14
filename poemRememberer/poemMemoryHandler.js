import {CreateElement} from "./../ui.js";
import {PoemEvaluationFlow} from "./../poemEvaluation/poemEvaluationFlow.js";

export class poem
{
    constructor(poemText,poemKey){
        
        this.poemText = poemText;
        
        this.poemKey = poemKey;
    }
}

export class poemMemoryHandler
{
    constructor(){
        
        this.poems = [];
    }
    
    AddPoemToMemory(poemText,poemKey){
        
        
        for(const poem of this.poems){
            
            if(poem.poemKey == poemKey) return
        }
        
        const $poem = new poem(poemText,poemKey)
        
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
        
        $poemButton.innerHTML = poem.poemText;
        
        $poemButton.addEventListener("click",function(){
            
            window.gameHandler.actionLogger.AddAction("recite from memory--");
            
            PoemEvaluationFlow(poem.poemText);
        });
    
        return $poemButton;
    }
}