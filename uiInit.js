import {GetElementById,ClearAllChildren} from "./ui.js";

export function UiInit(){
    
    const $outputTray = GetElementById("poemCreatorOutputTray");
    
    $outputTray.dataset.startTop = $outputTray.getBoundingClientRect().top;
        
    const $creatorTray = GetElementById("poemCreatorTray");
    
    $creatorTray.dataset.startTop = $creatorTray.getBoundingClientRect().top;
    
    const $reciterTray = GetElementById("poemReciterTray");
    
    $reciterTray.dataset.startTop = $reciterTray.getBoundingClientRect().top;
    
    console.error("just do it time based with some kind of cross check")

}
