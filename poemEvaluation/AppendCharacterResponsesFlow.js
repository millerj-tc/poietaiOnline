import {AppendToDivOnce} from "./../navigation/passageFX.js";
import {InsertUsedKeywords} from "./poemEvaluationUtils.js";
import {GetPoemFromPoemCreatorOutput} from "./../poemCreator/poemCreatorUtils.js";
import {GetPoemFromNavigationOutputPlayerPoemSpeak} from "./../navigation/navigationUtils.js";

export function AppendCharacterResponsesFlow(){

    const $currentPassage = window.gameHandler.passageHandler.currentPassage;
    
    for(const charResponseHandler of $currentPassage.passageFxHandler.characterResponseHandlers){
        
        let $triggeredResponses = _LoadTriggeredResponses(charResponseHandler);
        
        let $charResponseString = _GetCharacterResponseString($triggeredResponses,charResponseHandler);
        
        $charResponseString = _StateIfFavePoem(charResponseHandler) + $charResponseString;
        
        AppendToDivOnce(charResponseHandler.characterId + "Response", $charResponseString)
        
    }

}

function _LoadTriggeredResponses(charResponseHandler){
    
    let $returnArr = [];
    
    const $charRespoArr = charResponseHandler.characterResponses;
    
    for(const response of $charRespoArr){
        
        if(!response.conditionHandler.Evaluate()) continue
        
        window.gameHandler.actionLogger.AddAction(`>>>` + response.actionLoggerString,response.actionLoggerDetails)
        
        $returnArr.push(response);
    }
    
    return $returnArr
}

function _GetCharacterResponseString(triggeredResponses,charResponseHandler){
    
    let $returnString = "";
    
    let $charRespoArr = triggeredResponses;
    
    if($charRespoArr.length == 0){
        
        const $defaultResponse = charResponseHandler.defaultResponse;
        
         let $responseString = InsertUsedKeywords($defaultResponse.text,$defaultResponse.keywordsArr);
        
        window.gameHandler.actionLogger.AddAction(`>>>` + $defaultResponse.actionLoggerString,$defaultResponse.actionLoggerDetails)
        
        return $responseString + "<br><br>"
    }
    for(const response of $charRespoArr){
        
        let $responseString = InsertUsedKeywords(response.text,response.keywordsArr) + "<br><br>";

        if(response == $charRespoArr[0]){
            
            $returnString += _ParseFirstResponseString($responseString);
        }
        
        else if(response == $charRespoArr[$charRespoArr.length - 1]){
            
            $returnString += _ParseLastResponseString($responseString);
        }
        
        else $returnString += _ParseMiddleResponseString($responseString);
    }
    
    return $returnString
}

function _StateIfFavePoem(charResponseHandler){
    
    const $char = window.gameHandler.characterHandler.GetCharacterById(charResponseHandler.characterId);
    
    if($char.GetFavoriteAllTimePoem() == null) return ""
    
    const $favAllTime = $char.GetFavoriteAllTimePoem().poem.poemText;
    
    const $favRecent = $char.GetFavoriteRecentPoem().poem.poemText;
    
    console.log(GetPoemFromNavigationOutputPlayerPoemSpeak());
    
    console.log($favAllTime);
    
    if(GetPoemFromNavigationOutputPlayerPoemSpeak() == $favAllTime){
        
        console.log("a fave!");
        
        window.gameHandler.actionLogger.AddAction(">>>fave all time!",$favAllTime);
        
        return $char.bestPoemEver + "<br><br>";
    }
    else if(GetPoemFromNavigationOutputPlayerPoemSpeak() == $favRecent){
        
        window.gameHandler.actionLogger.AddAction(">>>fave recent!",$favRecent);
        
        return $char.bestRecentPoem + "<br><br>";
    }
    
    return "";
}

function _ParseFirstResponseString(text){
    
    let $returnString = text;
    
    $returnString = $returnString.replace(/(?<={{first\|.*)\}\}/gm,"");
    
    $returnString = $returnString.replace(/\{\{first\|/gm,"");
    
    $returnString = _RemoveLastSections($returnString);
    
    $returnString = _RemoveMiddleSections($returnString)
    
    return $returnString
}

function _RemoveFirstSections(text){
    
    return text.replace(/\{\{first\|.*\}\}/gm,"");
}

function _RemoveNotFirstSections(text){
    
    return text.replace(/\{\{notFirst\|.*\}\}/gm,"");
}

function _ParseMiddleResponseString(text){
    
    let $returnString = text;
    
    $returnString = $returnString.replace(/(?<={{middle\|.*)\}\}/gm,"");
    
    $returnString = $returnString.replace(/\{\{middle\|/gm,"");
    
    $returnString = _RemoveFirstSections($returnString);
    
    $returnString = _RemoveLastSections($returnString)
    
    return $returnString
}

function _RemoveMiddleSections(text){
    
    return text.replace(/\{\{middle\|.*\}\}/gm,"");
}

function _ParseLastResponseString(text){
    
    let $returnString = text;
    
    $returnString = $returnString.replace(/(?<={{last\|.*)\}\}/gm,"");
    
    $returnString = $returnString.replace(/\{\{last\|/gm,"");
    
    $returnString = _RemoveFirstSections($returnString);
    
    $returnString = _RemoveMiddleSections($returnString)
    
    return $returnString
}

function _RemoveLastSections(text){
    
    return text.replace(/\{\{last\|.*\}\}/gm,"");
}

//// STUFF BELOW DOESN'T WORK

function _TextIncludeSectionsLabeled(text,label){
    
    let $returnString = text;
    
    //const re0 = new RegExp(`(?<={{` + label + `\|\w*)\}\}`, 'gm');
    
    const re0 = new RegExp(label, 'gm');
    
    //const re1 = new RegExp(`\{\{` + label + `\|`, 'gm');;
    
    $returnString = $returnString.replace(re0,"");
    
    //$returnString = $returnString.replace(re1,"");
    
    return $returnString
}

function _TextRemoveSectionsLabeled(text,label){
    
    
    let $returnString = text;
    
    const re0 = new RegExp(`\{\{` + String(label) + `\|\w*\}\}`, 'gm');
    
    $returnString = $returnString.replace(re0,"");
    
    return $returnString
}