import {GetUserPoems} from "./firebaseGetUserData.js";

export function PullPoemsFromProfileIntoMemoryFlow(data){
    
    const poemObjArr = data;
    
    _ParsePoemText(data,poemObjArr);
}

function _ParsePoemText(data,poemObjArr){
    
    for(const poemObjString in poemObjArr){
        
        const pulledPoemObj = data[poemObjString];
    
        window.gameHandler.poemMemoryHandler.AddPoemToMemory(pulledPoemObj.poemText,poemObjString);
    }
}