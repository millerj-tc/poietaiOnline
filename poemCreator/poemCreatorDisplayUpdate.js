import {GetElementById,CreateElement} from "./../ui.js";

export function ContentDivPressed(div){

    if(_CheckIfLineFromPlayerToPressedIsUnobstructed) _AppendContent(div);
}

function _GetPressedDivPos(){


}

function _GetPlayerIndicatorDivPos(){


}

function _CheckIfLineFromPlayerToPressedIsUnobstructed(){

    return true
}
    
function _AppendContent(div){
    
    const $output = GetElementById("poemCreatorOutput");
    
    let $appendDiv = CreateElement("div");
    
    $appendDiv.innerHTML = div.innerHTML;
    
    $appendDiv.classList.add("cssPoemCreatorOutputContent");
    
    if($output.lastElementChild != null && $output.lastElementChild.innerHTML == "/") $output.lastElementChild.remove();
    
    _RemoveSpacesBeforePunctuationDivs($appendDiv);
    
    if(div.innerHTML == "/"){ 
        
        $output.insertAdjacentHTML("beforeend","<br>");
        
        $output.append($appendDiv);
        
        $appendDiv.style.opacity = "0%";
        
    }
    
    else{
        $output.append($appendDiv);

        const $spaceDiv = CreateElement("div");
        
        $spaceDiv.innerHTML = "&nbsp";
        
        $spaceDiv.classList.add("cssPoemCreatorOutputContent");
        
        $output.append($spaceDiv);
    }
    
    div.remove();
}

function _RemoveSpacesBeforePunctuationDivs(appendDiv){
    
    const $output = GetElementById("poemCreatorOutput");
    
    const $lastChild = $output.lastElementChild;
    
    const $appendInner = appendDiv.innerHTML;
    
    if($lastChild != null && $lastChild.innerHTML == "&nbsp;"){
        
        if($appendInner == "." || $appendInner == "," || $appendInner == "!" || $appendInner == "?"){
            
            $output.lastElementChild.remove();
        }
    }
}