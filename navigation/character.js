import {poem} from "./../poemRememberer/poemMemoryHandler.js";
import {GetElementById,SetInnerTextTo} from "./../ui.js";

export class character
{
    constructor(id,name,prounouns = "they"){
        
        this.id = id;
        this.name = name;
        this.identityRevealed = true;
        this.unrevealedDesription;
        this.attentive = true;
        this.usedKeywords = [];
        this.recitedToToday = false;
        this.heardPoems = [];
        this.presentPassages = [];
        this.favoritePoemMetrics = [];
        
        if(pronouns == "he"){
            
            this.pronouns = {they: "he", them: "him", their: "his", theirs: "his", themself: "himself", are:"is"};

        }
        else if(pronouns == "she"){
            
            this.pronouns = {they: "she", them: "her", their: "her", theirs: "hers", themself: "herself",are:"is"};
        }
    
        else if(pronouns == "they"){
            
            this.pronouns = {they: "they", them: "them", their: "their", theirs: "theirs", themself: "themself",are:"are"};   
        }
    }
    
    GetCharacterName(){
        
        if(this.identityRevealed) return this.name;
        
        else return this.unrevealedDescription;
    }
    
    GetPronouns(){
        
        return this.pronouns;
    }
    
    SetIdUnrevealedAndDescription(descrip){
        
        this.identityRevealed = false;
        
        this.unrevealedDesription = descrip;
    }
    
    SetPoemEvalMetric(points,func,arg0,arg1,arg2){
    
        this.favoritePoemMetrics.push({points:points,func:func,arg0:arg0,arg1:arg1,arg2:arg2});
    }
    
    AddHeardPoem(parsedPoemText,poemKey,heardPoemDate){
        
        for(const poem of this.heardPoems){
            
            if(poem.poemKey == poemKey) return
        }
        
        const $poem = new poem(parsedPoemText,poemKey);
        
        $poem.heardPoemDate = heardPoemDate;
        
        this.heardPoems.push($poem);
    }
    
    AddToPassagePresence(passageId){
        
        this.presentPassages.push(passageId);
    }
    
    ShareFavoritePoems(){
        
        const $favLink = GetElementById(`${this.id}FavoriteLink`);
        
        const $twoDaysOfMilliseconds = 86,400,000 * 2;
        
        const $last48HoursPoems = this.heardPoems.filter(p => p.heardPoemDate >= (Date.now() - $twoDaysOfMilliseconds))
    }
}