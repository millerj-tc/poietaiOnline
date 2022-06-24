export function poemCreatorContentModifyFlow(contentArr,n=15){
    
    let $modWrapArr = _ReturnContentInModWrapper(contentArr);
    
    const $frequencySum = _GetFrequencySum($modWrapArr);
    
    _AssignModifiedFrequency($modWrapArr,$frequencySum);
    
    _AssignModWrapFloorsAndCeilingsForRolls($modWrapArr);
    
    return _RollUntilFulfillN($modWrapArr,n);
}

function _ReturnContentInModWrapper(contentArr){
    
    let $returnArr = [];
    
    for(const c of contentArr){
        
        $returnArr.push({modifiedFrequency:null,rollFloor:null,rollCeiling:null,content:c});
    }
    
    return $returnArr
}

function _GetFrequencySum(modWrapArr){
    
    let $returnSum = 0;
    
    for(const modWrap of modWrapArr){
        
        $returnSum += modWrap.content.frequency;
    }
    
    return $returnSum
}

function _AssignModifiedFrequency(modWrapArr,frequencySum){
    
    for(const modWrap of modWrapArr){
        
        modWrap.modifiedFrequency = modWrap.content.frequency / frequencySum;
    }
}

function _AssignModWrapFloorsAndCeilingsForRolls(modWrapArr){
    
    let $nextFloor = 0;
    
    for(const modWrap of modWrapArr){
        
        modWrap.rollFloor = $nextFloor;
        
        modWrap.rollCeiling = modWrap.rollFloor + modWrap.modifiedFrequency;
        
        $nextFloor = modWrap.rollCeiling;
    }   
}
    
function _RollUntilFulfillN(modWrapArr,n){
    
    let $returnArr = [];
    
    let i = 0;
    
    while(i < n){
        
        let $roll = Math.random();
        
        for(const modWrap of modWrapArr){
            
            if($roll > modWrap.rollFloor && $roll <= modWrap.rollCeiling){
                
                if(modWrap.content.text == "multiDiv"){
                    
                    if(!_CheckIfMultiDivFits(modWrap,i,n)) break
                    $returnArr = _ReturnArrInsertAllMultiDivDivs($returnArr,modWrap);
                    
                    i += modWrap.content.texts.length;
                    
                    break
                }

                $returnArr.push(modWrap);
                i++;
            }
        }
    }
    
    console.log($returnArr)
    
    return $returnArr
}

function _CheckIfMultiDivFits(modWrap,currentI,targetI){
    
    if(modWrap.content.texts.length + currentI < targetI) return true
    else return false
}

function _ReturnArrInsertAllMultiDivDivs(returnArr,multiDivModWrap){
    
    let $returnArr = returnArr
    
    for(const txt of multiDivModWrap.content.texts){
        
        let $newModWrap = {modifiedFrequency:null,rollFloor:null,rollCeiling:null,content:multiDivModWrap.content};
        
        $newModWrap.content.text = txt;
        
        $returnArr.push($newModWrap)
    }
    
    return $returnArr
}