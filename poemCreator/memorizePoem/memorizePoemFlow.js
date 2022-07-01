import {MemorizePoemToProfile} from "./../../firebase/firebaseMemorizePoemToUserProfile.js";
import {GetElementById} from "./../../ui.js";
import {GetPoemHTMLFromPoemCreatorOutput} from "./../poemCreatorUtils.js";

export function MemorizePoemFlow(){
    
    //** _CheckIfRememberSlotsAreFull();
    
    //** _ConfirmChoiceToForgetMostPastPoem();
    
    const poemText = GetPoemHTMLFromPoemCreatorOutput();
    
    //** _ParsePoemText();
    
    MemorizePoemToProfile(poemText);
}