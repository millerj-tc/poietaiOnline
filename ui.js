export function GetElementById(id){
    
    return document.getElementById(id)
}

export function CreateElement(type){
    
    return document.createElement(type)
}

export function SetDisplayTo(div,display){

    div.style.display = display;
}

export function ClearAllChildren(div){
    
    for(const child of div.childNodes){
        
        child.remove();
    }
}