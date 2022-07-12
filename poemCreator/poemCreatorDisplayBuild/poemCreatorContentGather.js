import {defaultPoemContent} from "./defaultPoemContent.js"
import {SaveDomeWordToProfile} from "./../../firebase/saveDataToUserProfile.js";

export function poemCreatorContentGatherFlow(contentArr){

    _AddCurrentPassageSourcesAndSaveDomeWords(contentArr);

    _AddDefaultContent(contentArr);

    _AddPlayerDomeContent(contentArr);
    
    console.log(contentArr);
    
    return contentArr
}

function _AddCurrentPassageSourcesAndSaveDomeWords(contentArr){

    //push copies
    
    const $passageHandler = window.gameHandler.passageHandler;
    
    for(const src of $passageHandler.currentPassage.sources){
        
        for(const word of src.allusionWords){
            
            let $copiedWord = JSON.parse(JSON.stringify(word));
            
            $copiedWord.source = src.id;
            
            contentArr.push($copiedWord);
            
            _SaveSourceWordToUserDomeWords($copiedWord);
        }
    }
}

function _SaveSourceWordToUserDomeWords(copiedWord){
    
    const dwh = window.gameHandler.domeWordHandler;
    
    if(dwh.IsAlreadyDomeWord(copiedWord.text)) return
    
    SaveDomeWordToProfile(copiedWord.text,copiedWord.domeFrequency);
}

function _AddDefaultContent(contentArr){

    const $defaultContent = defaultPoemContent;

    for(const c of $defaultContent){

        let $copiedC = JSON.parse(JSON.stringify(c));
        
        contentArr.push($copiedC);
    }
}

function _AddPlayerDomeContent(contentArr){

    const dwh = window.gameHandler.domeWordHandler;
    
    for (const dw of dwh.domeWords){
        
        let $match = false;
        
        for(const w of contentArr){
            
            if(w.text == dw.text) {
                console.log(`skipping ${w.text} as already present`);
                $match = true;
            }
            
        }
        
        if(!$match) contentArr.push(dw);
    }
}

// validate number of contents passed