export function GetElementById(id){
    
    return document.getElementById(id)
}

export function CreateElement(type){
    
    return document.createElement(type)
}

export function SetDisplayTo(div,display){

    div.style.display = display;
}