import {GetElementById} from "./../ui.js";

export function TogglePoemCreatorOutputCollapsed(){
    
    const $tray = GetElementById("poemCreatorOutputTray");
    
    const $trayTop = $tray.getBoundingClientRect().y;
    
    const $button = GetElementById("poemCreatorOutputCollapseToggler");
    
    console.log($trayTop);
    
    if($trayTop < 0){
        
        $button.innerHTML = `/\\`;
        
        $tray.style.transform = "translateY(70vh)"; ;
    }
    else{
        
        $button.innerHTML = "\\/";
        
        $tray.style.transform = "translateY(0)"
    }
}