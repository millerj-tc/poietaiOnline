import { getDatabase, ref, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

import {PullPoemsFromProfileIntoMemoryFlow} from "./firebasePullPoemsFromProfileIntoMemoryFlow.js";

export function RetrieveName(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/` + window.uid + `/name`)).then((snapshot) => {
      if (snapshot.exists()) {
         window.gameHandler.SetPlayerName(snapshot.val());
          console.log(window.gameHandler.playerName);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}

export function RetreiveOptOutStatus(){
    
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/` + window.uid + `/optOut`)).then((snapshot) => {
      if (snapshot.exists()) {
          console.log(snapshot.val());
        window.gameHandler.actionLogger.SetOptOut(snapshot.val());
          if(window.gameHandler.actionLogger.optOut == false) setInterval(function(){window.gameHandler.actionLogger.ReportAndStartNewInterval()},10000);
          console.log(window.gameHandler.actionLogger.optOut);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}

export function GetUserPoems(n=3){
    
    const db = getDatabase();
    const poems = ref(db, 'users/' + window.uid + '/poems');
    onValue(poems, (snapshot) => {
        const data = snapshot.val();

        PullPoemsFromProfileIntoMemoryFlow(data);
    });
}