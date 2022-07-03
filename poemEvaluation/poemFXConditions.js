import {RestoreSpacesBeforePunctuationAndStripCarriageReturns,GetPoemFromPoemCreatorOutput} from "./../poemCreator/poemCreatorUtils.js";

export function PoemTextContainsWord(condWord){
    
    let $poemText = GetPoemFromPoemCreatorOutput();
    
    $poemText = RestoreSpacesBeforePunctuationAndStripCarriageReturns($poemText);
    
    for(const word of $poemText.split(" ")){
        
        if(word.toLowerCase() == condWord) return true
    }
}