import * as poemCreatorContentGather from "./poemCreatorContentGather.js";
import * as poemCreatorContentModify from "./poemCreatorContentModify.js";
import * as poemCreatorContentPass from "./poemCreatorContentPass.js";
import * as poemCreatorDisplayBuild from "./poemCreatorDisplayBuild.js";

function poemCreatorDisplayBuildFlow(){
    
    let $contentArr = [];
    
    poemCreatorContentGatherer.GatherContentFlow($contentArr);
    
    poemCreatorContentModifier.ModifyContentFlow($contentArr);
    
    poemCreatorContentPasser.PassContentFlow($contentArr);
    
    poemCreatorDisplayBuilder.LoadContentDivsFlow($contentArr);
}