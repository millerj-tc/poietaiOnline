export function poemCreatorContentPassFlow(modWrapArr){

    const $contentTextArr = _ExtractedTextPropsFromModWraps(modWrapArr);

    return _BuildContentDivs($contentTextArr);
}

function _ExtractedTextPropsFromModWraps(modWrapArr){

    const $returnArr = [];
    
    for(const modWrap of modWrapArr){
        
        $returnArr.push(modWrap.content.text);
    }

    return $returnArr

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