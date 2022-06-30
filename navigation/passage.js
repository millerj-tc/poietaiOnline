class source
{
    constructor(id){
        
        this.id = id;
        this.allusionWords = [];
    }
    
    SetAllusionWords(arr){
        
        for(const word of arr){
            
            if(!word.hasOwnProperty("text") || !word.hasOwnProperty("frequency")){
                
                console.error(`SetAllusionWords: ${word} is missing text or frequency!`);
            }
            
            this.allusionWords.push(word);
        }
    }
}

export class sourceHandler
{
    constructor(){
        
        this.sources = [];
    }
}

export class passage
{
    constructor(id){
        
        this.id = id;
        this.text;
        this.sources = [];
    }
    
    SetText(text){
        
        this.text = text;
    }
    
    AddSource(id){
        
        const $source = new source(id);
        
        window.gameHandler.sourceHandler.sources.push($source);
        
        this.sources.push($source);
        
        return $source
    }
    
}