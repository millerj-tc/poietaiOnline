import {defaultPoemContent} from "./defaultPoemContent.js"

export function poemCreatorContentGatherFlow(contentArr){

    // how to control frequencies to make it good?

//    const $loc = _GetPlayerLocation()

    _AddCurrentPassageSources(contentArr);

    _AddDefaultContent(contentArr);

    _AddPlayerDomeContent(contentArr);
    
    return contentArr
}

//function _GetPlayerLocation(){
//
//    let $loc
//
//    return $loc
//}

function _AddCurrentPassageSources(contentArr){

    //push copies
    
    const $passageHandler = window.gameHandler.passageHandler;
    
    for(const src of $passageHandler.currentPassage.sources){
        
        for(const word of src.allusionWords){
            
            let $copiedWord = JSON.parse(JSON.stringify(word));
            
            $copiedWord.source = src.id;
            
            contentArr.push($copiedWord);
        }
    }
}

function _AddDefaultContent(contentArr){

    const $defaultContent = defaultPoemContent;

    for(const c of $defaultContent){

        let $copiedC = JSON.parse(JSON.stringify(c));
        
        contentArr.push($copiedC);
    }
}

function _AddPlayerDomeContent(contentArr){

    // coming soon, push copies
}

// validate number of contents passed