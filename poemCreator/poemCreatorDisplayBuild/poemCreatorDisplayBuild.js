import {ContentDivPressed} from "./../poemCreatorDisplayUpdate.js";
import {ShuffleArray} from "./../../utils.js";
import {CreateElement,GetElementById} from "./../../ui.js";

export function poemCreatorDisplayBuildFlow(divArr){
    
    let $divArr = divArr;

    _AddEventListenerToAllDivs($divArr); //player indicator doesn't need to listen for this

    _AddStyleClassesToAllDivs($divArr);
    
    let $shuffledArr = _ShuffleDivElements($divArr);

    _AppendDivsToPoemCreationGridNEW($shuffledArr);

}

function _AddStyleClassesToAllDivs(divArr){

    for(const div of divArr){

        div.classList.add("cssPoemCreatorGridContent")
    }
}
    
function _AddEventListenerToAllDivs(divArr){

    for(const div of divArr){

        div.addEventListener("click", function(){ContentDivPressed(div)});
    }
}

function _ShuffleDivElements(divArr){
    
    return ShuffleArray(divArr);
}
    
function _AppendDivsToPoemCreationGrid(divArr){

    for(const div of divArr){

       GetElementById("poemCreatorGrid").append(div);
    }
}

function _AppendDivsToPoemCreationGridNEW(divArr){
    
    const $gridDOM = GetElementById("poemCreatorGrid");
    
    const $divDestructorArr = divArr;
    
    console.log($gridDOM.childNodes);
    
    for(const div of $gridDOM.childNodes){
        
        div.append($divDestructorArr.pop());
    }
}