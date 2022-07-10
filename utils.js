export function ShuffleArray(array) {
    
    
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    
    return [...array]
}

export function GetDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}

export function ReplacePronouns(char,string){
    
    let $returnString = string;
    
    $returnString = $returnString.replaceAll("[they]",char.GetPronouns().they);
    
    $returnString = $returnString.replaceAll("[them]",char.GetPronouns().them);
    
    $returnString = $returnString.replaceAll("[their]",char.GetPronouns().their);
    
    $returnString = $returnString.replaceAll("[theirs]",char.GetPronouns().theirs);
    
    $returnString = $returnString.replaceAll("[themself]",char.GetPronouns().themself);
    
    if(char.GetPronouns().they != "they"){
    
        $returnString = $returnString.replaceAll("[are]","is");
    }
    
    return $returnString
}