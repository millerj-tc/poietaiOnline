import {poemCreatorContentGatherFlow} from "./poemCreatorContentGather.js";
import {poemCreatorContentModifyFlow} from "./poemCreatorContentModify.js";
import {poemCreatorContentPassFlow} from "./poemCreatorContentPass.js";
import {poemCreatorDisplayBuildFlow} from "./poemCreatorDisplayBuild.js";

//import GetLocation from that class and just pass to ContentGather?

export function poemCreatorDisplayFlow(){
    
    let $contentArr = [];
    
    let $gatheredContent = poemCreatorContentGatherFlow($contentArr);
    
    let $modWrapArr = poemCreatorContentModifyFlow($gatheredContent);
    
    let $divArr = poemCreatorContentPassFlow($modWrapArr);
    
    poemCreatorDisplayBuildFlow($divArr);
}