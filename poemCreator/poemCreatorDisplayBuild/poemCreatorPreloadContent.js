export function poemCreatorPreloadContentFlow(contentArr){
    
    _PreloadPlayerDiv(contentArr);
    
    _PreloadTwoLinebreaks(contentArr);
    
    return contentArr
}

function _PreloadPlayerDiv(contentArr){
    
    const $playerDiv = CreateElement("div");

    $playerDiv.innerHTML = "X";
    
    contentArr.push($playerDiv)
}

function _PreloadTwoLinebreaks(contentArr){
    
    for(let i =0; i < 1; i++){
        
        contentArr.push({text:"/"})
    }
}