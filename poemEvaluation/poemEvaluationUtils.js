import {GetPoemFromPoemCreatorOutput,RestoreSpacesBeforePunctuation} from "./../poemCreator/poemCreatorUtils.js";

export function GetPlaintextListOfUsedKeywords(keywordsArr){
    
    if(keywordsArr == null || !Array.isArray(keywordsArr)) return
    
    let $poemText = GetPoemFromPoemCreatorOutput();
    
    $poemText = RestoreSpacesBeforePunctuation($poemText);
    
    $poemText = $poemText.replace(/\n/gm,"");
    
    const $splitArr = $poemText.split(" ");
    
    const $matchedWords = [];
    
    for(const word of $splitArr){
        
        for(const keyword of keywordsArr){
            
            if(word.toLowerCase() == keyword.toLowerCase()) $matchedWords.push(word.toLowerCase());
        }
    }
    
    let $returnString = "";
    
    if($matchedWords.length == 1) return $matchedWords[0]
    if($matchedWords.length == 2) return $matchedWords[0] + " and " + $matchedWords[1]
    
    for(const word of $matchedWords){
        
        if(word == $matchedWords[0]) $returnString += word;
        else if(word == $matchedWords[$matchedWords.length -1]) $returnString += ", and " + word;
        else $returnString += ", " + word;
    }
    
    return $returnString
}