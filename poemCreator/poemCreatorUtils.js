import {GetElementById} from "./../ui.js";

export function GetPoemHTMLFromPoemCreatorOutput(){
    
    let $returnString = "";
    
    const outputDivs = GetElementById("poemCreatorOutput").childNodes;
    
    for(const div of outputDivs){
        
        if(div.innerHTML == "&nbsp;") $returnString += " ";
        else if(div.outerHTML == "<br>") $returnString += "\n";
        else if(div.innerHTML != undefined) $returnString += div.innerHTML;
    }
    
    return $returnString;
}