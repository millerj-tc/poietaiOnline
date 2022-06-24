export function poemCreatorContentModifyFlow(contentArr,n=16){
    
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
    
    for(let i; i < n; i++){
        
        let $roll = Math.random();
        
        for(const modWrap of modWrapArr){
            
            if($roll > modWrap.rollFloor && $roll <= modWrap.rollCeiling) $returnArr.push(modWrap);
        }
    }
    
    return $returnArr
}