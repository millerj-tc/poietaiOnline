import { getDatabase, ref, child, push, update } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

export class actionLogger
{
    constructor(){
        
        this.sessionKey;
        this.actionLog = [];
        this.intervalId = 0;
    }
    
    SetSessionKey(key){
        
        this.sessionKey = key;
    }
    
    AddAction(actionString){
        
        this.actionLog.push(actionString);
    }
    
    ReportAndStartNewInterval(){
        
        if(this.actionLog.length == 0){
            
            this._ReportAction("none");
        }
        else{
            
            for(const action of this.actionLog){
                
                this._ReportAction(action);
            }
        }
        
        this.actionLog = [];
        this.intervalId += 10;
    }
    
    _ReportAction(actionString) {
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
      updates['/sessions/' + this.sessionKey + `/actions/` + objIntervalId + `/` ] = postData;

      return update(ref(db), updates);
    }
}

