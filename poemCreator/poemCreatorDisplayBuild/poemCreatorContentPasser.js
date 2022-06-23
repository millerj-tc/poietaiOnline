import {poemCreatorDisplayBuilder} from "./poemCreatorDisplayBuilder.js";

export class poemCreatorContentPasser
{
    static PassContentFlow(contentArr){ //called by poemCreatorContentGatherer
        
        const $parsedContentArr = this._ParseContent(contentArr);
        
        const $divArr = this._BuildContentDivs($parsedContentArr);
        
        this._PassContentDivsToPoemContentDisplay($divArr);
    }
    
    static _ParseContent(contentArr){
                
        const $returnContentArr = contentArr;
        
        // if you need to do anything to a piece of content that will go here
        
        return $returnContentArr
        
    }
    
    static _BuildContentDivs(contentArr){
        
        let $returnArr = [];
        
        for(const content of contentArr){
            
            const $div = document.createElement("div");
            
            $div.innerHTML = content;
            
            $returnArr.push $div
        }
        
        return $returnArr
        
    }
    
    static _PassContentDivsToPoemContentDisplay(divArr){
        
        poemCreatorDisplayBuilder.LoadContentDivsFlow(divArr);
    }
}