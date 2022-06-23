import {poemCreatorContentPasser} from "./poemCreatorContentPasser.js";
import {defaultPoemContent} from "./defaultPoemContent.js"

// see pr comments

export class poemCreatorContentGatherer
{
    static GatherContentFlow(){
        
        // how to control frequencies to make it good?
        
        let $contentArr = [];
        
        const $loc = this._GetPlayerLocation()
        
        this._AddCurrentLocationSources($contentArr,$loc);
        
        this._AddDefaultContent($contentArr);
        
        this._AddPlayerDomeContent($contentArr);
        
        this._ShuffleContent($contentArr);
        
        $contentArr = this._RollForContent($contentArr);
        
        poemCreatorContentPasser.PassContentFlow($contentArr)
    }
    
    static _GetPlayerLocation(){
        
        let $loc
        
        return $loc
    }
    
    static _AddCurrentLocationSources(contentArr,loc){
        
    }
    
    static _AddDefaultContent(contentArr){
        
        const $defaultContent = defaultPoemContent;
        
        for(const c in $defaultContent){
            
            contentArr.push(c);
        }
    }
    
    static _AddPlayerDomeContent(contentArr){
        
        // coming soon
    }
    
    static _ShuffleContent(contentArr){
        
        console.error("shuffle content here");
    }
    
    static _RollForContent(contentArr){
        
        console.error("roll for content here");
        
        let $returnArr;
        
        return $returnArr
    }
}

// validate number of contents passed
