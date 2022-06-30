import {GetElementById,SetDisplayTo} from "./../ui.js";
import {GetUserPoems} from "./firebaseGetUserData.js";

export function LoginFlow(){
    
    const $lw = GetElementById("loginWrapper");
    
    SetDisplayTo($lw,"none");
    
    GetUserPoems();

}