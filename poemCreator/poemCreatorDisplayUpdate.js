import {GetElementById} from "./../ui.js";

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
    
    div.classList.remove("cssPoemCreatorGridContent");
    
    div.classList.add("cssPoemCreatorOutputContent");
    
    if(div.innerHTML == "/"){ 
        
        $output.insertAdjacentHTML("beforeend","<br>");
        div.remove();
    }
    
    else{
        $output.append(div);

        $output.append(" ");
    }
}