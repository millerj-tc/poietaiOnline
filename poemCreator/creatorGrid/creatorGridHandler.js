class gridspace
{
    constructor(){
        
        this.gridX;
        this.gridY;
        this.screenX;
        this.screenY;
    }
}

export class creatorGridHandler
{
    constructor(){
        
        this.gridspaces = [];
    }
    
    CreateGridspace(){
        
        const $gs = new gridspace();
        
        this.gridspaces.push($gs);
        
        return $gs
    }
}