import {GetElementById} from "./../ui.js";

export function poemRemembererShowPoems(){
    
    const $divArr = _GetDivsFromPoemMemoryHandler();
    
    _AppendDivs($divArr);
}

function _GetDivsFromPoemMemoryHandler(){
    
    const $divArr = window.gameHandler.poemMemoryHandler.ConvertAllPoemsToButtonDivs();
    
    return $divArr
}

function _AppendDivs(divArr){
    
    const $output = GetElementById("poemRemembererDisplay");
    
    for(const div of divArr){
        
        $output.append(div);
    }
}