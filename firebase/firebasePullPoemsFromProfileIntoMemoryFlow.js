import {GetUserPoems} from "./firebaseGetUserData.js";

export function PullPoemsFromProfileIntoMemoryFlow(data){
    
    const poemObjArr = data;
    
    _ParsePoemText(data,poemObjArr);
}

function _ParsePoemText(data,poemObjArr){
    
    for(const poemObjString in poemObjArr){
        
        const passedPoemObj = {};
        
        const pulledPoemObj = data[poemObjString];
        
        passedPoemObj.parsedPoemText = pulledPoemObj.poemText;
        
        window.gameHandler.poemMemoryHandler.AddPoemToMemory(passedPoemObj);
    }
}