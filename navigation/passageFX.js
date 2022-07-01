import {NavigationFlow} from "./navigationFlow.js";
import {GetOrCreateDivInsideDOM,GetElementById} from "./../ui.js";

export function GoToPassage(passId){
    
    NavigationFlow(passId);
}

export function AppendToDiv(id,text){
    
    const $navOutput = GetElementById("navigationOutput");
    
    const $div = GetOrCreateDivInsideDOM(id,$navOutput);
    
    $div.append(text);
}