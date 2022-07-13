import {GetElementById} from "./ui.js";
import {TransitioningBool} from "./uiUtils.js";

export function UiInit(){
    
    const $outputTray = GetElementById("poemCreatorOutputTray");
    
    const $creatorTray = GetElementById("poemCreatorOutputTray");
    
    const $reciterTray = GetElementById("poemReciterTray");
    
    $outputTray.addEventListener("transitionend",TransitioningBool($outputTray,false));
    
    $creatorTray.addEventListener("transitionend",TransitioningBool($creatorTray,false));
    
    $reciterTray.addEventListener("transitionend",function(){TransitioningBool($reciterTray,false)});    

}
