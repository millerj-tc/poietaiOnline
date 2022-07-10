import {GetElementById,ClearInnerHTML,CreateElement,GetOrCreateDivInsideDOM,SetInnerTextTo} from "./../ui.js";
import {ParseNavigationText,AttachEventListenersDOMs} from "./navigationUtils.js";
import {ReplacePronouns} from "./../utils.js";

export function NavigationFlow(destPassage){
    
    _StoreDestPassageToActionLogger(destPassage);

    const $passageHandler = window.gameHandler.passageHandler;
    
     _SetCurrentPassage($passageHandler,destPassage);
    
     _ParseCurrentPassage($passageHandler);
    
    _DisplayCurrentPassage($passageHandler);
    
    _DisplayAskFavoriteButtons();
}

function _StoreDestPassageToActionLogger(destPassage){
    
    window.gameHandler.actionLogger.AddAction(destPassage);
}

function _SetCurrentPassage(passageHandler,destPassage){
    
    passageHandler.SetCurrentPassage(destPassage);
}

function _ParseCurrentPassage(passageHandler){
    
    const $passage = passageHandler.currentPassage;
    
    $passage.text = ParseNavigationText($passage.text);
}

function _DisplayCurrentPassage(passageHandler){
    
    const $navOutput = GetElementById("navigationOutput");
    
    ClearInnerHTML($navOutput);
    
    $navOutput.insertAdjacentHTML("beforeend",passageHandler.currentPassage.text)
    
    AttachEventListenersDOMs("navigationOutput");
}

function _DisplayAskFavoriteLinks(){
    
    gh = window.gameHandler;
    
    
    
    for (const char gh.characterHandler.characters){
        
        if(char.presentPassages.includes(gh.passageHandler.currentPassage)){
            
            const $favLink = GetOrCreateDivInsideDOM(`${char.id}FavoriteLink`,"navigationOutput");
            
            const $their = char.GetPronouns().their;
            
            SetInnerTextTo($favLink, `Ask ${char.GetCharacterName()} ${$their} favorite poem.`)
            
            $favLink.classList.add("passageLink");
            
            $favLink.addEventListener("onclick",function(){char.ShareFavoritePoems()})
        }
    }
}