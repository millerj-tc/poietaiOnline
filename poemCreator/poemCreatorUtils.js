import {GetElementById} from "./../ui.js";

export function TogglePoemCreatorOutputCollapsed(){
    
    const $tray = GetElementById("poemCreatorOutputTray");
    
    const $trayTop = $tray.getBoundingClientRect().y;
    
    const $button = GetElementById("poemCreatorOutputCollapseToggler");
    
    if($trayTop < 0){
        
        $button.innerHTML = `/\\`;
        
        $tray.style.transform = "translateY(75vh)"; ;
    }
    else{
        
        $button.innerHTML = "\\/";
        
        $tray.style.transform = "translateY(0)"
    }
}