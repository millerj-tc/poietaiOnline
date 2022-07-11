import { getDatabase, ref, child, push, update } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

export class actionLogger
{
    constructor(){
        
        this.sessionKey;
        this.actionLog = [];
        this.intervalId = 0;
        this.optOut;
    }
    
    SetOptOut(bool){
        
        this.optOut = bool;
    }
    
    SetSessionKey(key){
        
        this.sessionKey = key;
    }
    
    AddAction(actionHeader,actionString = "none"){
        
        this.actionLog.push({actionHeader:actionHeader,actionString:actionString});
    }
    
    ReportAndStartNewInterval(){
        
        if(this.actionLog.length == 0){
            
            //this._ReportAction("none","none");
        }
        else{
            
            for(const action of this.actionLog){
                
                this._ReportAction(action.actionHeader,action.actionString);
            }
        }
        
        this.actionLog = [];
        this.intervalId += 10;
    }
    
    _ReportAction(actionHeader,actionString) {
      const db = getDatabase();
        const objIntervalId = this.intervalId;

      // A post entry.
      const postData = {
        action: actionString,
      };

      // Get a key for a new Post.
      const newActionKey = push(child(ref(db), 'actions ')).key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      const updates = {};
      updates['/sessions/' + this.sessionKey + `/actions/` + objIntervalId + `/` + actionHeader + `/` +  newActionKey] = postData;

      return update(ref(db), updates);
    }
}

