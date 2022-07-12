class domeWord{
    
    constructor(text,frequency,key){
        
        this.text = text;
        this.frequency = frequency;
        this.key = key;
    }
}

export class domeWordHandler{
    
    constructor(){
        
        this.domeWords = [];
    }
    
    IsAlreadyDomeWord(text){
        
        for(const w of this.domeWords){
            
            if(w.text == text) return true
        }
        
        return false
    }
    
    AddDomeWord(text,frequency,key){
        
        if(this.IsAlreadyDomeWord(text)) return
        
        const $word = new domeWord(text,frequency,key);
        
        this.domeWords.push($word);
    }
}