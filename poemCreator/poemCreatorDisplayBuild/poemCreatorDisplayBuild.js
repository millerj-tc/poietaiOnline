import {ContentDivPressed} from "./../poemCreatorDisplayUpdate.js";
import {ShuffleArray} from "./../../utils.js";
import {CreateElement,GetElementById} from "./../../ui.js";

export function poemCreatorDisplayBuildFlow(divArr){
    
    let $divArr = divArr;

    _AddEventListenerToAllDivs($divArr); //player indicator doesn't need to listen for this

    $divArr.push(_CreatePlayerDiv()); //so it's inserted and style classes added appropriately

    _AddStyleClassesToAllDivs($divArr);
    
    let $shuffledArr = _ShuffleDivElements($divArr);

    _AppendDivsToPoemCreationGrid($shuffledArr);

//        const $poemCreatorDisplay = this._CreatePoemCreatorDisplay();

    ///
}
    
function _CreatePlayerDiv(){

    const $playerDiv = CreateElement("div");

    $playerDiv.innerHTML = "X";
    
    console.error("assign a unique id that can be matched up with an object in the grid object so that you can get properties like / appending <br> instead and position, etc.");

    $playerDiv.classList.add("jsPoemCreatorPlayerIndicator");

    $playerDiv.classList.add("cssPoemCreatorPlayerIndicator");

    return $playerDiv
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