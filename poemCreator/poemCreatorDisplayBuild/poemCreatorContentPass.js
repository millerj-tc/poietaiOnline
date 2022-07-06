export function poemCreatorContentPassFlow(modWrapArr){

    const $contentTextArr = _ExtractedTextPropsFromModWraps(modWrapArr);
    
    _SaveContentTextArrToActionLog();

    return _BuildContentDivs($contentTextArr);
}

function _ExtractedTextPropsFromModWraps(modWrapArr){

    const $returnArr = [];
    
    for(const modWrap of modWrapArr){
        
        if(modWrap.content.hasOwnProperty("source")){
            
            $returnArr.push(`<span class='allusionWord'>${modWrap.content.text}</span>`)
        }
        
        else $returnArr.push(modWrap.content.text);
    }

    return $returnArr

}

function _SaveContentTextArrToActionLog(contentTextArr){
    
    let $returnString = "";
    
    for(const word of contentTextArr){
        
        $returnString += word + ",";
    }
    
    window.gameHandler.actionLogger.AddAction($returnString);
}
    
function _BuildContentDivs(contentArr){

    let $returnArr = [];

    for(const content of contentArr){

        const $div = document.createElement("div");

        $div.innerHTML = content;

        $returnArr.push($div)
    }

    return $returnArr

}