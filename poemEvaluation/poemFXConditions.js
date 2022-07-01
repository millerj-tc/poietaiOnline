import {RestoreSpacesBeforePunctuation,GetPoemFromPoemCreatorOutput} from "./../poemCreator/poemCreatorUtils.js";

export function PoemTextContainsWord(condWord){
    
    let $poemText = GetPoemFromPoemCreatorOutput().slice();
    
    $poemText = RestoreSpacesBeforePunctuation($poemText);
    
    for(const word of $poemText.split(" ")){
        
        if(word.toLowerCase() == condWord) return true
    }
}