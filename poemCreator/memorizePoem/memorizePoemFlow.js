import {MemorizePoemToProfile} from "./../../firebase/firebaseMemorizePoemToUserProfile.js";
import {GetElementById} from "./../../ui.js";

export function MemorizePoemFlow(){
    
    //** _CheckIfRememberSlotsAreFull();
    
    //** _ConfirmChoiceToForgetMostPastPoem();
    
    const poemText = _GetPoemText();
    
    //** _ParsePoemText();
    
    MemorizePoemToProfile(poemText);
}

function _GetPoemText(){
    
    let $returnString = "";
    
    const outputDivs = GetElementById("poemCreatorOutput").childNodes;
    
    for(const div of outputDivs){
        
        if(div.innerHTML != undefined) $returnString += div.innerHTML + "+";
    }
    
    return $returnString;
}