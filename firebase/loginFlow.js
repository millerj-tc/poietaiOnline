import {GetElementById,SetDisplayTo} from "./../ui.js";
import {GetUserPoems} from "./firebaseGetUserData.js";
import {InitializeWorldPassages} from "./../navigation/worldPassages.js";
import {NavigationFlow} from "./../navigation/navigationFlow.js";

export function LoginFlow(){
    
    const $lw = GetElementById("loginWrapper");
    
    setInterval(function(){window.gameHandler.actionLogger.ReportAndStartNewInterval()},10000)
    
    SetDisplayTo($lw,"none");
    
    GetUserPoems();
    
    InitializeWorldPassages();
    
    //** DetermineUserLocation();
    
    NavigationFlow("hotApartment");

}