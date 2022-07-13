import {GetElementById,ClearAllChildren,CreateElement,SetInnerTextTo} from "./ui.js";
import {poemRemembererShowPoems} from "./poemRememberer/poemRemembererShowPoems.js";
import {poemCreatorDisplayFlow} from "./poemCreator/poemCreatorDisplayBuild/poemCreatorDisplayFlow.js";

export function TogglePoemCreatorTrayCollapsed(){
    
    const $tray = GetElementById("poemCreatorTray");
    
    if($tray.dataset.transitioning == "true") return
    
    const $trayTop = $tray.getBoundingClientRect().y;
    
    const $button = GetElementById("poemCreatorTrayCollapseToggler");
    
    if($trayTop < -300){
        
        $button.innerHTML = `/\\`;
        
        $tray.style.transform = "translateY(85vh)";
        
        poemCreatorDisplayFlow();
    }
    else{ 
        PoemCreatorTrayClose();
        _PoemCreatorOutputClose();
    }
}

export function PoemCreatorTrayClose(){
    
    const $tray = GetElementById("poemCreatorTray");
        
    const $button = GetElementById("poemCreatorTrayCollapseToggler");
    
    $button.innerHTML = "\\/";

    $tray.style.transform = "translateY(0)"

    const $grid = GetElementById("poemCreatorGrid");

    $tray.addEventListener('transitionend', _ClearPoemCreatorGridOnCollapse);
    
    TransitioningBool($tray,true);
}

function _ClearPoemCreatorGridOnCollapse(){
    
    const $output = GetElementById("poemCreatorGrid");
    
    const $tray = GetElementById("poemCreatorTray");
    
    $tray.dataset.transitioning = false;
    
    ClearAllChildren($output);
    
    $tray.removeEventListener('transitionend', _ClearPoemCreatorGridOnCollapse);
}

export function TogglePoemCreatorOutputCollapsed(){
    
    const $tray = GetElementById("poemCreatorOutputTray");
    
    const $trayTop = $tray.getBoundingClientRect().y;
    
    const $button = GetElementById("poemCreatorOutputCollapseToggler");
    
    if($trayTop < -400){
        
        $button.innerHTML = `/\\`;
        
        window.gameHandler.actionLogger.AddAction("open output tray");
        
        $tray.style.transform = "translateY(55vh)";
    }
    else _PoemCreatorOutputClose();
}

export function TransitioningBool(elem,trueFalse){
    
    console.trace();
    
    elem.dataset.transitioning = trueFalse;
}

function _PoemCreatorOutputClose(){
    
    const $tray = GetElementById("poemCreatorOutputTray");
        
    const $button = GetElementById("poemCreatorOutputCollapseToggler");
    
    $button.innerHTML = "\\/";
        
    $tray.style.transform = "translateY(0)"
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
    else PoemReciterTrayClose();
}

export function PoemReciterTrayClose(){
    
    const $tray = GetElementById("poemReciterTray");
    
    if($tray.style.transform == "translateY(0)") return
    
    const $button = GetElementById("poemReciterCollapseToggler");
    
    $button.innerHTML = "/\\";
        
    $tray.style.transform = "translateY(0)";

    $tray.addEventListener('transitionend', _ClearPoemRemembererChildrenOnCollapse);
    
    TransitioningBool($tray,true);
}

function _ClearPoemRemembererChildrenOnCollapse(){
    
    const $output = GetElementById("poemRemembererDisplay");
    
    const $tray = GetElementById("poemReciterTray");
    
    ClearAllChildren($output);
    
    $tray.removeEventListener('transitionend', _ClearPoemRemembererChildrenOnCollapse);
}

export function CapitalizeLettersAfterAppropriatePunctuation(id){
    
    const $querySelectorAllArr = document.querySelectorAll(`#${id}`);
    
    for(const item of $querySelectorAllArr){

        SetInnerTextTo(item,item.innerText.replace(/(?<=\. \W*|\! \W*|\? \W*|\: \W*)\w/mg,function(match){return match.toUpperCase()})); //
    }
}

export function ReplaceNReturnWithBr(text){
    
    return text.replace(/\n/gm,"<br>");
}
