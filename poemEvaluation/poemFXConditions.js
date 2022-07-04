import {RestoreSpacesBeforePunctuationAndStripCarriageReturns,GetPoemFromPoemCreatorOutput} from "./../poemCreator/poemCreatorUtils.js";

export function PoemTextContainsWord(condWord){
    
    let $poemText = GetPoemFromPoemCreatorOutput();
    
    $poemText = RestoreSpacesBeforePunctuationAndStripCarriageReturns($poemText);
    
    for(const word of $poemText.split(" ")){
        
        if(word.toLowerCase() == condWord) return true
    }
}

export function PoemLength(comparison,length){
    
    let $poemText = GetPoemFromPoemCreatorOutput();
    
    let $wordCount = 0;
    
    $poemText = RestoreSpacesBeforePunctuationAndStripCarriageReturns($poemText);
    
    for(const word of $poemText.split(" ")){
        
        if(word.match(/\w*/gm)) $wordCount++
    }
    
    if(comparison == "lessThanOrEqualTo" && $wordCount <= length) return true
    else return false
}