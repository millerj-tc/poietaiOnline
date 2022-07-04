angularimport {conditionHandler} from "./../conditionHandler/conditionHandler.js";

class passageFx
{
    constructor(fxHandlerOwner,FxFunc,arg0,arg1,arg2){
        
        this.fxHandlerOwner = fxHandlerOwner;
        this.FxFunc = FxFunc;
        this.conditionHandler = new conditionHandler();
        this.arg0 = arg0;
        this.arg1 = arg1;
        this.arg2 = arg2;
    }
}

class characterResponse
{
    constructor(text,keywordsArr){
        
        this.text = text;
        this.keywordsArr = keywordsArr;
    }
}

class characterResponseHandler
{
    constructor(characterId){
        
        this.characterId = characterId;
        this.characterResponses = [];
    }
}

export class passageFxHandler
{
    constructor(){
        
        this.passageFxs = [];
        this.defaultFx;
        this.characterResponseHandlers = [];
    }
    
    AddPassageFx(FxFunc,arg0,arg1,arg2){
        
        const $psgFx = new passageFx(this,FxFunc,arg0,arg1,arg2);
        
        this.passageFxs.push($psgFx);
        
        return $psgFx
    }
    
    AddCharacterResponse(characterId,text,keywordsArr){
        
        let $crh = null;
        
        for(const crh of this.characterResponseHandlers){
            
            if(crh.characterId == characterId) $crh = crh
        }
        
        if($crh == null){
            
            $crh = new characterResponseHandler(characterId);
            
            this.characterResponseHandlers.push($crh);
            
        }
        
        $crh.characterResponses.push(new characterResponse(text,keywordsArr));
        
    }
    
    AddDefaultPassageFx(FxFunc,arg0,arg1,arg2){
        
        const $psgFx = new passageFx(this,FxFunc,arg0,arg1,arg2);
        
        this.defaultFx = $psgFx;
        
        return $psgFx
    }
    
    Evaluate(){
        
        for(const fx of this.passageFxs){
            
            if(fx.conditionHandler.Evaluate()){ 
                fx.FxFunc(fx.arg0,fx.arg1,fx.arg2);
                return
            }
        }
        
        this.defaultFx.FxFunc(this.defaultFx.arg0,this.defaultFx.arg1,this.defaultFx.arg2);
    }
}