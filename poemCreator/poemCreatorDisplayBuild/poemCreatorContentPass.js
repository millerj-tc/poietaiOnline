export function poemCreatorContentPassFlow(modWrapArr){

    _SaveContentTextArrToActionLog(modWrapArr);
    
    const $contentTextArr = _ExtractedTextPropsFromModWraps(modWrapArr);

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

function _SaveContentTextArrToActionLog(modWrapArr){
    
    let $returnString = "";
    
    for(const modWrap of modWrapArr){
        
        $returnString += modWrap.content.text + ",";
    }
    
    window.gameHandler.actionLogger.AddAction("open poem creation tray",$returnString);
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