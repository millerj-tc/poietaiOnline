import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";

import { getDatabase, ref, set, child, push, update } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

import {LoginFlow} from "./loginFlow.js";

import {GetElementById} from "./../ui.js";

import {TestRetrieveName} from "./firebaseGetUserData.js";

export function Register(){
    
    SignOut();
    
    const email = GetElementById("newUserEmail").value;
    const pass = GetElementById("newUserPass").value;
    
    if(pass.length < 7) window.alert("Password is too few characters :(");

    const auth = getAuth();   

    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        _PushCharacterNameToDatabase();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }

function _PushCharacterNameToDatabase(){
    
    const db = getDatabase();
    
    const name = GetElementById("newUserChar").value
    
    set(ref(db, 'users/' + window.uid), {
        name: name,
        poems: {}
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
    
    _SaveLoginDate();
    LoginFlow();        
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}

function _SaveLoginDate(){
    
    const db = getDatabase();

  // A post entry.
  const postData = {

    loginDate: Date.now(),

  };

  // Get a key for a new Post.
  const newLoginKey = push(child(ref(db), 'logins ')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates[`/logins/` + newLoginKey + `/` ] = postData;

  return update(ref(db), updates);
}

export function TestLoginMe(){
    
 GetElementById("existingUserEmail").value = "j.sam.miller@gmail.com";
 GetElementById("existingPass").value = "password";
    
Login();
    

}

export function SignOut(){

    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
}

