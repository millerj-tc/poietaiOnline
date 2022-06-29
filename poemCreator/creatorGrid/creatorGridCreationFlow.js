import {creatorGridHandler} from "./creatorGridHandler.js";

import {GetElementById,CreateElement} from "./../../ui.js";

export function CreatorGridCreationFlow(gridspaceCount = 16){
    
    const gridHandler = new creatorGridHandler();
    
    const gridspaceWidth = 150;
    const gridspaceHeight = 150;
    
    _CreateGridspaces(gridHandler,gridspaceCount);
    
    _SetEachGridspaceWidthHeight(gridHandler,gridspaceWidth,gridspaceHeight);
    
    _SetEachGridspaceScreenXY(gridHandler);
    
    _AppendToPoemCreatorDiv(gridHandler);
    
    console.log(gridHandler);
}

function _CreateGridspaces(gridHandler,gridspaceCount){
    
    let i = 0;
    
    while(i < gridspaceCount){
        
        gridHandler.CreateGridspace();
        
        i++;
    }
}

function _SetEachGridspaceWidthHeight(gridHandler,gridspaceWidth,gridspaceHeight){
    
    for(const gs of gridHandler.gridspaces){
        
        gs.width = gridspaceWidth;
        gs.height = gridspaceHeight;
    }
}

function _SetEachGridspaceScreenXY(gridHandler){
    
    if(gridHandler.squareLayout){
        
        let currColumnIndex = 0;
        let currRowIndex = 0;
        
        for(let i = 0; i < gridHandler.gridspaces.length; i++){
            
            const gs =  gridHandler.gridspaces[i];
            
            gs.screenY = currRowIndex * gs.height;
            
            gs.screenX = currColumnIndex *gs.width;
            
            currColumnIndex++;
            
            if(currColumnIndex >= gridHandler.columnCount - 1){
                
                currColumnIndex = 0;
                currRowIndex++;
            }
        }
    }
}

function _AppendToPoemCreatorDiv(gridHandler){
    
    const $gridDOM = GetElementById("poemCreatorGrid");
    
    for(const gs of gridHandler.gridspaces){
        
        const $gsDiv = CreateElement("div");
        
        $gsDiv.top = gs.screenY + "px";
        
        $gsDiv.left = gs.screenX + "px";
        
//        $gsDiv.width = gs.width + "px";
//        
//        $gsDiv.height = gs.height + "px";
        
        $gsDiv.classList.add("poemCreatorGridSpace");
        
        $gridDOM.append($gsDiv);
        
        //gs.DOM = $gsDiv;
        
    }
}