import {ClearAllChildren,GetElementById,SetDisplayTo} from "./../../ui.js";

export function poemCreatorPrepPoemOutputTray(){
    
    _ClearOutput();
    
    _HideMemorizeAndReciteButtons();
}

function _ClearOutput(){
    
    const $output = GetElementById("poemCreatorOutput");
    
    ClearAllChildren($output);
}

function _HideMemorizeAndReciteButtons(){
    
    const $memButton = GetElementById("memorizeCreatedPoemButton");
    
    const $recButton = GetElementById("reciteCreatedPoemButton")
    
    SetDisplayTo($memButton,"none");
    
    SetDisplayTo($recButton,"none");
}