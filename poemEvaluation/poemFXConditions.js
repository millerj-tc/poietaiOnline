import {RestoreSpacesBeforePunctuationAndStripCarriageReturns} from "./../poemCreator/poemCreatorUtils.js";
import {GetPoemFromNavigationOutputPlayerPoemSpeak} from "./../navigation/navigationUtils.js";

export function PoemTextContainsWord(poem = "poemCreator",condWord){
    
    let $poemText;
    
    if(poem == "poemCreator") $poemText = GetPoemFromNavigationOutputPlayerPoemSpeak();
    else $poemText = poem.slice();
    
    $poemText = RestoreSpacesBeforePunctuationAndStripCarriageReturns($poemText);
    
    for(const word of $poemText.split(" ")){
        
        if(word.toLowerCase() == condWord) return true
    }
}

export function PoemLength(poem = "poemCreator",comparison,length){
    
    let $poemText;
    
    if(poem == "poemCreator") $poemText = GetPoemFromNavigationOutputPlayerPoemSpeak();
    else $poemText = poem.slice();
    
    let $wordCount = 0;
    
    $poemText = RestoreSpacesBeforePunctuationAndStripCarriageReturns($poemText);
    
    for(const word of $poemText.split(" ")){
        
        if(word.match(/\w*/gm)) $wordCount++
    }
    
    if(comparison == "<=" && $wordCount <= length) return true
    else if(comparison == ">=" && $wordCount >= length) return true
    else return false
}