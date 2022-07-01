import {conditionHandler} from "./../conditionHandler/conditionHandler.js";

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

export class passageFxHandler
{
    constructor(){
        
        this.passageFxs = [];
    }
    
    AddPassageFx(FxFunc,arg0,arg1,arg2){
        
        const $psgFx = new passageFx(this,FxFunc,arg0,arg1,arg2);
        
        this.passageFxs.push($psgFx);
        
        return $psgFx
    }
    
    Evaluate(){
        
        for(const fx of this.passageFxs){
            
            if(fx.conditionHandler.Evaluate()) fx.FxFunc();
        }
    }
}