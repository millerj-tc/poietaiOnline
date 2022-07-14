import {GetElementById,ClearAllChildren} from "./ui.js";

export function UiInit(){
    
    const $outputTray = GetElementById("poemCreatorOutputTray");
    
    $outputTray.dataset.open = "false";
        
    const $creatorTray = GetElementById("poemCreatorTray");
    
    $creatorTray.dataset.open = "false";
    
    const $reciterTray = GetElementById("poemReciterTray");
    
    $reciterTray.dataset.open = "false";

}
