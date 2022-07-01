import {GetElementById,ClearAllChildren} from "./../ui.js";

export function NavigationFlow(){

    const $passageHandler = window.gameHandler.passageHandler;
    
    //** _SetCurrentPassage();
    
    _DisplayCurrentPassage($passageHandler);
}

function _DisplayCurrentPassage(passageHandler){
    
    const $navOutput = GetElementById("navigationOutput");
    
    ClearAllChildren($navOutput);
    
    $navOutput.insertAdjacentHTML("beforeend",passageHandler.currentPassage.text)
}