import {defaultPoemContent} from "./defaultPoemContent.js"

export function poemCreatorContentGatherFlow(contentArr){

    // how to control frequencies to make it good?

    const $loc = _GetPlayerLocation()

    _AddCurrentLocationSources(contentArr,$loc);

    _AddDefaultContent(contentArr);

    _AddPlayerDomeContent(contentArr);
    
    return contentArr
}

function _GetPlayerLocation(){

    let $loc

    return $loc
}

function _AddCurrentLocationSources(contentArr,loc){

    //push copies
    
}

function _AddDefaultContent(contentArr){

    const $defaultContent = defaultPoemContent;

    for(const c in $defaultContent){

        let $copiedC = JSON.parse(JSON.stringify(c));
        
        contentArr.push($copiedC);
    }
}

function _AddPlayerDomeContent(contentArr){

    // coming soon, push copies
}

// validate number of contents passed