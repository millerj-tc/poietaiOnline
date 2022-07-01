import {GetElementById,CreateElement} from "./../ui.js";
import {GetPoemHTMLFromPoemCreatorOutput} from "./../poemCreator/poemCreatorUtils.js";
import {TogglePoemCreatorTrayCollapsed,TogglePoemReciterCollapsed} from "./../uiUtils.js";

export function PoemEvaluationFlow(poem){
    
    const $poemText = _GetPoemCreatorPoemIfArgIsNull(poem);
    
    const $wordArr = _ParsePoemText($poemText);
    
    const $srcPkgArr = _GetAlludedSources($wordArr);
    
    console.log($srcPkgArr);
    
    //** _AllusionEvaluation($srcArr);
    
     _AppendToNavOutput($poemText);
    
     _CollapseTheMenuThePoemCameFrom();
}

function _GetPoemCreatorPoemIfArgIsNull(poem){
    
    if(poem != null) return poem
    else return GetPoemHTMLFromPoemCreatorOutput();
}

function _ParsePoemText(poem){
    
    let $poemText = poem
    
    if($poemText.match(/\.|,|!|\?|\[|]/gm) != null){
    
        for(const match of $poemText.match(/\.|,|!|\?|\[|]/gm)){

            $poemText = $poemText.replace(match, " " + match);
        }
    }
    
    let $returnArr = [];
    
    const $virtualDOM = CreateElement("div");
    
    $virtualDOM.innerHTML = $poemText;
    
    const $virtualDOMSplitArr = $virtualDOM.innerText.split(" ");
    
    for(const i of $virtualDOMSplitArr){
        
        $returnArr.push(i.replace("\n",""));
    }
    
    return $returnArr
}

function _GetAlludedSources(wordArr){
    
    const $sourceHandler = window.gameHandler.sourceHandler;
    
    const $returnArr = [];
    
    for(const src of $sourceHandler.sources){
        
        let $srcPkg = {id:src.id,triggeredAllusionWords:[]}
        
        for(const allusionWord of src.allusionWords){
            
            for(const poemWord of wordArr){
                
                if(poemWord == allusionWord.text) $srcPkg.triggeredAllusionWords.push(poemWord);
            }
        }
        
        if($srcPkg.triggeredAllusionWords.length > 0) $returnArr.push($srcPkg);
    }
    
    return $returnArr
}

function _AppendToNavOutput(poem){
    
    const $navOutput = GetElementById("navigationOutput");
    
    let $found = false;
    
    for(const child of $navOutput.children){
        
        if(child.id == "navigationOutputPlayerPoemSpeak") $found = true;
    }
    
    if(!$found){
        
        const $navOutputPlayerPoemSpeak = CreateElement("div");
        
        $navOutputPlayerPoemSpeak.classList.add("navigationOutputPlayerPoemSpeak");
        
        $navOutputPlayerPoemSpeak.id = "navigationOutputPlayerPoemSpeak";
        
        $navOutput.append($navOutputPlayerPoemSpeak);
    }
    
    const $navOutputPlayerPoemSpeak = GetElementById("navigationOutputPlayerPoemSpeak");
    
    $navOutputPlayerPoemSpeak.insertAdjacentHTML("beforeend", `"`);
    
    $navOutputPlayerPoemSpeak.insertAdjacentHTML("beforeend", poem);
    
    $navOutputPlayerPoemSpeak.insertAdjacentHTML("beforeend", `."<br><br>`);
}

function _CollapseTheMenuThePoemCameFrom(){
    
    TogglePoemCreatorOutputCollapsed();
    TogglePoemReciterCollapsed();
    
}