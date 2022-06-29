import {GetElementById,CreateElement} from "./../ui.js";
import {GetDistance} from "./../utils.js";

export function ContentDivPressed(div){
    
    if(_isPlayerDiv(div)) return
    
    if(_CheckIfPlayerIndicatorIsWithinNMovesOfDiv(div)){
        
        _MovePlayerIndicatorToPressedDivPos(div);
        _AppendContent(div);
    }
}

function _isPlayerDiv(div){
    
    if(div.innerHTML == "X") return true
    else return false
}

function _CheckIfPlayerIndicatorIsWithinNMovesOfDiv(div,n=1){

    const divPos = _GetPressedDivPos(div);
    const playerIndicatorPos = _GetPlayerIndicatorDivPos();
    
    const gridspaceWidth = div.getBoundingClientRect().width;
    
    const distance = GetDistance(divPos[0],divPos[1],playerIndicatorPos[0],playerIndicatorPos[1])
    
    console.log(divPos);
    console.log(playerIndicatorPos);
    console.log(gridspaceWidth);
    console.log(distance);
    
    if(distance < (gridspaceWidth + 10)) return true
    else return false
}

function _GetPressedDivPos(div){

    const rect = div.getBoundingClientRect();
    
    return [rect.left,rect.top]
}

function _GetPlayerIndicatorDivPos(){
    
    const $playerDiv = GetElementById("poemCreatorPlayerIndicator");
    
    const rect = $playerDiv.getBoundingClientRect();
    
    return [rect.left,rect.top]


}

function _MovePlayerIndicatorToPressedDivPos(div){
    
    const $wrapper = div.parentElement;
    
    const $playerDiv = GetElementById("poemCreatorPlayerIndicator");
    
    $wrapper.append($playerDiv);
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