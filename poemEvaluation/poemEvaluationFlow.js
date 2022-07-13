import {GetElementById,CreateElement,ClearInnerHTML,GetOrCreateDivInsideDOM,SetInnerTextTo,ScrollIntoView} from "./../ui.js";
import {GetPoemHTMLFromPoemCreatorOutput,RestoreSpacesBeforePunctuationAndStripCarriageReturns,GetPoemFromPoemCreatorOutput} from "./../poemCreator/poemCreatorUtils.js";
import {PoemReciterTrayClose,CapitalizeLettersAfterAppropriatePunctuation,PoemCreatorTrayClose,ReplaceNReturnWithBr} from "./../uiUtils.js";
import {ParseNavigationText} from "./../navigation/navigationUtils.js";
import {AppendCharacterResponsesFlow} from "./AppendCharacterResponsesFlow.js";
import {HeardPoemToCharacterDatabaseEntry} from "./../firebase/characterDatabaseValues.js";
import {ConvertStringWithHTMLToPlainText} from "./poemEvaluationUtils.js";

export function PoemEvaluationFlow(poem){
    
    const $poemText = _GetPoemCreatorPoemIfArgIsNull(poem);
    
    _AppendToNavOutput($poemText);
    
    _PresentCharactersHearPoemStoreToDatabase($poemText);
    
    _PresentCharactersConvertFaveTextToFaveLink();
    
    _StoreRecitedPoemTextToActionLogger($poemText);
    
    const $wordArr = _ParsePoemText($poemText);
    
    const $srcPkgArr = _GetAlludedSources($wordArr);
    
    _PassageFXEvaluate();
    
    _ScrollToRecitationSpan();
    
    AppendCharacterResponsesFlow();
    
     _CollapseTheMenuThePoemCameFrom();
}

function _GetPoemCreatorPoemIfArgIsNull(poem){
    
    if(poem != null) return poem
    else return GetPoemHTMLFromPoemCreatorOutput();
}

function _StoreRecitedPoemTextToActionLogger(poemText){
    
    window.gameHandler.actionLogger.AddAction(`Recite poem`,poemText);
}

function _PresentCharactersHearPoemStoreToDatabase(poemText){
    
    const $poemText = ConvertStringWithHTMLToPlainText(poemText);
    
    const $currPassage = window.gameHandler.passageHandler.currentPassage;
    
    for (const char of window.gameHandler.characterHandler.characters){
        
        for(const presentPassageId of char.presentPassages){
            
            if(presentPassageId == $currPassage.id) {
                
                let $match = false;
                
                for(const poem of char.heardPoems){
                    
                    if(poem.reciterName == window.gameHandler.playerName && poem.poemText == $poemText) $match = true
                }
                
                if(!$match) HeardPoemToCharacterDatabaseEntry($poemText,char.id);
            }
        }
    }
}

function _PresentCharactersConvertFaveTextToFaveLink(){
    
    const gh = window.gameHandler;
    
    for(const char of window.gameHandler.characterHandler.characters){
        
        if(char.presentPassages.includes(gh.passageHandler.currentPassage.id)){
        
            const $favLink = GetElementById(`${char.id}FavoriteLink`);

            ClearInnerHTML($favLink);

            const $their = char.GetPronouns().their;

            $favLink.insertAdjacentHTML("beforeend", `Ask ${char.GetCharacterName()} ${$their} favorite poem<br><br>`)

            $favLink.classList.add("passageLink");

            $favLink.addEventListener("click",function(){char.ShareFavoritePoems()})
        }
        
    }
}

function _ParsePoemText(poem){
    
    let $poemText = poem.slice();
    
    $poemText = RestoreSpacesBeforePunctuationAndStripCarriageReturns($poemText);
    
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
    
    let $poemText = ReplaceNReturnWithBr(poem);
    
    let $recitationText = `You recite:<br> "<span id='recitePoemText'>` + $poemText + `</span>"<br><br>`;
    
    const $navOutput = GetElementById("navigationOutput");
    
    const $navOutputPlayerPoemSpeak = GetOrCreateDivInsideDOM("navigationOutputPlayerPoemSpeak",$navOutput);
    
    $navOutputPlayerPoemSpeak.classList.add("navigationOutputPlayerPoemSpeak");
    
    ClearInnerHTML($navOutputPlayerPoemSpeak);
    
    $navOutputPlayerPoemSpeak.insertAdjacentHTML("beforeend", $recitationText);
}

function _ScrollToRecitationSpan(){
    
    const $navOutputPlayerPoemSpeak = GetElementById("navigationOutputPlayerPoemSpeak");
    
    ScrollIntoView($navOutputPlayerPoemSpeak);
}

function _CollapseTheMenuThePoemCameFrom(){
    
    PoemCreatorTrayClose("closed");
    PoemReciterTrayClose("closed");
    
}