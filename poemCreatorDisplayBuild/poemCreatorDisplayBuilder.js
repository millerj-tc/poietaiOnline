class poemCreatorDisplay
{
    constructor(){
        
    }
}

export class poemCreatorDisplayBuilder
{
    static LoadContentDivsFlow(divArr){
        
        let $divArr = divArr;
        
        $divArr.push(this._CreatePlayerDiv()); //so it's inserted and style classes added appropriately
        
        const $poemCreatorDisplay = this._CreatePoemCreatorDisplay();
    }
    
    static _CreatePoemCreatorDisplay(){
        
        return new poemCreatorDisplay();
    }
    
    static _CreatePlayerDiv(){
        
        const $playerDiv = document.createElement("div");
        
        $playerDiv.innerHTML = "X";
        
        $playerDiv.classList.add("jsPoemCreatorPlayerIndicator");
        
        $playerDiv.classList.add("cssPoemCreatorPlayerIndicator");
        
        return $playerDiv
    }
    
    static _AddStyleClassesToAllDivs(){
        
        //.classList.add("cssPoemCreatorContent)
        
        //add to player too
    }

}