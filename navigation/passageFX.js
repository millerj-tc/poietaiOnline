import {NavigationFlow} from "./navigationFlow.js";
import {GetOrCreateDivInsideDOM,GetElementById} from "./../ui.js";
import {ParseNavigationText,AttachEventListenersDOMs} from "./navigationUtils.js";

export function GoToPassage(passId){
    
    NavigationFlow(passId);
}

export function AppendToDiv(id,text){
    
    const $navOutput = GetElementById("navigationOutput");
    
    const $div = GetOrCreateDivInsideDOM(id,$navOutput);
    
    const $navText = ParseNavigationText(text);
    
    $div.insertAdjacentHTML("beforeend",$navText);
    
    AttachEventListenersDOMs(id);
}