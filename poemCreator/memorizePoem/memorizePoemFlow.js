import {MemorizePoemToProfile} from "./../../firebase/saveDataToUserProfile.js";
import {GetElementById} from "./../../ui.js";
import {GetPoemHTMLFromPoemCreatorOutput} from "./../poemCreatorUtils.js";

export function MemorizePoemFlow(){
    
    _AddMemorizeActionToLogger();
    
    window.alert("Memorized! Open the tray at the bottom of the window with the ▲ button to see memorized poems.");
    
    //** _CheckIfRememberSlotsAreFull();
    
    //** _ConfirmChoiceToForgetMostPastPoem();
    
    const poemText = GetPoemHTMLFromPoemCreatorOutput();
    
    //** _ParsePoemText();
    
    MemorizePoemToProfile(poemText);
}

function _AddMemorizeActionToLogger(){
    
    window.gameHandler.actionLogger.AddAction("memorize poem",GetPoemHTMLFromPoemCreatorOutput());
}