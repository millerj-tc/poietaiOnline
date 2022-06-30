import {GetUserPoems} from "./firebaseGetUserData.js";

export function PullPoemsFromProfileIntoMemoryFlow(data){
    
    console.log(data);
    
    const poemObjArr = data;
    
    _ParsePoemText(data,poemObjArr);
}

function _ParsePoemText(data,poemObjArr){
    
    for(const poemObjString in poemObjArr){
        
        const passedPoemObj = {};
        
        const pulledPoemObj = data[poemObjString];
        
        passedPoemObj.parsedPoemText = pulledPoemObj.poemText.replace(/\Q+&nbsp;\E/g," ").replace(/\Q++\E/g,"\n");
        
        window.gameHandler.poemMemoryHandler.AddPoemToMemory(passedPoemObj);
    }
    
    console.log(window.gameHandler.poemMemoryHandler);
}