import {GetElementById,CreateElement} from "./../ui.js";

export function GetPoemHTMLFromPoemCreatorOutput(){
    
    console.error("Should be converted to GetPoemFromPoemCreatorOutput (with mode arg)");
    
    let $returnString = "";
    
    const outputDivs = GetElementById("poemCreatorOutput").childNodes;
    
    for(const div of outputDivs){
        
        if(div.innerHTML == "&nbsp;") $returnString += " ";
        else if(div.outerHTML == "<br>") $returnString += "\n";
        else if(div.innerHTML != undefined) $returnString += div.innerHTML;
    }
    
    //trim the last whitespace
    
    $returnString = $returnString.slice(0, $returnString.length - 1);
    
    return $returnString;
}

export function GetPoemFromPoemCreatorOutput(mode = "text"){
    
    let $returnString = "";
    
    const outputDivs = GetElementById("poemCreatorOutput").childNodes;
    
    for(const div of outputDivs){
        
        if(div.innerHTML == "&nbsp;") $returnString += " ";
        else if(div.outerHTML == "<br>") $returnString += "\n";
        else if(div.innerHTML != undefined) $returnString += div.innerHTML;
    }
    
    //trim the last whitespace
    
    $returnString = $returnString.slice(0, $returnString.length - 1);
    
    if(mode == "text"){
        
         const $virtualDOM = CreateElement("div");
    
        $virtualDOM.innerHTML = $returnString;
    
        $returnString = $virtualDOM.innerText;
    }
    
    return $returnString.slice();
}

export function RestoreSpacesBeforePunctuationAndStripCarriageReturns(poemText){
    
    let $poemText = poemText.slice();
    
    if($poemText.match(/\.|,|!|\?|\[|]/gm) != null){
    
        for(const match of $poemText.match(/\.|,|!|\?|\[|]/gm)){

            $poemText = $poemText.replace(match, " " + match);
        }
    }
    
    $poemText = $poemText.replace(/\n/gm,"");
    
    return $poemText;
}