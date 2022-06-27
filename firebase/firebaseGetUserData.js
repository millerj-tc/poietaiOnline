import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

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