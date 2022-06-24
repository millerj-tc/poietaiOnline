function Flow(contentArr){
    
    _WrapEachContentInModWrapper(contentArr);
    
    
}

function _WrapEachContentInModWrapper(contentArr){
    
    for(const c of contentArr){
        
        c = {modifiedFrequency:null,rollFloor:null,rollCeiling:null,content:c};
    }
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
    }
}