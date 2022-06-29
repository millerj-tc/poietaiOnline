class gridspace
{
    constructor(){
        
        this.gridX;
        this.gridY;
        this.screenX;
        this.screenY;
        this.width;
        this.height;
    }
}

export class creatorGridHandler
{
    constructor(squareLayout = true,columnCount = 4){
        
        this.gridspaces = [];
        this.squareLayout = squareLayout;
        this.columnCount = columnCount;
    }
    
    CreateGridspace(){
        
        const $gs = new gridspace();
        
        this.gridspaces.push($gs);
        
        return $gs
    }
}