import {poemMemoryHandler} from "./poemRememberer/poemMemoryHandler.js";
import {sourceHandler} from "./navigation/passage.js";
import {passageHandler} from "./navigation/passageHandler.js";

export class gameHandler
{
    constructor(){
        
        this.poemMemoryHandler = new poemMemoryHandler();
        this.sourceHandler = new sourceHandler();
        this.passageHandler = new passageHandler();
    }
}