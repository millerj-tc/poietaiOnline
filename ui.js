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
    
    const $children = [...div.children];
    
    for(const c of $children){
        
        c.remove();
    }
}