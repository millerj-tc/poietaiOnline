import {poem} from "./../poemRememberer/poemMemoryHandler.js";
import {GetElementById,SetInnerTextTo,ClearInnerHTML} from "./../ui.js";
import {ReplaceNReturnWithBr} from "./../uiUtils.js";

export class character
{
    constructor(id,name,pronouns = "they"){
        
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
        this.bestPoemEver = `"That is the best poem I've ever heard!"`;
        this.bestRecentPoem = `"That is the best poem I've heard in a few days!"`;
        
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
    
    AddPoemEvalMetric(points,func,arg0,arg1,arg2){
    
        this.favoritePoemMetrics.push({points:points,func:func,arg0:arg0,arg1:arg1,arg2:arg2});
    }
    
    AddHeardPoem(poemText,poemKey,heardPoemDate,reciterName){
        
        for(const poem of this.heardPoems){
            
            if(poem.poemKey == poemKey) return
        }
        
        const $poem = new poem(poemText,poemKey);
        
        $poem.heardPoemDate = heardPoemDate;
        
        $poem.reciterName = reciterName;
                
        this.heardPoems.push($poem);
    }
    
    AddToPassagePresence(passageId){
        
        this.presentPassages.push(passageId);
    }
    
    ShareFavoritePoems(){
        
        window.gameHandler.actionLogger.AddAction(`AskFaves: ${this.id}`);
        
        let $displayString = "";
        
        const $recentlyHeardPoems = this._GetPoemsHeardInLast48Hours();
        
        const $favLink = GetElementById(`${this.id}FavoriteLink`);
        
        let $favRecentPoem = null;
        
        if($recentlyHeardPoems.length >= 1){
        
            $favRecentPoem = this.GetFavoriteRecentPoem();
            
        }
        
        const $favAllTimePoem = this.GetFavoriteAllTimePoem();
        
        if($favRecentPoem != null && $favRecentPoem.points >= 0 && $favRecentPoem.poem.poemText != $favAllTimePoem.poem.poemText){
            
            $displayString += `"My favorite poem I've heard recently is by ${$favRecentPoem.poem.reciterName} and goes like this:<br><br>'${$favRecentPoem.poem.poemText}'"<br><br>`;
        }
        
        $displayString += `"My favorite poem of all time is by ${$favAllTimePoem.poem.reciterName}:<br><br>'${$favAllTimePoem.poem.poemText}'"<br><br>`;
        
        $displayString = ReplaceNReturnWithBr($displayString);
        
        ClearInnerHTML($favLink);
        
        $favLink.insertAdjacentHTML("beforeend",$displayString);
        
        $favLink.classList.remove("passageLink");
    }
    
    GetFavoriteAllTimePoem(){
            
        return this._HeardPoemEvaluatedPkgsArrOrderedByEvalMetrics(this.heardPoems)[0]
    }
    
    GetFavoriteRecentPoem(){
        
        const $recentlyHeardPoems = this._GetPoemsHeardInLast48Hours();
            
        return this._HeardPoemEvaluatedPkgsArrOrderedByEvalMetrics($recentlyHeardPoems)[0]
    }
    
    _GetPoemsHeardInLast48Hours(){
        
        const $twoDaysOfMilliseconds = 172800000;
        
        return this.heardPoems.filter(p => p.heardPoemDate >= (Date.now() - $twoDaysOfMilliseconds))
    }
    
    _HeardPoemEvaluatedPkgsArrOrderedByEvalMetrics(heardPoemArr){
        
        const $returnArr = [];
        
        if(this.favoritePoemMetrics.length == 0) console.error("Character has no poem evaluation metrics to determine favorite");
        
        for(const poem of heardPoemArr){
            
            const $evaluatedPoemPkg = {poem:poem,points:0};
            
            for(const metric of this.favoritePoemMetrics){
                
                if(metric.func(poem.poemText,metric.arg0,metric.arg1,metric.arg2)){ 

                    $evaluatedPoemPkg.points += metric.points;
                }
            }
            
            $returnArr.push($evaluatedPoemPkg);
        }
        
        const $sortedArr = $returnArr.sort((a,b) => b.points - a.points);
        
        return $sortedArr;
    }
}