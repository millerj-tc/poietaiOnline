import {GetElementById,SetDisplayTo} from "./../ui.js";
import {GetUserPoems} from "./firebaseGetUserData.js";
import {InitializeWorldPassages} from "./../navigation/worldPassages.js";
import {NavigationFlow} from "./../navigation/navigationFlow.js";

export function LoginFlow(){
    
    const $lw = GetElementById("loginWrapper");
    
    SetDisplayTo($lw,"none");
    
    GetUserPoems();
    
    InitializeWorldPassages();
    
    //** DetermineUserLocation();
    
    NavigationFlow("hotApartment");

}