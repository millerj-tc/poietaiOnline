import {GetElementById,CreateElement} from "./../ui.js";
import {GetPoemHTMLFromPoemCreatorOutput} from "./../poemCreator/poemCreatorUtils.js";

export function PoemEvaluationFlow(poem){
    
    const $poemText = _GetPoemCreatorPoemIfArgIsNull(poem);
    
    const $wordArr = _ParsePoemText($poemText);
    
    const $srcPkgArr = _GetAlludedSources($wordArr);
    
    console.log($srcPkgArr);
    
    //** _AllusionEvaluation($srcArr);
    
    //** _AppendToNavOutput(poem); // give it PoemSpeak id and replace that id so there's only one poem on the screen at a time.
    
    //** _CollapseTheMenuThePoemCameFrom();
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

function _AppendToNavOutput(poem)