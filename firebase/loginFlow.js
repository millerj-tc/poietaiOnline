import {GetElementById,SetDisplayTo} from "./../ui.js";
import {GetUserDataAtLoginFlow} from "./firebaseGetUserData.js";
import {InitializeWorldPassages} from "./../navigation/worldPassages.js";
import {NavigationFlow} from "./../navigation/navigationFlow.js";

export function LoginFlow(){
    
    GetUserDataAtLoginFlow();  

}

export function PostUserDataRetrievalFlow(){
    
     const $lw = GetElementById("loginWrapper");
    
    SetDisplayTo($lw,"none");
    
    InitializeWorldPassages();
    
    //** DetermineUserLocation();
    
    NavigationFlow("hotApartment");
}