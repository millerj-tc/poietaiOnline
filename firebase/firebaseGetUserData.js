import { getDatabase, ref, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

import {PullPoemsFromProfileIntoMemoryFlow} from "./firebasePullPoemsFromProfileIntoMemoryFlow.js";

export function TestRetrieveName(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/` + window.uid + `/Name`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
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