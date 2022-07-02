import {GetElementById,CreateElement,ClearInnerHTML,GetOrCreateDivInsideDOM,SetInnerTextTo} from "./../ui.js";
import {GetPoemHTMLFromPoemCreatorOutput,RestoreSpacesBeforePunctuation} from "./../poemCreator/poemCreatorUtils.js";
import {PoemReciterTrayClose,CapitalizeLettersAfterAppropriatePunctuation,PoemCreatorTrayClose} from "./../uiUtils.js";
import {ParseNavigationText} from "./../navigation/navigationUtils.js";

export function PoemEvaluationFlow(poem){
    
    const $poemText = _GetPoemCreatorPoemIfArgIsNull(poem);
    
    const $wordArr = _ParsePoemText($poemText);
    
    const $srcPkgArr = _GetAlludedSources($wordArr);
    
    console.log($srcPkgArr);
    
     _PassageFXEvaluate();
    
     _AppendToNavOutput($poemText);
    
     _CollapseTheMenuThePoemCameFrom();
}

function _GetPoemCreatorPoemIfArgIsNull(poem){
    
    if(poem != null) return poem
    else return GetPoemHTMLFromPoemCreatorOutput();
}

function _ParsePoemText(poem){
    
    let $poemText = poem.slice();
    
    $poemText = RestoreSpacesBeforePunctuation($poemText);
    
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
                
                if(poemWord.toLowerCase() == allusionWord.text) $srcPkg.triggeredAllusionWords.push(poemWord);
            }
        }
        
        if($srcPkg.triggeredAllusionWords.length > 0) $returnArr.push($srcPkg);
    }
    
    return $returnArr
}

function _PassageFXEvaluate(){
    
    window.gameHandler.passageHandler.currentPassage.passageFxHandler.Evaluate();
}

function _AppendToNavOutput(poem){
    
    let $recitationText = `You recite: "` + poem + `."<br><br>`;
    
    const $navOutput = GetElementById("navigationOutput");
    
    const $navOutputPlayerPoemSpeak = GetOrCreateDivInsideDOM("navigationOutputPlayerPoemSpeak",$navOutput);
    
    $navOutputPlayerPoemSpeak.classList.add("navigationOutputPlayerPoemSpeak");
    
    ClearInnerHTML($navOutputPlayerPoemSpeak);
    
    $navOutputPlayerPoemSpeak.insertAdjacentHTML("beforeend", $recitationText);
    
    const $adjustedInnerText = ParseNavigationText($navOutputPlayerPoemSpeak.innerText);
    
    SetInnerTextTo($navOutputPlayerPoemSpeak,$adjustedInnerText);
    
    CapitalizeLettersAfterAppropriatePunctuation($navOutputPlayerPoemSpeak.id);
}

function _CollapseTheMenuThePoemCameFrom(){
    
    PoemCreatorTrayClose("closed");
    PoemReciterTrayClose("closed");
    
}