export function GetElementById(id){
    
    return document.getElementById(id)
}

export function CreateElement(type){
    
    return document.createElement(type)
}

export function GetOrCreateDivInsideDOM(id,DOM){
    
    for(const child of DOM.children){
        
        if(child.id == id) return child
    }
    
    if(!$found){
        
        const $div = CreateElement("div");
        
        $div.id = id;
        
        DOM.append($div);
        
        return $div
    }
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

export function ClearInnerHTML(div){
    
    div.innerHTML = "";
}