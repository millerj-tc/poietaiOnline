import {GetElementById} from "./../ui.js";

export function PoemEvaluationFlow(poem){
    
    const $poemText = _GetPoemCreatorPoemIfArgIsNull(poem);
    
    const $wordArr = _ParsePoemText($poemText);
    
    console.log($wordArr);
    
    const $srcArr = _GetAlludedSources($wordArr);
    
    //** _AllusionEvaluation($srcArr);
    
    //** _AppendToNavOutput(poem); // give it PoemSpeak id and replace that id so there's only one poem on the screen at a time.
    
    //** _CollapseTheMenuThePoemCameFrom();
}

function _GetPoemCreatorPoemIfArgIsNull(poem){
    
    if(poem != null) return poem
    else{
        
        let $returnString = "";
        
        for(const child of GetElementById("poemCreatorOutput").children){
            
            $returnString += child.innerHTML;
        }
        
        const $regexMatchArr = $returnString.match(/\&nbsp\;/gm);
        
        if($regexMatchArr.length > 0){
            
            for(const match of $regexMatchArr){
                
                $returnString = $returnString.replace(match," ");
            }
        }
        
        return $returnString
    }
}

function _ParsePoemText(poem){
    
    let $poemText = poem
    
    let $returnArr = [];
    
    let $splitArr = [];
    
    console.log($poemText);
    
    if($poemText.match(/\.|,|!|\?|\[|]/gm) != null){
    
        for(const match of $poemText.match(/\.|,|!|\?|\[|]/gm)){

            $poemText = $poemText.replace(match, " " + match);
        }
    }
        
    $splitArr = $poemText.split(" ");
    
    for(let i of $splitArr){
        
        if(i.match(/\n/gm) != null){
    
            for(const match of i.match(/\n/gm)){
                
                i = i.replace(match,"");
            }
            
            $returnArr.push(i);
    
        }
        else $returnArr.push(i);
    }
    
    return $returnArr
}

function _GetAlludedSources(wordArr){
    
    const $sourceHandler = window.gameHandler.sourceHandler;
    
    
}