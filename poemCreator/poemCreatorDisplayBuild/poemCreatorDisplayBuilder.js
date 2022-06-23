import {poemCreatorDisplayUpdater} from "./../poemCreatorDisplayUpdater.js";

// see pr comments

//class poemCreatorDisplay
//{
//    constructor(){
//        
//    }
//}

export class poemCreatorDisplayBuilder
{
    static LoadContentDivsFlow(divArr){
        
        let $divArr = divArr;
        
        this._AddEventListenerToAllDivs($divArr); //player indicator doesn't need to listen for this
        
        $divArr.push(this._CreatePlayerDiv()); //so it's inserted and style classes added appropriately
        
        this._AddStyleClassesToAllDivs($divArr);
        
        this._AppendDivsToPoemCreationGrid($divArr);
        
//        const $poemCreatorDisplay = this._CreatePoemCreatorDisplay();
        
        ///
    }
    
//    static _CreatePoemCreatorDisplay(){
//        
//        return new poemCreatorDisplay();
//    }
    
    static _CreatePlayerDiv(){
        
        const $playerDiv = document.createElement("div");
        
        $playerDiv.innerHTML = "X";
        
        $playerDiv.classList.add("jsPoemCreatorPlayerIndicator");
        
        $playerDiv.classList.add("cssPoemCreatorPlayerIndicator");
        
        return $playerDiv
    }
    
    static _AddStyleClassesToAllDivs(divArr){
        
        for(const div of divArr){
            
            div.classList.add("cssPoemCreatorContent")
        }
    }
    
    static _AddEventListenerToAllDivs(divArr){
        
        for(const div of divArr){
            
            div.addEventListener("click", function(){poemCreatorDisplayUpdater.ContentDivPressed(div)});
        }
    }
    
    static _AppendDivsToPoemCreationGrid(divArr){
        
        for(const div of divArr){
            
            document.getElementById("poemCreatorGrid").append(div);
        }
    }
    
//    static _GetDivGridXY(){
//        
//        let xyObj = {};
//        
//        return xyObj
//    }
//    
//    static _CheckForGridCollision(div0XYObj,div1XYObj){
//        
//        
//    }

}
