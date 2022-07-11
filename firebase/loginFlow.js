import {GetElementById,SetDisplayTo} from "./../ui.js";
import {GetUserDataAtLoginFlow} from "./firebaseGetUserData.js";
import {InitializeWorldPassages} from "./../navigation/worldPassages.js";
import {NavigationFlow} from "./../navigation/navigationFlow.js";
import {GetCharacterHeardPoems} from "./characterDatabaseValues.js";
import {EstablishSession} from "./firebaseAuth.js";

export function LoginFlow(){
    
    GetUserDataAtLoginFlow();

}

function _GetCharacterData(){
    
    for(const charObj of window.gameHandler.characterHandler.characters){
        
        GetCharacterHeardPoems(charObj);
    }
}

export function PostUserDataRetrievalFlow(){
    
     const $lw = GetElementById("loginWrapper");
    
    if(!window.gameHandler.actionLogger.optOut) EstablishSession()
    
    SetDisplayTo($lw,"none");
    
    InitializeWorldPassages();
    
    _GetCharacterData();
    
    //** DetermineUserLocation();
    
    NavigationFlow("hotApartment");
    
    window.gameHandler.loggingIn = false;
}