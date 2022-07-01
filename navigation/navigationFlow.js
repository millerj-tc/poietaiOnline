import {GetElementById,ClearInnerHTML,CreateElement} from "./../ui.js";
import {ParseNavigationText} from "./navigationUtils.js";

export function NavigationFlow(destPassage){

    const $passageHandler = window.gameHandler.passageHandler;
    
     _SetCurrentPassage($passageHandler,destPassage);
    
     _ParseCurrentPassage($passageHandler);
    
    _DisplayCurrentPassage($passageHandler);
}

function _SetCurrentPassage(passageHandler,destPassage){
    
    passageHandler.SetCurrentPassage(destPassage);
}

function _ParseCurrentPassage(passageHandler){
    
    const $passage = passageHandler.currentPassage;
    
    $passage.text = ParseNavigationText($passage.text);
    
//    if($passage.text.match(/\[\[(\S*)]]/gm) != null){
//    
//        for(const m of $passage.text.match(/\[\[(\S*)]]/gm)){
//
//            let $displayText = m.match(/\[\[(\S*)\|/gm)[0];
//
//            $displayText = $displayText.replace("[[","");
//
//            $displayText = $displayText.replace("|","");
//
//            let $passageId = m.match(/\|(\S*)]]/gm)[0];
//
//            $passageId = $passageId.replace("]]","");
//
//            $passageId = $passageId.replace("|","");
//
//            const $span = CreateElement("span");
//
//            $span.innerHTML = $displayText;
//
//            $span.classList.add("passageLink");
//
//            $span.dataset.target = $passageId;
//
//            $passage.text = $passage.text.replace(m,$span.outerHTML);
//        }
//    }
}

function _DisplayCurrentPassage(passageHandler){
    
    const $navOutput = GetElementById("navigationOutput");
    
    ClearInnerHTML($navOutput);
    
    $navOutput.insertAdjacentHTML("beforeend",passageHandler.currentPassage.text)
    
    for(const child of $navOutput.children){
        
        if(child.classList.contains("passageLink")){
            
            const $passageId = child.dataset.target;
            
            child.addEventListener("click",function(){NavigationFlow($passageId)});
        }
    }
}