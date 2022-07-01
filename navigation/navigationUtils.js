import {CreateElement} from "./../ui.js";

export function ParseNavigationText(text){
    
    let $navText = text.slice();
    
    if($navText.match(/\[\[(\S*)]]/gm) != null){
    
        for(const m of $navText.match(/\[\[(\S*)]]/gm)){

            let $displayText = m.match(/\[\[(\S*)\|/gm)[0];

            $displayText = $displayText.replace("[[","");

            $displayText = $displayText.replace("|","");

            let $passageId = m.match(/\|(\S*)]]/gm)[0];

            $passageId = $passageId.replace("]]","");

            $passageId = $passageId.replace("|","");

            const $span = CreateElement("span");

            $span.innerHTML = $displayText;

            $span.classList.add("passageLink");

            $span.dataset.target = $passageId;

            $navText = $navText.replace(m,$span.outerHTML);
        }
    }
    
    return $navText
}