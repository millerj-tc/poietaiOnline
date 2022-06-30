import {GetElementById,ClearAllChildren} from "./../ui.js";
import {poemRemembererShowPoems} from "./poemRememberer/poemRemembererShowPoems.js";

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

export function TogglePoemReciterCollapsed(){
    
    const $tray = GetElementById("poemReciterTray");
    
    const $output = GetElementById("poemRemembererDisplay");
    
    const $trayBottom = $tray.getBoundingClientRect().bottom;
    
    const $screenBottom = window.innerHeight;
    
    const $button = GetElementById("poemReciterCollapseToggler");
    
    if($trayBottom > $screenBottom){
        
        $button.innerHTML = `\\/`;
        
        $tray.style.transform = "translateY(-45vh)";
        
        poemRemembererShowPoems();
    }
    else{
        
        $button.innerHTML = "/\\";
        
        $tray.style.transform = "translateY(0)";
        
        $tray.addEventListener('transitionend', _ClearPoemRemembererChildrenOnCollapse);
    }
}

function _ClearPoemRemembererChildrenOnCollapse(){
    
    const $output = GetElementById("poemRemembererDisplay");
    
    const $tray = GetElementById("poemReciterTray");
    
    ClearAllChildren($output);
    
    $tray.removeEventListener('transitionend', _ClearPoemRemembererChildrenOnCollapse);
}