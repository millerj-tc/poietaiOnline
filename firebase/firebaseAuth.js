import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";

import {TestRetrieveName} from "./firebaseGetUserData.js";

export function TestLogin(){
    
    console.log("start login creation");

const auth = getAuth();
createUserWithEmailAndPassword(auth, "j.sam.miller@gmail.com", "password")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    
    console.log("login created");
}

export function TestLoginMe(){
    
    const auth = getAuth();
        signInWithEmailAndPassword(auth, "j.sam.miller@gmail.com", "password")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    
    TestRetrieveName();

}

