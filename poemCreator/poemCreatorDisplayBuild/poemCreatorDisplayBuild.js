import {poemCreatorDisplayUpdate} from "./../poemCreatorDisplayUpdate.js";

function Flow(divArr){

    let $divArr = divArr;

    this._AddEventListenerToAllDivs($divArr); //player indicator doesn't need to listen for this

    $divArr.push(this._CreatePlayerDiv()); //so it's inserted and style classes added appropriately

    this._AddStyleClassesToAllDivs($divArr);

    this._AppendDivsToPoemCreationGrid($divArr);

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

        div.addEventListener("click", function(){poemCreatorDisplayUpdate.ContentDivPressed(div)});
    }
}
    
function _AppendDivsToPoemCreationGrid(divArr){

    for(const div of divArr){

        document.getElementById("poemCreatorGrid").append(div);
    }
}