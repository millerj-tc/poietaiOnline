import * as poemCreatorContentGather from "./poemCreatorContentGather.js";
import * as poemCreatorContentModify from "./poemCreatorContentModify.js";
import * as poemCreatorContentPass from "./poemCreatorContentPass.js";
import * as poemCreatorDisplayBuild from "./poemCreatorDisplayBuild.js";

//import GetLocation from that class and just pass to ContentGather?

function poemCreatorDisplayBuildFlow(){
    
    let $contentArr = [];
    
    poemCreatorContentGather.Flow($contentArr);
    
    poemCreatorContentModify.Flow($contentArr);
    
    poemCreatorContentPass.Flow($contentArr);
    
    poemCreatorDisplayBuild.Flow($contentArr);
}