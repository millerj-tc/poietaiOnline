import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";

import {GetElementById} from "./../ui.js";

import {TestRetrieveName} from "./firebaseGetUserData.js";

export function Register(){
    
    const email = GetElementById("newUserEmail").value;
    const pass = GetElementById("newUserPass").value;

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
    }

export function Login(){
    
    const email = GetElementById("existingUserEmail").value;
    const pass = GetElementById("existingPass").value;
    const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
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

