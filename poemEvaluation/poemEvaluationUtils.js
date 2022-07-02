import {GetPoemFromPoemCreatorOutput,RestoreSpacesBeforePunctuation} from "./../poemCreator/poemCreatorUtils.js";

export function GetPlaintextListOfUsedKeywords(keywordsArr){
    
    if(keywordsArr == null || !Array.isArray(keywordsArr)) return
    
    let $poemText = GetPoemFromPoemCreatorOutput();
    
    $poemText = RestoreSpacesBeforePunctuation($poemText);
    
    const $splitArr = $poemText.split(" ");
    
    const $matchedWords = [];
    
    for(const word of $splitArr){
        
        for(const keyword of keywordsArr){
            
            if(word.toLowerCase() == keyword.toLowerCase()) $matchedWords.push(word);
        }
    }
    
    let $returnString = "";
    
    if($matchedWords.length == 1) return $matchedWords[0]
    
    for(const word of $matchedWords){
        
        if(word == $matchedWords[0]) $returnString += word;
        else if(word == $matchedWords[$matchedWords.length -1]) $returnString += ", and " + word;
        else $returnString += ", " + word;
    }
    
    return $returnString
}