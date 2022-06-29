import {ContentDivPressed} from "./../poemCreatorDisplayUpdate.js";
import {ShuffleArray} from "./../../utils.js";
import {CreateElement,GetElementById} from "./../../ui.js";

export function poemCreatorDisplayBuildFlow(divArr){
    
    let $divArr = divArr;

    _AddStyleClassesToAllDivs($divArr);
    
    let $shuffledArr = _ShuffleDivElements($divArr);

    _AppendDivsToPoemCreationGrid($shuffledArr);
    
    _AddEventListenerToAllDivs($divArr);

//        const $poemCreatorDisplay = this._CreatePoemCreatorDisplay();

    ///
}

function _AddStyleClassesToAllDivs(divArr){

    for(const div of divArr){

        div.classList.add("cssPoemCreatorGridContent")
        
        if(div.innerHTML == "X"){
            div.id = "poemCreatorPlayerIndicator";
            div.classList.add("cssPoemCreatorPlayerIndicator");
        }
    }
}

function _ShuffleDivElements(divArr){
    
    return ShuffleArray(divArr);
}
    
function _AppendDivsToPoemCreationGrid(divArr){

    for(const div of divArr){
        
      const $divWrapper = CreateElement("div");
        
        $divWrapper.classList.add("cssPoemCreatorGridContentWrapper");

       GetElementById("poemCreatorGrid").append($divWrapper);
        
        $divWrapper.append(div);
        
        if(div.id == "poemCreatorPlayerIndicator"){
            
            const $emptyContentDiv = CreateElement("div");
            
            $emptyContentDiv.innerHTML = "";
;            
            $emptyContentDiv.classList.add("cssPoemCreatorGridContent");
            
            $divWrapper.append($emptyContentDiv);
        }
    }
}

function _AddEventListenerToAllDivs(divArr){

    for(const div of divArr){
        console.log(div.innerHTML);
        console.log(div.parentElement);
        console.log("---");
        div.parentElement.addEventListener("click", function(){ContentDivPressed(div.parentElement)});
    }
}