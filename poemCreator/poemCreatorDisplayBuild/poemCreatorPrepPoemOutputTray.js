import {ClearAllChildren,GetElementById,SetDisplayTo} from "./../../ui.js";

export function poemCreatorPrepPoemOutputTray(){
    
    _ClearOutput();
    
    _HideMemorizeButton();
}

function _ClearOutput(){
    
    const $output = GetElementById("poemCreatorOutput");
    
    ClearAllChildren($output);
}

function _HideMemorizeButton(){
    
    const $memButton = GetElementById("memorizeCreatedPoemButton");
    
    SetDisplayTo($memButton,"none");
}