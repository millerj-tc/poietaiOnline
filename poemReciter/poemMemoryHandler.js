export class poemMemoryHandler
{
    constructor(){
        
        this.poems = [];
    }
    
    AddPoemToMemory(poemObj){
        
        this.poems.push(poemObj);
    }
}