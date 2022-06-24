import {ContentDivPressed} from "./../poemCreatorDisplayUpdate.js";

export function poemCreatorDisplayBuildFlow(divArr){
    
    let $divArr = divArr;

    _AddEventListenerToAllDivs($divArr); //player indicator doesn't need to listen for this

    $divArr.push(_CreatePlayerDiv()); //so it's inserted and style classes added appropriately

    _AddStyleClassesToAllDivs($divArr);

    _AppendDivsToPoemCreationGrid($divArr);

//        const $poemCreatorDisplay = this._CreatePoemCreatorDisplay();

    ///
}
    
function _CreatePlayerDiv(){

    const $playerDiv = document.createElement("div");

    $playerDiv.innerHTML = "X";

    $playerDiv.classList.add("jsPoemCreatorPlayerIndicator");

    $playerDiv.classList.add("cssPoemCreatorPlayerIndicator");

    return $playerDiv
}
    
function _AddStyleClassesToAllDivs(divArr){

    for(const div of divArr){

        div.classList.add("cssPoemCreatorContent")
    }
}
    
function _AddEventListenerToAllDivs(divArr){

    for(const div of divArr){

        div.addEventListener("click", function(){ContentDivPressed(div)});
    }
}
    
function _AppendDivsToPoemCreationGrid(divArr){

    for(const div of divArr){

        document.getElementById("poemCreatorGrid").append(div);
    }
}