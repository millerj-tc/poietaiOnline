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
    
    if(div.innerHTML == "/"){ 
        
        $output.insertAdjacentHTML("beforeend","<br>");
        
    }
    
    else{
        $output.append($appendDiv);

        $output.append(" ");
    }
    
    div.remove();
}