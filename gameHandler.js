import {poemMemoryHandler} from "./poemRememberer/poemMemoryHandler.js";
import {sourceHandler} from "./navigation/passage.js";
import {passageHandler} from "./navigation/passageHandler.js";
import {actionLogger} from "./firebase/actionLogger.js";
import {characterHandler} from "./navigation/characterHandler.js";

export class gameHandler
{
    constructor(){
        
        this.playerName;
        this.poemMemoryHandler = new poemMemoryHandler();
        this.sourceHandler = new sourceHandler();
        this.passageHandler = new passageHandler();
        this.actionLogger = new actionLogger();
        this.characterHandler = new characterHandler();
        this.loggingIn = true;
    }
    
    SetPlayerName(name){
        
        this.playerName = name;
    }
}