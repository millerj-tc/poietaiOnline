import {GetPoemFromPoemCreatorOutput,RestoreSpacesBeforePunctuationAndStripCarriageReturns} from "./../poemCreator/poemCreatorUtils.js";

export function InsertUsedKeywords(text,keyWordsArr,mode = "plaintext"){
    
    let $returnText = "";
    
    let $matchedKeywordsArr = GetMatchedKeywords(keyWordsArr,false);
    
    if(mode == "plaintext") $returnText = text.replace("{{keywords}}",_GetPlaintextListOfUsedKeywords($matchedKeywordsArr));
    
    return $returnText
}

export function GetMatchedKeywords(keywordsArr,unique = true){
    
    if(keywordsArr == null || !Array.isArray(keywordsArr)) return
    
    let $poemText = GetPoemFromPoemCreatorOutput();
    
    $poemText = RestoreSpacesBeforePunctuationAndStripCarriageReturns($poemText);
    
    const $splitArr = $poemText.split(" ");
    
    let $matchedWords = [];
    
    for(const word of $splitArr){
        
        for(const keyword of keywordsArr){
            
            if(word.toLowerCase() == keyword.toLowerCase()) $matchedWords.push(word.toLowerCase());
        }
    }
    
    if(unique) $matchedWords = [... new Set($matchedWords)];
    
    return $matchedWords
}

function _GetPlaintextListOfUsedKeywords(matchedKeywordsArr){
    
    if(!Array.isArray(matchedKeywordsArr) || matchedKeywordsArr.length == 0) return
    
    let $returnString = "";
    
    if(matchedKeywordsArr.length == 1) return matchedKeywordsArr[0]
    if(matchedKeywordsArr.length == 2) return matchedKeywordsArr[0] + " and " + matchedKeywordsArr[1]
    
    for(let i = 0; i < matchedKeywordsArr.length; i++){
        
        let word = matchedKeywordsArr[i];
        
        if(i == 0) $returnString += word;
        else if(i == matchedKeywordsArr.length -1) $returnString += ", and " + word;
        else $returnString += ", " + word;
    }
    
    return $returnString
}