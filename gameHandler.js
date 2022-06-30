import {poemMemoryHandler} from "./poemRememberer/poemMemoryHandler.js";
import {sourceHandler} from "./navigation/passage.js";

export class gameHandler
{
    constructor(){
        
        this.poemMemoryHandler = new poemMemoryHandler();
        this.sourceHandler = new sourceHandler();
    }
}