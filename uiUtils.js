import {GetElementById,ClearAllChildren,CreateElement,SetInnerTextTo} from "./ui.js";
import {poemRemembererShowPoems} from "./poemRememberer/poemRemembererShowPoems.js";
import {poemCreatorDisplayFlow} from "./poemCreator/poemCreatorDisplayBuild/poemCreatorDisplayFlow.js";

function _GetTrayAtStartPos(trayElem){
    
    console.log(`${trayElem.dataset.startTop} vs ${trayElem.getBoundingClientRect().top}`);
    
    if(trayElem.dataset.startTop == trayElem.getBoundingClientRect().top) return true
    else return false
}

export function TogglePoemCreatorTrayCollapsed(){
    
    const $tray = GetElementById("poemCreatorTray");
        
    const $button = GetElementById("poemCreatorTrayCollapseToggler");
    
    if(_GetTrayAtStartPos($tray)){
        
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
    
    if(_GetTrayAtStartPos($tray)) return
        
    const $button = GetElementById("poemCreatorTrayCollapseToggler");
    
    $button.innerHTML = "\\/";

    $tray.style.transform = "translateY(0)"

    const $grid = GetElementById("poemCreatorGrid");
}

export function TogglePoemCreatorOutputCollapsed(){
    
    const $tray = GetElementById("poemCreatorOutputTray");
        
    const $button = GetElementById("poemCreatorOutputCollapseToggler");
    
    if(_GetTrayAtStartPos($tray)){
        
        $button.innerHTML = `/\\`;
        
        window.gameHandler.actionLogger.AddAction("open output tray");
        
        $tray.style.transform = "translateY(55vh)";
    }
    else _PoemCreatorOutputClose();
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
    
    if(_GetTrayAtStartPos($tray)){
        
        $button.innerHTML = `\\/`;
        
        $tray.style.transform = "translateY(-45vh)";
        
        poemRemembererShowPoems();
    }
    else PoemReciterTrayClose();
}

export function PoemReciterTrayClose(){
    
    const $tray = GetElementById("poemReciterTray");
    
    if(_GetTrayAtStartPos($tray)) return
    
    const $button = GetElementById("poemReciterCollapseToggler");
    
    $button.innerHTML = "/\\";
        
    $tray.style.transform = "translateY(0)";
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
