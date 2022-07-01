import {NavigationFlow} from "./navigationFlow.js";
import {GetOrCreateDivInsideDOM,GetElementById,ClearInnerHTML} from "./../ui.js";
import {ParseNavigationText,AttachEventListenersDOMs} from "./navigationUtils.js";
import {GetPlaintextListOfUsedKeywords} from "./../poemEvaluation/poemEvaluationUtils.js";

export function GoToPassage(passId){
    
    NavigationFlow(passId);
}

export function AppendToDivOnce(id,text,keyWordsArr){
    
    const $navOutput = GetElementById("navigationOutput");
    
    const $div = GetOrCreateDivInsideDOM(id,$navOutput);
    
    let $navText = ParseNavigationText(text);
    
    $navText = $navText.replace("{{keywords}}",GetPlaintextListOfUsedKeywords(keyWordsArr));
    
    ClearInnerHTML($div);
    
    $div.insertAdjacentHTML("beforeend",$navText);
    
    AttachEventListenersDOMs(id);
}