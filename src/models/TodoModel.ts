export class TodoModel {
    rowNumber : number
    rowDesc : string 
    rowAssigned : string 

    constructor (rowNumber : number, rowDesc : string, rowAssigned : string)
    {
        this.rowNumber = rowNumber
        this.rowDesc = rowDesc
        this.rowAssigned = rowAssigned
        
    }
}